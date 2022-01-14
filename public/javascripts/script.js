function ToggleNavLinks() { //Function to toggle navigation links display
    var navLink = document.getElementsByClassName("nav-links")[0]; //Gets first instance of class name
    
    if (window.getComputedStyle(navLink).display === "none") { //If currently not displayed, computed style is used to ensure element is set to none
        navLink.style.display = "flex"; //Set display to flex
    } 
    else {
        navLink.style.display = "none"; //Else leave display as none
    }
}

window.addEventListener('scroll', function() {; //Event listener for mouse scroll

    var navBar = document.getElementsByClassName("navbar")[0]; //Gets first instance of class name

    if(scrollY >= 850){ //If user scroll value is greater than 850 (The area the hero takes up)
        navBar.style.background = "#181a1d"; //Sets background colour to secondary
    }

    if (scrollY < 850) { //If user scroll value is less than 850 (User has gone back to the hero section)
        navBar.style.background = "none"; //Sets background colour back to none
    }   
});