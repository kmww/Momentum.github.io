const images = [];

let iter;
for(iter =0; iter < 9; iter++){
    images.push(`${iter}.png`);
}

const selImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `linear-gradient( 
    rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) )
,url(../img/${selImage})`;