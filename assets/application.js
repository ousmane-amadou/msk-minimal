// Put your applicaiton javascript here
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

