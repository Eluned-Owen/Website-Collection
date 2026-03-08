var date = new Date();
var hour = date.getHours();

document.body.onload = function () {
    if (hour >= 22 || hour < 8) {
        document.body.style.background = "url('sleep.png') center center fixed";
        document.body.style.backgroundSize = "contain";
    }
    else if (hour >= 8 && hour < 14) {
        document.body.style.background = "url('atUni.png') center center fixed";
        document.body.style.backgroundSize = "contain";
    }
    else if (hour >= 14 && hour < 18) {
        document.body.style.background = "url('eating.png') center center fixed";
        document.body.style.backgroundSize = "contain";
    }
    else if (hour >= 18 && hour < 21) {
        document.body.style.background = "url('chilling.png') center center fixed";
        document.body.style.backgroundSize = "contain";
    }
    else {
        document.body.style.background = "url('default.png') center center fixed"; // A fallback if nothing matches
        document.body.style.backgroundSize = "contain";
    }
};