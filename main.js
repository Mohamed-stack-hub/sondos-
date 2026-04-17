// Typing Effect
const typingText =
  " حاجة بسيطة عشانك يا ماما و يارب تفرحك❤️ انتي قدمتيلي كتير و كنتي جمبي في اوقات صعبة كتير اوي اوي ربنا يخليكي ليا و ميرحمني من خوفك عليا يا حبيبتي  ";
let i = 0;

function typing() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}

typing();

// Surprise Button
document.getElementById("btn").onclick = function () {
  alert(
    "اه ده انتي حمارة بقا عموما مبسوط انك موجودة و بجد وحشاني اوي اوي و حبي ليكي مقلش خالص  ❤️",
  );
};

// Hearts Animation
document.addEventListener("click", function () {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "90%";
  heart.style.fontSize = "24px";
  heart.style.animation = "float 2s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});

// Cinematic Photo Reveal
const photos = document.querySelectorAll(".photo");

let delay = 0;

photos.forEach((photo) => {
  setTimeout(() => {
    photo.classList.add("show");
  }, delay);

  delay += 1200;
});

// Parallax Text Animation
const parallaxText = document.querySelector(".parallax-text");

window.addEventListener("scroll", () => {
  const position = parallaxText.getBoundingClientRect().top;

  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    parallaxText.classList.add("show");
  }
});

// Alwyes Hearts
function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";

  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
