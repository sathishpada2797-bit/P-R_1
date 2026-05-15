// =====================================================
// COUNTDOWN TIMER
// =====================================================

function updateCountdown() {

  const target = new Date('2026-06-07T07:30:00');
  const now = new Date();

  const diff = target - now;

  if (diff <= 0) {

    ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id => {
      document.getElementById(id).textContent = '00';
    });

    return;
  }

  const d = Math.floor(diff / 86400000);

  const h = Math.floor(
    (diff % 86400000) / 3600000
  );

  const m = Math.floor(
    (diff % 3600000) / 60000
  );

  const s = Math.floor(
    (diff % 60000) / 1000
  );

  document.getElementById('cd-days').textContent =
    String(d).padStart(2, '0');

  document.getElementById('cd-hours').textContent =
    String(h).padStart(2, '0');

  document.getElementById('cd-mins').textContent =
    String(m).padStart(2, '0');

  document.getElementById('cd-secs').textContent =
    String(s).padStart(2, '0');
}

updateCountdown();

setInterval(updateCountdown, 1000);

// =====================================================
// WISHES
// =====================================================

const wishes = [];

function sendWish() {

  const nameEl = document.getElementById('wish-name');
  const textEl = document.getElementById('wish-text');

  const name = nameEl.value.trim();
  const text = textEl.value.trim();

  if (!name || !text) {

    if (!name) {
      nameEl.style.borderColor =
        'rgba(201,100,89,0.6)';
    }

    if (!text) {
      textEl.style.borderColor =
        'rgba(201,100,89,0.6)';
    }

    setTimeout(() => {

      nameEl.style.borderColor = '';
      textEl.style.borderColor = '';

    }, 1500);

    return;
  }

  wishes.unshift({
    name,
    text
  });

  nameEl.value = '';
  textEl.value = '';

  renderWishes();

  showWishSuccess();
}

function renderWishes() {

  const list = document.getElementById('wishes-list');

  if (wishes.length === 0) {

    list.innerHTML =
      '<p class="wish-empty">Leave your blessings</p>';

    return;
  }

  list.innerHTML = wishes.map(w => `

    <div class="wish-item cinematic-wish">

      <div class="wish-from">
        ${escapeHtml(w.name)}
      </div>

      <div class="wish-text">
        “${escapeHtml(w.text)}”
      </div>

    </div>

  `).join('');
}

function escapeHtml(str) {

  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =====================================================
// WISH SUCCESS EFFECT
// =====================================================

function showWishSuccess() {

  const button = document.querySelector('.wish-form .btn');

  if (!button) return;

  const original = button.innerHTML;

  button.innerHTML = 'Blessings Sent';

  button.style.transform = 'scale(1.04)';
  button.style.borderColor = '#c49a62';

  setTimeout(() => {

    button.innerHTML = original;

    button.style.transform = '';
    button.style.borderColor = '';

  }, 1800);
}

// =====================================================
// ENTER KEY SUPPORT
// =====================================================

document.getElementById('wish-name')
.addEventListener('keydown', function(e) {

  if (e.key === 'Enter') {

    e.preventDefault();

    document
      .getElementById('wish-text')
      .focus();
  }
});

document.getElementById('wish-text')
.addEventListener('keydown', function(e) {

  if (e.key === 'Enter' && !e.shiftKey) {

    e.preventDefault();

    sendWish();
  }
});

// =====================================================
// CINEMATIC SCROLL REVEAL
// =====================================================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('section-visible');

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.12
});

document.querySelectorAll('.section').forEach((el, index) => {

  el.classList.add('section-hidden');

  el.style.transitionDelay = `${index * 0.08}s`;

  observer.observe(el);
});

// =====================================================
// HERO PARALLAX GLOW
// =====================================================

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;

  const heroGlow = document.querySelector('.hero::after');

  const hero = document.querySelector('.hero');

  if (!hero) return;

  hero.style.backgroundPositionY =
    `${scrollY * 0.25}px`;
});

// =====================================================
// SOFT CARD PARALLAX
// =====================================================

const luxuryCards = document.querySelectorAll(
  '.story-card, .event-card, .family-side, .gallery-item'
);

luxuryCards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 4;

    const rotateX =
      ((y / rect.height) - 0.5) * -4;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = '';
  });
});

// =====================================================
// CINEMATIC IMAGE LOADING
// =====================================================

document.querySelectorAll('img').forEach(img => {

  img.addEventListener('load', () => {

    img.style.opacity = '0';

    requestAnimationFrame(() => {

      img.style.transition =
        'opacity 1.4s ease';

      img.style.opacity = '1';
    });
  });
});

// =====================================================
// FLOATING PETALS RANDOMIZER
// =====================================================

document.querySelectorAll('.petals span')
.forEach((petal, index) => {

  const size =
    Math.random() * 8 + 6;

  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petal.style.animationDelay =
    `${index * 2}s`;

  petal.style.opacity =
    (Math.random() * 0.25 + 0.08).toFixed(2);
});

// =====================================================
// CINEMATIC HERO RE-ENTRY ON REFRESH
// =====================================================

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
});