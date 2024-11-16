const quotes = [
    "Be yourself; everyone else is already taken.― Oscar Wilde",
    "You only live once, but if you do it right, once is enough.― Mae West",
    "So many books, so little time.― Frank Zappa",
    "Get busy living or get busy dying. - Stephen King",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein",
    "A room without books is like a body without a soul.― Marcus Tullius Cicero",
    "Be the change that you wish to see in the world.― Mahatma Gandhi"
];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}