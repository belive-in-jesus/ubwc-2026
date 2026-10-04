loadUBWCData().then(engine=>{
  const rows=engine.individualTotals(), body=document.getElementById("players-body");
  body.innerHTML=rows.length ? rows.map((p,i)=>`
    <tr><td>${i+1}</td><td>${p.name}</td>
    <td>${p.teamIds.map(id=>window.UBWC_DATA.teams.find(t=>t.id===id)?.name||id).join(", ")||"—"}</td>
    <td>${p.score.toLocaleString()}</td></tr>`).join("") :
    `<tr><td colspan="4">No imported player results yet.</td></tr>`;
});