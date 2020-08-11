// Put your applicaiton javascript here
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   console.log(slides)

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   console.log(slides);
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 1000); // Change image every 2 seconds
// }

function call_to_action() {
    var home_section =  document.getElementsByClassName('inactive').item(0);
    var landing_section =  document.getElementsByClassName('landing').item(0);

    console.log(home_section);
    
    home_section.className = "home";
    landing_section.className = "inactive";
} 

function openDrawer() {
    var side_nav =  document.getElementsByClassName("side-nav")[0];
    side_nav.style.width = "100vw";
}

function closeDrawer() {
    var side_nav =  document.getElementsByClassName("side-nav")[0];
    side_nav.style.width = "0vw";
}

function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
    console.log("clicked");
} 

function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     var modal = document.getElementById(id);
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

