const list = document.getElementById("schedule-list");
if (list) {
  list.innerHTML = `
    <div class="notice">
      <strong>Schedule not published</strong>
      <span>The UBWC schedule is intentionally still in planning. Dates, tournament links and registration information will be added here once the organizers confirm them.</span>
    </div>
    <article class="timeline-item">
      <div class="date"><small>STATUS</small>TBA</div>
      <div><h3>Qualification stages</h3><p>Dates and participation details will be announced together with the official schedule.</p></div>
      <div class="result">COMING SOON</div>
    </article>
    <article class="timeline-item">
      <div class="date"><small>STATUS</small>TBA</div>
      <div><h3>Championship final</h3><p>The final date and tournament links have not been announced.</p></div>
      <div class="result">TBA</div>
    </article>`;
}