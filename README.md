# 🌐 Mixels Store Project

A dynamic web application for browsing products and viewing their details. This project was developed as part of the training program in the Open-Source Application Development track at the National Telecommunication Institute (NTI).

## 🚀 Live Demo
You can explore the live website here:
👉 [Click here to visit the live site](https://eyad-makboul.github.io/Mixels/)

---

## 🛠️ Tech Stack
* **HTML5:** For building the semantic structure of the website.
* **CSS3:** For crafting a modern, sleek, and responsive user interface (UI).
* **JavaScript (ES6):** For handling the application logic and performing dynamic API fetches.
* **JSON:** For structured data storage of the product catalog.

---

## 🌟 Features
* **Dynamic Fetching:** Asynchronously fetches product data dynamically from a local `products.json` file.
* **Products Grid:** Displays all available items in a clean, user-friendly card grid.
* **Product Details Page:** Features seamless navigation where clicking any card redirects to a dedicated details page (`card.html`) that extracts and renders specific product data based on the URL ID parameter.
* **Responsive Design:** Fully optimized to provide an excellent viewing experience across all devices (Mobile, Tablet, and Desktop).

---

## 📂 Project Structure
```text
├── images/          # Directory containing product asset images
├── index.html       # The main entry page of the store
├── card.html        # The single product details view page
├── style.css        # The core stylesheet containing all layout designs
├── script.js        # JavaScript file handling the main page catalog logic
├── card.js          # JavaScript file handling the individual item view logic
├── products.json    # Local database file containing product information arrays
└── README.md        # Project documentation file
