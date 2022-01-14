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

- `navbar` Navigation bar.
- `logo` Logo used in navigation bar.
- `theme-toggle` Icon used to toggle light and dark mode in navigation menu.
- `nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
- `nav-links` Page links used in the navigation bar. (Home, Projects, Contact.)

### Index.hbs

- `hero` Hero section of the body.
  - `hero-content` Main content section of the hero.
    - `hero-text` Text section of the hero.
    - `hero-image` Image used in hero.
      - `portrait` Portrait image used in hero.

## Back-end

- `body` Pre-assigned by express.

### Index.js

- `title` Title variable to store title element.

## Stylesheets

### style.css

- `:root` Root of the page.
  - `--text-primary` Primary text colour.
  - `--text-secondary` Secondary text colour.
  - `--bg-primary` Primary background colour.
  - `--bg-secondary` Secondary background colour.

- `*` All elements.

- `body` Body of the page.
  - `body::-webkit-scrollbar` Page scrollbar.
  - `body::-webkit-scrollbar-track` Background of scrollbar.
  - `body::-webkit-scrollbar-thumb` Thumb of the scrollbar.

- `.navbar` Navigation bar.
  - `.navbar img` Image used in navigation bar.
  - `.logo` Logo used in navigation bar.
  - `.navbar svg` Svg icon used in navigation bar.
  - `.theme-toggle` Icon used for toggling light and dark mode in navigation bar.
  - `.nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
    - `.nav-toggle:hover .bar` When toggle is on mouse hover trigger styling for bar.
    - `.nav-toggle:hover` Toggled hamburger menu used for smaller screens in navigation bar on mouse hover.
    - `.nav-toggle .bar` Individual bars used in hamburger menu.
    - `.nav-toggle:hover .bar:nth-of-type(1)` First bar used in the toggle menu.
    - `.nav-toggle:hover .bar:nth-of-type(2)` Second bar used in the toggle menu.
    - `.nav-toggle:hover .bar:nth-of-type(3)` Third bar used in the toggle menu.
  - `.nav-links` Page links used in the navigation bar. (Home, Projects, Contact.)
    - `.nav-links ul` Unordered list in nav-links.
    - `.nav-links li` nav-links list item.
    - `.nav-links li a` nav-links list item anchor text.
      - `.nav-links li a:hover` nav-links list item anchor text on mouse hover.
    - `.nav-links.active` When nav-links are activated.

- `.hero` Hero section of the body.
  - `hero-content` Main content section of the hero.
  - `hero-text` Text section of the hero.
    - `hero-text h1` Text heading used in hero-text.
    - `hero-text p` Text paragraph used in hero-text.
  - `hero-image` Image used in hero.
  - `portrait` Portrait image used in hero.

## Additional Javascripts
- `ToggleNavLinks` Function used for toggling appearance of nav-links.
  - `navLink` Variable used to assigned element by class name for the links used in the navigation menu.
  - `navBar` Variable used to assigned to element by class name for the entire navigation menu.

- `scroll` 
    - `navBar` Variable used to assigned to element by class name for the entire navigation menu.