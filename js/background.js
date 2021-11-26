const bgi = [
  "https://p4.wallpaperbetter.com/wallpaper/166/117/196/anarchy-anonymous-dark-hacker-wallpaper-preview.jpg",
  "https://www.teahub.io/photos/full/88-885387_android-developer-wallpaper-hd.jpg",
  "https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png",
  "https://images2.alphacoders.com/480/thumb-1920-480530.png",
  "https://images8.alphacoders.com/115/thumb-1920-1156488.png"
];

function intervalBgi() {
  const randomBgi = bgi[Math.floor(Math.random() * bgi.length)];
  const body = document.querySelector("body");
  body.style = `background-image: url(${randomBgi});`;
};

intervalBgi();