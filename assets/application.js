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

    var modal_content = document.getElementById(id).children[0].children;

    for (var modal_element = 0; modal_element < modal_content.length ; modal_element++) {
        if(modal_content[modal_element].className.indexOf('product-slide') != -1) {
            modal_content[modal_element].className = 'product-slide active-slide'
            break;
        }
    }

} 

function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
    var curr_slide = document.getElementsByClassName('active-slide')[0];
    curr_slide.className = 'product-slide'
}

function changeSlide(next, product_id) {
    var modal_content = document.getElementById(product_id).children[0].children;
    var slides = [];

    for(var i = 0; i < modal_content.length; i++) {
        if (modal_content[i].className.indexOf('product-slide') != -1) {
            slides.push(modal_content[i])
        }
    }

    // Get Slide Index
    var curr_slide = document.getElementsByClassName('active-slide')[0];
    var slideIndex = Number(curr_slide.id);

    if (next) {
        slideIndex++;
    } else {
        slideIndex--;
    }

    // Wrap Around Logic
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0 ) { slideIndex = slides.length-1}

    // 
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = 'product-slide'
    }

    slides[slideIndex].className = 'product-slide active-slide';
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     var modal = document.getElementById(id);
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

