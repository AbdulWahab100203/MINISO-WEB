// JavaScript for Hamburger Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('nav');
const categories = document.querySelectorAll('.category');
const productDisplay = document.getElementById('product-display');
const productTitle = document.getElementById('product-title');
const productDescription = document.getElementById('product-description');
const productImage = document.getElementById('product-image');


mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Product Data for Each Category
const productData = {
    household: {
        title: "Household Items",
        description: "Discover amazing household products that bring convenience to your life.",
        image: "./images/household.jpg"
    },
    "daily-life": {
        title: "Daily Life Products",
        description: "Essentials for your everyday activities, crafted with care.",
        image: "./images/daily-life.jpg"
    },
    stationery: {
        title: "Stationery",
        description: "Explore creative stationery for school, office, and personal use.",
        image: "./images/stationery.jpg"
    }
};

// Add Hover Event Listeners
categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        const categoryKey = category.getAttribute('data-category');
        const product = productData[categoryKey];

        // Update Product Display Content
        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productImage.src = product.image;

        // Show Product Display
        productDisplay.classList.remove('hidden');
    });

    category.addEventListener('mouseleave', () => {
        // Hide Product Display
        productDisplay.classList.add('hidden');
    });
});
