const DEFAULT_CONFIG = {
  event: {
    name: "UBWC 2026",
    fullName: "UltraBullet World Championship",
    status: "preparation",
    statusLabel: "Preparation Phase",
    description: "UBWC 2026 is currently in preparation."
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
    const response = await fetch("./data/config.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Config unavailable");
    const remote = await response.json();
    return {
      ...DEFAULT_CONFIG,
      ...remote,
      event: { ...DEFAULT_CONFIG.event, ...(remote.event || {}) },
      visibility: { ...DEFAULT_CONFIG.visibility, ...(remote.visibility || {}) },
      messages: { ...DEFAULT_CONFIG.messages, ...(remote.messages || {}) }
    };
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
  setText("status-badge", (e.statusLabel || "Preparation Phase").toUpperCase());
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

  const menuButton = document.querySelector(".nav-toggle, .menu-toggle");
  const nav = document.getElementById("main-nav") || document.getElementById("nav-links") || document.querySelector(".nav-wrap nav");
  if (menuButton && nav && !menuButton.dataset.bound) {
    menuButton.dataset.bound = "true";
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  if (v.registrationOpen && config.links?.registration) {
    const container = document.querySelector(".hero-actions");
    if (container && !container.querySelector("[data-registration-link]")) {
      const btn = document.createElement("a");
      btn.dataset.registrationLink = "true";
      btn.className = "button primary";
      btn.href = config.links.registration;
      btn.target = "_blank";
      btn.rel = "noopener";
      btn.textContent = "Register";
      container.appendChild(btn);
    }
  }
}

init();