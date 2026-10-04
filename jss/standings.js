loadUBWCData().then(engine => {
  const stages=["First Qualifier","Quarterfinals","Semifinals"];
  const body=document.getElementById("standings-body");
  const selector=document.getElementById("stage-selector");
  function render(stage){
    const rows=engine.qualification(stage);
    body.innerHTML=rows.length ? rows.map(r=>`
      <tr class="${r.qualified?"qualified":""}">
        <td>${r.rank}</td><td>${r.team}</td><td>${r.placements.join(", ")}</td>
        <td>${r.score.toLocaleString()}</td><td>${r.qualified?"QUALIFIED":"—"}</td>
      </tr>`).join("") :
      `<tr><td colspan="5">No imported results for this stage yet.</td></tr>`;
  }
  selector.innerHTML=stages.map(s=>`<option>${s}</option>`).join("");
  selector.addEventListener("change",e=>render(e.target.value));
  render(stages[0]);
});