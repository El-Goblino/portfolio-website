# Application Documentation

This document will cover the various variables, functions, classes, elements and interactions within the application.

## Contents

- [Front-end](#front-end)
  - [Layout](#layout.hbs)
- [Back-end](#back-end)
- [Stylesheets](#stylesheets)
  - [Style.css](#style.hbs)
- [AdditionalJavascripts](#additional-javascripts)

## Front-end

### Layout.hbs

-`navbar` Navigation bar.
-`nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
-`nav-links` Page links used in the navigation bar. (Home, Projects, Contact.)

## Back-end

-`body` Pre-assigned by express.

### Index.js

-`title` Title variable to store title element.

## Stylesheets

### style.css

-`:root` Root of the page.
  -`--text-primary` Primary text colour.
  -`--text-secondary` Secondary text colour.
  -`--bg-primary` Primary background colour.
  -`--bg-secondary` Secondary background colour.

-`*` All elements.

-`body` Body of the page.
  -`body::-webkit-scrollbar` Page scrollbar.
  -`body::-webkit-scrollbar-track` Background of scrollbar.
  -`body::-webkit-scrollbar-thumb` Thumb of the scrollbar.

-`main` Main content of the body.

-`.navbar` Navigation bar.
  -`.navbar img` Image used in navigation bar.
-`.logo` Logo used in navigation bar.
-`.nav-links` Page links used in the navigation bar. (Home, Projects, Contact.)
  -`.nav-links ul` Unordered list in nav-links.
  -`.nav-links li` nav-links list item.
  -`.nav-links li a` nav-links list item anchor text.
    -`.nav-links li a:hover` nav-links list item anchor text on mouse hover.

-`.nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
  -`.nav-toggle:hover` Toggled hamburger menu used for smaller screens in navigation bar on mouse hover.
  -`.nav-toggle .bar` Individual bars used in hamburger menu.

-`.nav-links.active` When nav-links are activated.

## Additional Javascripts
-`ToggleNavLinks` Function used for toggling appearance of nav-links.
  -`navLink` Variable used to assigned element by class name.

