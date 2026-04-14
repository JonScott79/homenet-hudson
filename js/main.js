// ================
// Hank!
// ================

document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;

  let hankLines = [];

  // TECH PAGE LINES
  if (path.includes("tech")) {
    hankLines = [
      "Slow internet? Yeah, we’re fixing that.",
      "WiFi acting up? I’ve seen worse.",
      "Most issues take one visit. Seriously.",
      "No tech jargon. Just fixed.",
      "Yeah… that’s definitely fixable.",
      "We’ll get this running right.",
      "Dead zones? Not on my watch.",
      "You won’t need to call support again.",
      "I fix it right the first time.",
      "Let’s clean this mess up."
    ];
  }

  // 💻 WEB PAGE LINES
  else if (path.includes("web")) {
    hankLines = [
      "Nice website… but does it get customers?",
      "Speed matters. A lot.",
      "Most sites don’t convert. Mine do.",
      "Google needs structure. I handle that.",
      "Let’s get you ranking.",
      "Fast sites win. Period.",
      "This is where your growth starts.",
      "Your competition won’t like this.",
      "Clicks are nice. Customers are better.",
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