# Interactive Portfolio Website

This repository contains an interactive, responsive portfolio website developed as part of a web programming course. The site demonstrates foundational front-end development concepts using HTML, CSS, JavaScript, and Bootstrap, with an emphasis on clean structure, usability, and progressive enhancement.

The portfolio serves as a central hub to showcase projects, provide detailed project write-ups, and allow visitors to contact the site owner through a functional contact form.

![Preview of the portfolio dashboard](images/dashboard.png)

---

## Features

* **Responsive layout** using Bootstrap’s grid system
* **Project filtering** with support for multiple categories per project
* **Modal previews** for quick project overviews
* **Dedicated project pages** with in-depth descriptions and screenshots
* **Functional contact form** powered by Formspree
* **Smooth scrolling navigation** and subtle UI animations
* **Back-to-top button** for improved usability on longer pages

---

## Technologies Used

* **HTML5** – semantic page structure
* **CSS3** – custom styling and animations
* **JavaScript (ES6)** – interactivity and dynamic behavior
* **Bootstrap 5** – responsive layout and UI components
* **Formspree** – serverless contact form handling

---

## Project Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (project images and assets)
├── projects/
│   └── (individual project detail pages)
└── README.md
```

---

## How to View the Site

The site can be viewed locally by running a simple HTTP server:

```bash
python -m http.server
```

Then navigate to:

```
http://localhost:8000
```

Alternatively, the site can be hosted using GitHub Pages for public access.

---

## Learning Objectives

This project was designed to reinforce:

* Separation of concerns between structure, style, and behavior
* Responsive design principles
* Client-side form validation and third-party integrations
* DOM manipulation and event handling
* Organized, maintainable front-end project structure

---

## Future Improvements

Possible future enhancements include:

* Dynamic project data loaded from JSON
* Expanded accessibility improvements (ARIA roles, keyboard navigation)
* Additional animations and visual polish
* Backend integration for persistent form submissions

---

## Author

Developed by **Jared Young**
MS in Artificial Intelligence
Portfolio and coursework project
