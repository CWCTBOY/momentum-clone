const quotes = [
  {
    quote: "You will never find time for anything. If you want time, you must make it.",
    author: "-Charles Buxton"
  },
  {
    quote: "Unless you are breaking stuff, you are not moving fast enough.",
    author: "-Mark Zuckerberg"
  },
  {
    quote: "There is not excuse for not trying.",
    author: "-Barak Obama"
  },
  {
    quote: "Stay hungry, Stay foolish.",
    author: "-Steve Jobs"
  },
  {
    quote: "It is possible for ordinary people to choose to be extraordinary",
    author: "-Elon Musk"
  }
];

const quote = document.querySelector("div .quotes_content");
const author = document.querySelector("div .quotes_author");

function randomQuotes() {
  const randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomNumber.quote;
  author.innerHTML = randomNumber.author;
};

randomQuotes();





