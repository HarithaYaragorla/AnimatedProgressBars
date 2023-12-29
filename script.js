function startProgress(id, percentage, color) {
    var elem = document.getElementById(id);
    var width = 0;
    var intervalId = setInterval(frame, 10);

    function frame() {
        if (width >= percentage) {
            clearInterval(intervalId);
        } else {
            width++;
            elem.style.width = width + "%";
            elem.style.backgroundColor = color;
            elem.innerHTML = width + "%";
        }
    }
}

