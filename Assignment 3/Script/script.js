var mobileNav = document.getElementById('mobileNav')


function toggleMenu() {
    mobileNav.classList.toggle('hidden')
}


var button = document.getElementById('button1');
var color = button.style.backgroundColor;
button.addEventListener('click', function () {
  // this function executes whenever the user clicks the button
  color = button.style.backgroundColor = color === 'gray' ? 'white' : 'gray';
});




let gallery = document.querySelector('.gallery')
gallery.addEventListener("mouseover", function(e) {
    // e is is the event object that is passed into the function by the triggering event. It contains a bunch of information about the event

    // e.target is the HTML element that the event was triggered on. 

    if (e.target.tagName == "IMG") {
        e.target.classList.add('zoom')
    }
})

// mouseout triggers when the cursor leaves an element
gallery.addEventListener("mouseout", function(e) {
    if (e.target.tagName == "IMG") {
        e.target.classList.remove('zoom')
    }
})





