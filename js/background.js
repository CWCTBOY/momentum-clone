const bgi = [
  "https://images2.alphacoders.com/480/thumb-1920-480530.png"
];

function intervalBgi() {
  const randomBgi = bgi[Math.floor(Math.random() * bgi.length)];
  const body = document.querySelector("body");
  body.style = `background-image: url(${randomBgi});`;
};

intervalBgi();