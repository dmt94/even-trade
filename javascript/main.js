// Get the container element
let navContainer = document.getElementById("id-navbar-nav");

// Get all buttons with class="btn" inside the container
let links = navContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}