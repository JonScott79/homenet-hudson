// ================
// Hank!
// ================

document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;

  let hankLines = [];

  // TECH PAGE LINES
  if (path.includes("tech")) {
    hankLines = [
    "Slow systems? Yeah, we’ll fix that.",
    "Network issues, printers, computers… I handle it.",
    "Most problems are fixed in one visit.",
    "Home or business, same deal—we get it working.",
    "No tech jargon. Just working tech.",
    "Yeah… that’s fixable.",
    "We’ll get everything running the right way.",
    "If it’s tech, I’ve seen it before.",
    "You shouldn’t have to deal with this twice.",
    "I fix it right the first time.",
	"Losing time because of tech? That’s where I come in.",
    "Same-day service when you need it.",
	"Downtime costs you. Let’s fix that.",
    "Let’s clean this up."
    ];
  }

  // 💻 WEB PAGE LINES
  else if (path.includes("web")) {
    hankLines = [
    "Nice site… but is it bringing in customers?",
    "Speed matters more than people think.",
    "Most sites don’t convert. That’s the problem.",
    "Google cares about structure. I handle that.",
    "Let’s get you showing up.",
    "Fast, clean sites win. Every time.",
    "This is where growth actually starts.",
    "Your competition isn’t doing this right.",
    "Traffic is nice. Customers are better.",
    "No cookie-cutter sites here.",
    "Built by the guy behind Stir My Coffee.",
    "Let’s build something that works."
    ];
  }

  // 🏠 DEFAULT
  else {
    hankLines = [
      "I’ve got this.",
      "No tech jargon. Just results.",
      "Yeah… that’s fixable.",
      "Let’s get this working right.",
      "Seen worse. Much worse.",
      "Give me 10 minutes.",
      "This one’s easy.",
      "We’re not calling support. I AM support.",
      "I’ll fix it the right way.",
      "No guessing. Just solutions.",
      "Let’s make this actually work.",
      "You’re in good hands."
    ];
  }

  let lastLine = "";

  function getNewLine() {
    let newLine;
    do {
      newLine = hankLines[Math.floor(Math.random() * hankLines.length)];
    } while (newLine === lastLine);

    lastLine = newLine;
    return newLine;
  }

  const bubbles = document.querySelectorAll(".hank-text");

  function updateAllBubbles() {
    const line = getNewLine();
    bubbles.forEach(bubble => {
      bubble.textContent = line;
    });
  }

  // initial load
  updateAllBubbles();

  // hover interaction
  const wrappers = document.querySelectorAll(".hank-wrapper");

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("mouseenter", () => {
      updateAllBubbles();
    });
  });

  // ⏱️ chatter loop (more human timing)
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startChatter() {
    setTimeout(() => {
      updateAllBubbles();
      startChatter();
    }, randomInterval(10000, 20000)); // slower, more natural
  }

  startChatter();

});

// ====================
// Analytics
// ====================

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;

  if (scrollPercent > 0.5 && !window.scrolledHalf) {
    gtag('event', 'scroll_50', {'event_category': 'engagement'});
    window.scrolledHalf = true;
  }
});

//FOR FUTURE USE, NOT A DEAD FUNCTION!!!!!!!
//For analytics
function trackEvent(name, category, data = {}) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', name, {
        event_category: category,
        ...data
      });
    }
  } catch (e) {
    console.warn('Analytics event failed:', name);
  }
}
// onclick="trackEvent('call_click','conversion',{location:'hero'})"