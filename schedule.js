const schedule = [
  ["11 OCT 2026","First Qualifier","Open to all teams · 3 × 90-minute Battles","TOP 20"],
  ["12–14 OCT","Preparation & invitations","Verify results, confirm Top 20 and prepare the Quarterfinals.","—"],
  ["15 OCT 2026","Quarterfinals","20 qualified teams · 3 × 90-minute Battles","TOP 15"],
  ["16–18 OCT","Preparation & invitations","Verify results, confirm Top 15 and prepare the Semifinals.","—"],
  ["19 OCT 2026","Semifinals","15 qualified teams · 3 × 90-minute Battles","TOP 10"],
  ["20–22 OCT","Final preparation","Confirm finalists, rosters, tournament links and technical setup.","—"],
  ["23 OCT 2026","Finals — Day 1","10 teams · 3 × 90-minute Battles","STANDINGS"],
  ["24 OCT 2026","Finals — Day 2","10 teams · 3 × 90-minute Battles","STANDINGS"],
  ["25 OCT 2026","Finals — Day 3","10 teams · final 3 Battles","CHAMPION"]
];
document.getElementById("schedule-list").innerHTML = schedule.map((x,i)=>`
  <article class="timeline-item">
    <div class="date"><small>${i < 1 ? "START" : i >= 6 ? "FINALS" : "UBWC"}</small>${x[0]}</div>
    <div><h3>${x[1]}</h3><p>${x[2]}</p></div>
    <div class="result">${x[3]}</div>
  </article>`).join("");