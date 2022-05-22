const images = [];

let iter;
for (iter = 0; iter < 8; iter++) {
    images.push(`${iter}.jpg`);
}

const selImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `url(../img/${selImage})`;