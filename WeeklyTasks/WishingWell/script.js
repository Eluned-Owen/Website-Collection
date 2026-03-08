let coin = document.querySelector(".coin");
// Quotes that will randomly display
const quotes = [
    "I wish my friend finds happiness soon.",
    "I wish my family stays healthy and safe.",
    "I wish I can stay focused and productive today.",
    "I wish I could find the strength to overcome this challenge.",
    "I wish I could spend more time with my loved ones.",
    "I wish my father recovers quickly."
];

// Counter to store which quote displays next using a random index
let count = Math.floor(Math.random() * 5) + 0;
/* console.log(count); */


// When the user clicks the coin element
coin.addEventListener("click", function() {

    // Making the coin move up into the well
    gsap.to(".coin", {
        y: -150,
        opacity: 0,
        duration: 1.5,
    });
    
    // Set a timeout for 2 seconds, then the alert shows
    hoverTimeout = setTimeout(function() {
        alert(quotes[count]);
    }, 2000); // 2000 milliseconds = 2 seconds
});
