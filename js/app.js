const DEFAULT_CONFIG = {
  event: {
    name: "UBWC 2026",
    fullName: "UltraBullet World Championship",
    status: "preparation",
    statusLabel: "Preparation Phase",
    description: "An international UltraBullet championship is currently being prepared."
  },
  visibility: {
    registrationOpen: false,
    schedulePublished: false,
    qualifiersPublished: false,
    playersPublished: false,
    standingsVisible: false,
    resultsVisible: false,
    finalPublished: false,
    countdownEnabled: false
  },
  messages: {}
};

async function loadConfig() {
  try {
    const response = await fetch("data/config.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Config unavailable");
    return { ...DEFAULT_CONFIG, ...await response.json() };
  } catch (error) {
    return DEFAULT_CONFIG;
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
}

function stateLabel(enabled, on, off) {
  return enabled ? on : off;
}

async function init() {
  const config = await loadConfig();
  const v = config.visibility;
  const e = config.event;
  const m = config.messages || {};

  setText("status-label", e.statusLabel);
  setText("hero-description", e.description);
  setText("status-badge", e.statusLabel.toUpperCase());
  setText("status-title", e.status === "live" ? "The UBWC is live." : "The UBWC is currently being prepared.");
  setText("status-text", e.description);

  setText("registration-state", stateLabel(v.registrationOpen, "Open", "Opening soon"));
  setText("schedule-state", stateLabel(v.schedulePublished, "Published", "To be announced"));
  setText("qualifiers-state", stateLabel(v.qualifiersPublished, "Published", "Coming soon"));
  setText("final-state", stateLabel(v.finalPublished, "Published", "TBA"));

  setText("registration-message", m.registration || "Registration information will appear here.");
  setText("schedule-message", m.schedule || "The official schedule has not been published yet.");
  setText("qualifiers-message", m.qualifiers || "Qualifier information will appear here.");
  setText("standings-message", m.standings || "Live standings will become available when the competition starts.");

  if (v.registrationOpen && config.links?.registration) {
    const btn = document.createElement("a");
    btn.className = "button primary";
    btn.href = config.links.registration;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Register";
    document.querySelector(".hero-actions")?.appendChild(btn);
  }
}

document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav-links");
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(open));
});

init();
