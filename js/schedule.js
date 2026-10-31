const list = document.getElementById("schedule-list");

if (list) {
  list.innerHTML = `
    <div class="notice">
      <strong>Provisional planning schedule</strong>
      <span>All dates below are proposals, not a final announcement. Registration remains closed until the organizers confirm the schedule and publish the official tournament links.</span>
    </div>

    <article class="timeline-item">
      <div class="date"><small>PREPARATION</small>01–15<br>NOV 2026</div>
      <div><h3>Finalize organization</h3><p>Confirm the tournament structure, rules, responsibilities and the remaining organizational details.</p></div>
      <div class="result">PLANNING</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>PREPARATION</small>16–30<br>NOV 2026</div>
      <div><h3>Website, rules & technical tests</h3><p>Update the website, prepare the Lichess tournaments, verify scoring and complete technical checks.</p></div>
      <div class="result">PLANNING</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>ANNOUNCEMENT</small>01–10<br>DEC 2026</div>
      <div><h3>Official announcement & invitations</h3><p>Publish the confirmed event information and invite teams through Lichess and relevant chess communities.</p></div>
      <div class="result">TARGET</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>REGISTRATION</small>11–20<br>DEC 2026</div>
      <div><h3>Team registration & confirmation</h3><p>Collect registrations, confirm participating teams and answer questions. Registration is not open yet.</p></div>
      <div class="result">TARGET</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>FINAL CHECK</small>21–25<br>DEC 2026</div>
      <div><h3>Final preparations</h3><p>Check team lists, tournament settings, links, scoring procedures and organizer responsibilities.</p></div>
      <div class="result">TARGET</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>QUALIFIER</small>26<br>DEC 2026</div>
      <div><h3>Open qualifier</h3><p>Open to eligible teams. Three separate 90-minute Lichess UltraBullet Battles, with 5–10 minute breaks. The top 20 teams advance.</p></div>
      <div class="result">PROPOSED</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>QUARTERFINAL</small>27<br>DEC 2026</div>
      <div><h3>Quarterfinal</h3><p>The 20 qualified teams compete for 15 places in the semifinal.</p></div>
      <div class="result">PROPOSED</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>SEMIFINAL</small>28<br>DEC 2026</div>
      <div><h3>Semifinal</h3><p>The remaining 15 teams compete for the 10 places in the championship final.</p></div>
      <div class="result">PROPOSED</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>FINAL · DAY 1</small>29<br>DEC 2026</div>
      <div><h3>Championship final – first day</h3><p>The 10 finalist teams begin the three-day final series.</p></div>
      <div class="result">PROPOSED</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>FINAL · DAY 2</small>30<br>DEC 2026</div>
      <div><h3>Championship final – second day</h3><p>Second day of the final series. Daily results contribute to the overall championship ranking.</p></div>
      <div class="result">PROPOSED</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>BREAK</small>31 DEC<br>– 01 JAN</div>
      <div><h3>New Year break</h3><p>No tournament is planned for New Year's Eve or New Year's Day.</p></div>
      <div class="result">NO EVENT</div>
    </article>

    <article class="timeline-item">
      <div class="date"><small>FINAL · DAY 3</small>02<br>JAN 2027</div>
      <div><h3>Championship final – final day</h3><p>Final tournament day, completion of the overall team ranking and determination of the UBWC Team Champion and Individual Champion.</p></div>
      <div class="result">PROPOSED</div>
    </article>
  `;
}