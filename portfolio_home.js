document.addEventListener("DOMContentLoaded", function() {
    const helloText = "Hello,";
    const textArray = [
        "Welcome to my portfolio.",
        "I'm Raheem Peregrino-Taiwo, a passionate Software Engineer.",
        "I specialize in developing innovative and efficient solutions.",
        "Let's build something amazing together!"
    ];
    let currentIndex = 0;
    let currentCharIndex = 0;
    const helloElement = document.getElementById("hello");
    const typingElement = document.getElementById("typing");

    helloElement.innerHTML = helloText;

    function type() {
        if (currentCharIndex < textArray[currentIndex].length) {
            typingElement.innerHTML += textArray[currentIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            currentCharIndex = 0;
            currentIndex++;
            if (currentIndex < textArray.length) {
                setTimeout(function() {
                    typingElement.innerHTML = ""; // Clear previous text
                    type();
                }, 1000); // Adjust delay between sentences here
            } else {
                currentIndex = 0; // Reset to the first sentence
                setTimeout(function() {
                    typingElement.innerHTML = ""; // Clear previous text
                    type();
                }, 2000); // Adjust delay before restarting
            }
        }
    }

    type();
});



