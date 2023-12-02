var button=document.getElementBy("header.navbar");
// Add a click event listener to the button
button.addEventListener("Shop", function() {
    // Change the button text when clicked;
});

var button=document.getElementById("header.navbar");
button.addEventListener("Blog,function"({
    
}))

document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});