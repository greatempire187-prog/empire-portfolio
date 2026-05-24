const typedPhrases = [
  'Building systems that scale.',
  'Automating workflows with Python.',
  'Designing intelligent developer tools.'
];
const typedText = document.getElementById('typedText');
const themeToggle = document.getElementById('themeToggle');
const scrollTop = document.getElementById('scrollTop');
const cursorDot = document.getElementById('cursorDot');
const pageLoader = document.getElementById('pageLoader');

let typeIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = typedPhrases[typeIndex % typedPhrases.length];
  typedText.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex += 1;
    setTimeout(typeLoop, 110);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeLoop, 60);
    return;
  }

  if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1500);
    return;
  }

  deleting = false;
  typeIndex += 1;
  setTimeout(typeLoop, 400);
}

typeLoop();

window.addEventListener('mousemove', (event) => {
  cursorDot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-light');
  const isLight = document.body.classList.contains('theme-light');
  themeToggle.textContent = isLight ? 'Dark mode' : 'Light mode';
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

setTimeout(() => {
  if (pageLoader) {
    pageLoader.style.opacity = '0';
    setTimeout(() => pageLoader.remove(), 400);
  }
}, 900);
