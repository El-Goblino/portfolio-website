# Application Documentation

This document will cover the various variables, functions, classes, elements and interactions within the application.

## Contents

- [Front-end](#front-end)
  - [Layout](#layout.hbs)
  - [Index](#index.hbs)
  - [Error](#error.hbs)
  - [Message-sent](#message-sent.hbs)
  - [Projects](#projects.hbs)
  - [Contact](#contact.hbs)

- [Back-end](#back-end)
- [Stylesheets](#stylesheets)
  - [Style.css](#style.hbs)
- [Javascripts](#javascripts)

## Front-end

### Layout.hbs

- `navbar` Navigation bar.
	- `logo` Logo used in navigation bar.
	- `theme-toggle` Icon used to toggle light and dark mode in navigation menu.
	- `nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
	- `nav-links` Page links used in the navigation bar. (Home, Projects, Contact.)

- `footer` Footer.
	- `footer-headings` Footer headings.
	- `footer-content` Content section of footer.
			- `footer-column` Footer columns.
			- `footnote` Footer footnote.
	

### Index.hbs

- `hero` Hero section of the body.
  - `hero-content` Main content section of the hero.
    - `hero-text` Text section of the hero.
    - `hero-image` Image used in hero.
      - `portrait` Portrait image used in hero.

- `about` About section of the body.
  - `about-text` Text portion of the about section.
    - `about-item` Item in about section.

- `projects` Projects section of the body.
  - `projects-content` Main content section of projects.
    - `projects-item` Individual items in projects section.
      - `projects-image` Thumbnails used in projects section.

- `contact` Contact section of the body.
  - `contact-form` Form used in contact section.

### Error.hbs

- `error-content` Content section of error page.

### Message-sent.hbs

- `message-content` Content section of message page.

### Projects.hbs

- `projects-page` Projects section.
  - `projects-page-heading` Page heading.
  - `projects-page-content` Projects main content.
    - `projects-page-item` Individual items in project page.
      - `projects-page-image` Thumbnails used in project section.
      - `projects-page-text` Text section of projects page.

### Contact.hbs

- `contact-page` Contact page
  - `contact-page-content` Content section of contact page
    - `contact-form` Form reused from index page.


## Back-end

- `body` Pre-assigned by express.

### Index.js

- `title` Title variable to store title element.
- `/` GET Renders the index page (index.hbs).
- `/projects` GET Renders the projects page (projects.hbs).
- `/contact` GET Renders the contact page (contact.hbs).
- `/message-sent` GET Renders the message sent page (message-sent.hbs).

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
	  - `.navbar svg:hover` Svg icon used in navigation bar on hover.
  - `.theme-toggle` Icon used for toggling light and dark mode in navigation bar.
  - `.nav-toggle` Toggled hamburger menu used for smaller screens in navigation bar.
    - `.nav-toggle:hover .bar` When toggle is on mouse hover trigger styling for bar.
    - `.nav-toggle:hover` Toggled hamburger menu used for smaller screens in navigation bar on mouse hover.
    - `.nav-toggle .bar` Individual bars used in hamburger menu.
    - `.nav-toggle:hover .bar:nth-of-type(1)` First bar used in the toggle menu.
    - `.nav-toggle:hover .bar:nth-of-type(2)` Second bar used in the toggle menu.
    - `.nav-toggle:hover .bar:nth-of-type(3)` Third bar used in the toggle menu.
    - `.nav-links ul` Unordered list in nav-links.
    - `.nav-links li` nav-links list item.
    - `.nav-links li a` nav-links list item anchor text.
      - `.nav-links li a:hover` nav-links list item anchor text on mouse hover.

- `.footer` Footer.
  - `.footer-headings` Footer headings. 
    - `.footer-headings h2` Footer h2 headings.
    - `.footer-headings :nth-of-type(2)` Second bar heading used in footer.
  - `footer-content` Content section of footer.
    - `footer-column` Footer columns.
      - `footer-column a` Footer columns anchor text.
        - `footer-column a:hover` Footer columns anchor text on hover.
    - `footnote` Footer footnote. 
      - `footnote button` Button used in footnote.
      - `footnote button:hover` Button used in footnote on mouse hover.

- `.error-content` Content section of error page.
  - `.error-content h1` Content section headings.
  - `.error-content button` Content section button.
  - `.error-content a` Content section anchor text.
  - `.error-content button:hover` Content section button on hover.

- `.hero` Hero section of the body.
  - `.hero-content` Main content section of the hero.
  - `.hero-text` Text section of the hero.
    - `.hero-text h1` Text heading used in hero-text.
    - `.hero-text p` Text paragraph used in hero-text.
    - `.hero-text svg` SVG icons used in hero-text.
      - `.hero-text svg:hover` SVG icons used in hero-text on mouse hover.
  - `.portrait` Portrait image used in hero.

- `.about-text` Text portion of the about section.
  - `.about-item` Item in about section.
    - `.about-item h1` Item heading in about section.
    - `.about-item p` Item paragraph in about section.

- `.projects` Projects section of the body.
  - `.projects h1` Projects heading section of the body.
  - `.projects-content` Main content section of projects.
  - `.projects-content h1` Main heading content section of projects.
    - `.projects-item` Individual items in projects section.
      - `.projects-item a` Individual items anchor text in projects section.
      - `.projects-item h1` Individual items headers in projects section. 
      - `.projects-image` Thumbnails used in projects section.
        - `.projects-image:hover` Thumbnails used in projects section on hover.
      - `.projects-thumbnail` Thumbnails used in projects section.

- `.content h1` Contact section heading.
  - `.contact-form` Form used in contact section.
    - `contact-form input` Inputs fields used in form.
    - `contact-form textarea` Textarea used in form.
    - `contact-form button` Button used in form.

- `.message-content` Content section of message page.
  - `.message-content h1` Content section headings.
  - `.message-content button` Content section button.
  - `.message-content a` Content section anchor text.
  - `.message-content button:hover` Content section button on hover.


## Javascripts
- `ToggleNavLinks` Function used for toggling appearance of nav-links.
  - `navLink` Variable used to assigned element by class name for the links used in the navigation menu.
  - `navBar` Variable used to assigned to element by class name for the entire navigation menu.

- `scroll` 
    - `navBar` Variable used to assigned to element by class name for the entire navigation menu.