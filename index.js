// Add event listeners to all buttons
for (let btn of document.querySelectorAll("button")) {
    btn.addEventListener("click", handleClick);
}

// Handle button clicks
function handleClick() {
    
    var buttonInnerHTML = this.innerHTML;

    
    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("sound/goblet.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sound/tabla.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sound/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sound/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sound/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sound/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sound/tom-1.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
