/*
 UBWC Tournament Engine V2
 Input: data/results.json, data/teams.json, data/players.json
 Individual score = official final Lichess score.
 Team ranking = placement first, Lichess score second.
*/
window.UBWCEngine = (() => {
  const cfg = window.UBWC_CONFIG, state = window.UBWC_DATA;
  const teamMap = Object.fromEntries(state.teams.map(t => [t.id,t]));
  const playerMap = Object.fromEntries(state.players.map(p => [p.id,p]));

  function getBattlePlayerScores(battle) {
    return (battle?.scores || []).map(s => ({
      ...s, player: playerMap[s.playerId] || null,
      team: teamMap[s.teamId] || null, score: Number(s.score) || 0
    }));
  }

  function individualTotals() {
    const totals = {};
    for (const battle of state.results.battles) {
      for (const s of getBattlePlayerScores(battle)) {
        const key = s.account || s.playerId;
        if (!key) continue;
        if (!totals[key]) totals[key] = {
          account:key, playerId:s.playerId, name:s.player?.name || s.account,
          teamIds:new Set(), score:0
        };
        totals[key].score += s.score;
        if (s.teamId) totals[key].teamIds.add(s.teamId);
      }
    }
    return Object.values(totals).map(x => ({...x,teamIds:[...x.teamIds]}))
      .sort((a,b)=>b.score-a.score);
  }

  function teamScoresForBattle(battle) {
    const grouped = {};
    for (const s of getBattlePlayerScores(battle)) {
      if (!s.teamId) continue;
      (grouped[s.teamId] ||= []).push(s);
    }
    const rows = Object.entries(grouped).map(([teamId,scores]) => {
      const team = teamMap[teamId];
      const roster = new Set((team?.players || []).map(String));
      const eligible = roster.size
        ? scores.filter(s => roster.has(String(s.playerId)) || roster.has(String(s.account)))
        : scores;
      const selected = eligible.sort((a,b)=>b.score-a.score).slice(0,cfg.maxPlayersPerTeam);
      return {
        teamId, team:team?.name || teamId,
        score:selected.reduce((sum,s)=>sum+s.score,0),
        playerCount:selected.length, players:selected
      };
    });
    rows.sort((a,b)=>b.score-a.score);
    rows.forEach((r,i)=>r.placement=i+1);
    return rows;
  }

  function stageTeams(stage) {
    const battles = state.results.battles.filter(b=>b.stage===stage);
    const aggregate = {};
    for (const battle of battles) {
      for (const row of teamScoresForBattle(battle)) {
        aggregate[row.teamId] ||= {teamId:row.teamId,team:row.team,score:0,battles:0,placements:[]};
        aggregate[row.teamId].score += row.score;
        aggregate[row.teamId].battles++;
        aggregate[row.teamId].placements.push(row.placement);
      }
    }
    const rows = Object.values(aggregate);
    rows.sort((a,b)=>{
      const ap=a.placements.reduce((x,y)=>x+y,0)/Math.max(1,a.placements.length);
      const bp=b.placements.reduce((x,y)=>x+y,0)/Math.max(1,b.placements.length);
      return ap-bp || b.score-a.score;
    });
    rows.forEach((r,i)=>r.rank=i+1);
    return rows;
  }

  function qualification(stage) {
    const limit = {
      "First Qualifier":cfg.qualification.firstQualifierAdvances,
      "Quarterfinals":cfg.qualification.quarterfinalsAdvances,
      "Semifinals":cfg.qualification.semifinalsAdvances
    }[stage];
    return stageTeams(stage).map(r=>({...r,qualified:limit ? r.rank<=limit:false}));
  }

  return {teamScoresForBattle,stageTeams,qualification,individualTotals};
})();
window.loadUBWCData = async function() {
  const [config,teams,players,results] = await Promise.all([
    fetch("./data/config.json").then(r=>r.json()),
    fetch("./data/teams.json").then(r=>r.json()),
    fetch("./data/players.json").then(r=>r.json()),
    fetch("./data/results.json").then(r=>r.json())
  ]);
  window.UBWC_CONFIG=config;
  window.UBWC_DATA={teams:teams.teams||[],players:players.players||[],results};
  return window.UBWCEngine;
};
