const bgi = [
  "https://c4.wallpaperflare.com/wallpaper/968/629/198/just-do-it-motivational-zen-wallpaper-thumb.jpg"
];

function intervalBgi() {
  const randomBgi = bgi[Math.floor(Math.random() * bgi.length)];
  const body = document.querySelector("body");
  body.style = `background-image: url(${randomBgi});`;
};

intervalBgi();