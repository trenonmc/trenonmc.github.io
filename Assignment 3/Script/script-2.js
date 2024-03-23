
let galleryone = document.querySelector('.gallerytwo')
galleryone.addEventListener("mouseover", function(e) {
    // e is is the event object that is passed into the function by the triggering event. It contains a bunch of information about the event

    // e.target is the HTML element that the event was triggered on. 

    if (e.target.tagName == "IMG") {
        e.target.classList.add('zoom')
    }
})

// mouseout triggers when the cursor leaves an element
galleryone.addEventListener("mouseout", function(e) {
    if (e.target.tagName == "IMG") {
        e.target.classList.remove('zoom')
    }
})