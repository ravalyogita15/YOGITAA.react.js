document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const interval = setInterval(function() {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


        document.getElementById("countdown").innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Countdown expired!";
        }
    }, 1000);

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote;
});
