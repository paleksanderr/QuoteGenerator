
let apiQuotes = [];

// Show a random quote
function newQuote() {
  // Pick a random quote
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch (error) {
      alert(error);
    }
}

// Onload
getQuotes();
