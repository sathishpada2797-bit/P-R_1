//
// ==========================================
// OPEN INVITATION ANIMATION
// ==========================================
//

const openingScreen = document.getElementById("openingScreen");
const openInvitationBtn = document.getElementById("openInvitation");

openInvitationBtn.addEventListener("click", () => {

  // Fade out opening screen
  openingScreen.classList.add("hide-opening");

  // Enable scroll after opening
  document.body.style.overflow = "auto";

});

//
// ==========================================
// DISABLE SCROLL BEFORE OPENING
// ==========================================
//

document.body.style.overflow = "hidden";

//
// ==========================================
// BACKGROUND MUSIC CONTROL
// ==========================================
//

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

musicToggle.addEventListener("click", async () => {

  try {

    if (!isPlaying) {

      await music.play();

      musicToggle.innerHTML = "♫ Pause Music";
      musicToggle.classList.add("active");

      isPlaying = true;

    } else {

      music.pause();

      musicToggle.innerHTML = "♫ Play Music";
      musicToggle.classList.remove("active");

      isPlaying = false;

    }

  } catch (error) {

    console.log("Music autoplay blocked:", error);

  }

});

//
// ==========================================
// AUTO PLAY MUSIC AFTER OPEN INVITATION
// ==========================================
//

openInvitationBtn.addEventListener("click", async () => {

  try {

    await music.play();

    musicToggle.innerHTML = "♫ Pause Music";
    musicToggle.classList.add("active");

    isPlaying = true;

  } catch (error) {

    console.log("Autoplay blocked:", error);

  }

});

//
// ==========================================
// COUNTDOWN TIMER
// ==========================================
//

// Wedding Date
const weddingDate = new Date("June 07, 2026 07:35:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  // Update HTML
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  // Wedding day reached
  if (distance < 0) {

    clearInterval(countdownInterval);

    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";

  }

}

//
// ==========================================
// FORMAT TIME
// ==========================================
//

function formatTime(time) {

  return time < 10 ? `0${time}` : time;

}

//
// ==========================================
// START COUNTDOWN
// ==========================================
//

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);

//
// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
//

const revealElements = document.querySelectorAll(
  ".story-card, .event-card, .gallery-item, .save-date-card, .wish-card, .rsvp-card"
);

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("show");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

//
// ==========================================
// WISH FORM
// ==========================================
//

const wishForm = document.querySelector(".wish-form");

wishForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const input = wishForm.querySelector("input");
  const textarea = wishForm.querySelector("textarea");

  const name = input.value.trim();
  const message = textarea.value.trim();

  if (name === "" || message === "") {

    alert("Please fill all fields 💛");
    return;

  }

  // Success Message
  alert("Thank you for your lovely wishes 💖");

  // Clear Form
  input.value = "";
  textarea.value = "";

});

//
// ==========================================
// PARALLAX EFFECT
// ==========================================
//

window.addEventListener("scroll", () => {

  const scrolled = window.scrollY;

  const heroImage = document.querySelector(".hero-image");

  if (heroImage) {

    heroImage.style.transform =
      `scale(1.08) translateY(${scrolled * 0.08}px)`;

  }

});

//
// ==========================================
// SMOOTH SCROLL
// ==========================================
//

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

//
// ==========================================
// LOADING ANIMATION
// ==========================================
//

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

//
// ==========================================
// MOBILE TOUCH ANIMATION
// ==========================================
//

const buttons = document.querySelectorAll(
  ".open-btn, .rsvp-btn, .wish-form button, .music-btn"
);

buttons.forEach((button) => {

  button.addEventListener("touchstart", () => {

    button.classList.add("touch-active");

  });

  button.addEventListener("touchend", () => {

    setTimeout(() => {

      button.classList.remove("touch-active");

    }, 150);

  });

});
