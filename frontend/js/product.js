const productContainer = document.getElementById("product-container");

// Unga folder structure matrum prices-ku thahuhaarpola exact data sync
const products = [
    { 
        id: 1, 
        name: "Dolphin Gold", 
        price: "₹6,500", 
        description: "Tank capacity 8 Litre. Basic model, includes stand, valve and free installation.", 
        image: "images/dolphin-gold.png" 
    },
    { 
        id: 2, 
        name: "Aqua Mars", 
        price: "₹8,500", 
        description: "Tank capacity 10 Litre. Removable tank for easy cleaning, includes stand and valve.", 
        image: "images/aqua-mars.png" 
    },
    { 
        id: 3, 
        name: "Aqua Sonnet", 
        price: "₹10,500", 
        description: "Tank capacity 13 Litre. Removable tank with additional UV or Copper filter protection.", 
        image: "images/aqua-sonnet.png" 
    },
    { 
        id: 4, 
        name: "Prolife", 
        price: "₹16,000", 
        description: "Tank capacity 15 Litre. Premium branded purifier with RO + UV + Copper + UF advanced systems.", 
        image: "images/profile1.png" 
    }
];

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="card-content">
                <h3>${product.name}</h3>
                <h2>${product.price}</h2>
                <p>${product.description}</p>
                <a href="product.html?id=${product.id}">
                    <button class="view-details-btn">View Details</button>
                </a>
            </div>
        </div>
    `;
});