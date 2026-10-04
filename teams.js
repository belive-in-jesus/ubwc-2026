const teams = [
  ["TBD","Team registration not opened"],
  ["TBD","Team registration not opened"],
  ["TBD","Team registration not opened"],
  ["TBD","Team registration not opened"],
  ["TBD","Team registration not opened"],
  ["TBD","Team registration not opened"]
];
document.getElementById("team-grid").innerHTML = teams.map((t,i)=>`
  <article class="team-card"><div class="rank">${String(i+1).padStart(2,"0")}</div><h3>${t[0]}</h3><p>${t[1]}</p></article>`).join("");