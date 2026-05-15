//
// ==========================================
// DISABLE SCROLL INITIALLY
// ==========================================
//

document.body.style.overflow = "hidden";

//
// ==========================================
// ELEMENTS
// ==========================================
//

const openingScreen =
  document.getElementById("openingScreen");

const openInvitationBtn =
  document.getElementById("openInvitation");

const music =
  document.getElementById("bgMusic");

const musicToggle =
  document.getElementById("musicToggle");

//
// ==========================================
// MUSIC STATE
// ==========================================
//

let isPlaying = false;

//
// ==========================================
// OPEN INVITATION
// ==========================================
//

openInvitationBtn.addEventListener(
  "click",
  async () => {

    // Enable Scroll

    document.body.style.overflow = "auto";

    // Hide Opening Screen

    openingScreen.classList.add(
      "hide-opening"
    );

    // Auto Play Music

    try{

      await music.play();

      isPlaying = true;

      musicToggle.innerHTML =
        "♫ Music";

      musicToggle.classList.add(
        "active"
      );

    }catch(error){

      console.log(
        "Autoplay blocked:",
        error
      );

    }

  }
);

//
// ==========================================
// MUSIC TOGGLE
// ==========================================
//

musicToggle.addEventListener(
  "click",
  async () => {

    try{

      if(!isPlaying){

        await music.play();

        isPlaying = true;

        musicToggle.classList.add(
          "active"
        );

      }else{

        music.pause();

        isPlaying = false;

        musicToggle.classList.remove(
          "active"
        );

      }

    }catch(error){

      console.log(
        "Music error:",
        error
      );

    }

  }
);

//
// ==========================================
// TOUCH FEEDBACK
// ==========================================
//

const buttons = document.querySelectorAll(
  ".open-btn, .music-btn"
);

buttons.forEach((button) => {

  button.addEventListener(
    "touchstart",
    () => {

      button.style.transform =
        "scale(0.97)";

    }
  );

  button.addEventListener(
    "touchend",
    () => {

      setTimeout(() => {

        button.style.transform = "";

      }, 150);

    }
  );

});

//
// ==========================================
// PAGE LOAD
// ==========================================
//

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

  }
);
