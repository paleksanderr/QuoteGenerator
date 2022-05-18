
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Show Loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
  


// Show a random quote
function newQuote() {
  loading();
  // Pick a random quote
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if quote is empty and replace it og Undefined
  if (!randomQuote.author) {
    authorText.textContent = "Undefined";
  } else {
    (authorText.textContent = randomQuote.author);
  }
  // Check the quote length to determine ty styling
  if (randomQuote.text.length > 120) {
    quoteText.classList.add("long-quote");}
  else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = randomQuote.text;
  complete();
}

// Get Quotes From API
async function getQuotes() {
  loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch (error) {
      alert(error);
    }
    }

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Onload
getQuotes();

