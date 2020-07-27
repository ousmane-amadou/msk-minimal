// Put your applicaiton javascript here
function call_to_action() {
    var home_section =  document.getElementById('1');
    var landing_section =  document.getElementById('2');
    
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

