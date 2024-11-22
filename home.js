// Product data
const productLists = {
    'household': [
        { img: './Images/household.jpg', title: 'Vacuum Cleaner', description: 'Efficient and powerful.' },
        { img: './Images/household1.jpg', title: 'Blender', description: 'Make smoothies in seconds.' },
        { img: './Images/household2.jpg', title: 'Microwave', description: 'Quick heating for meals.' },
        { img: './Images/household3.jpg', title: 'Iron', description: 'Smooth out wrinkles fast.' }
    ],
    'daily-life': [
        { img: './Images/dailylife.jpg', title: 'Water Bottle', description: 'Stay hydrated everywhere.' },
        { img: './Images/dailylife1.jpg', title: 'Notebook', description: 'Jot down your ideas.' },
        { img: './Images/dailylife2.jpg', title: 'Backpack', description: 'Carry your essentials.' },
        { img: './Images/dailylife3.jpg', title: 'Lunchbox', description: 'Keep your food fresh.' }
    ],
    'health-beauty': [
        { img: './Images/health.jpg', title: 'Face Cream', description: 'Nourish your skin.' },
        { img: './Images/health1.jpg', title: 'Shampoo', description: 'For healthy, shiny hair.' },
        { img: './Images/health2.jpg', title: 'Vitamins', description: 'Boost your immunity.' },
        { img: './Images/health3.jpg', title: 'Perfume', description: 'Stay fresh all day.' }
    ],
    'electronics': [
        { img: './Images/digital.jpg', title: 'Smartphone', description: 'Stay connected everywhere.' },
        { img: './Images/digital1.jpg', title: 'Laptop', description: 'Work on the go.' },
        { img: './Images/digital2.jpg', title: 'Smartwatch', description: 'Track your health and notifications.' },
        { img: './Images/digital3.jpg', title: 'Headphones', description: 'Immerse in music.' }
    ],
    'fashion': [
        { img: './Images/faishon.jpg', title: 'T-Shirt', description: 'Comfortable and stylish.' },
        { img: './Images/faishon1.jpg', title: 'Jeans', description: 'Classic and durable.' },
        { img: './Images/faishon2.jpg', title: 'Sneakers', description: 'Trendy and comfy.' },
        { img: './Images/faishon3.jpg', title: 'Sunglasses', description: 'Protect your eyes in style.' }
    ],
    'food': [
        { img: './Images/food.jpg', title: 'Pizza', description: 'Delicious and cheesy.' },
        { img: './Images/food1.jpg', title: 'Burger', description: 'Juicy and satisfying.' },
        { img: './Images/food2.jpg', title: 'Sushi', description: 'Fresh and flavorful.' },
        { img: './Images/food3.jpg', title: 'Pasta', description: 'Classic Italian dish.' }
    ]
};

// Save product data to localStorage if not already saved
if (!localStorage.getItem('productLists')) {
    localStorage.setItem('productLists', JSON.stringify(productLists));
}

// Retrieve the product data from localStorage
const storedProductLists = JSON.parse(localStorage.getItem('productLists'));

// Function to show products by category
function showCategory(category) {
    const productDisplay = document.getElementById('product-display');
    const products = storedProductLists[category];

    // Clear existing products
    productDisplay.innerHTML = '';

    // Set up the product display container with flex properties for a row of four items
    productDisplay.className = 'flex flex-wrap justify-start gap-4 px-8';

    // Display products for the selected category
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add(
            'bg-white', 'p-4', 'rounded-lg', 'shadow-md',
            'hover:shadow-lg', 'transition', 'flex', 'flex-col', 'justify-center', 'items-center'
        );

        // Add styles for the product element, setting width to 25%
        productElement.style.cssText = `
            width: calc(25% - 16px); /* Ensures 4 items per row */
            box-sizing: border-box;
            margin-bottom: 20px;
        `;

        // Add content to the product element
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.title}" 
                 style="width: 230px; height: 230px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
            <h3 class="text-xl font-bold text-center">${product.title}</h3>
            <p class="text-gray-500 text-center text-sm">${product.description}</p>
        `;

        productDisplay.appendChild(productElement);
    });
}

// Initialize with the first category visible after data retrieval
document.addEventListener('DOMContentLoaded', function () {
    showCategory('household');
});
