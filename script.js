// Sample products (Home Decoration) using local images
const products = [
  { id: 1, name: "Vase en céramique", price: 250, quantity: 10, image: "images/vase.jpg" },
  { id: 2, name: "Lampe moderne", price: 450, quantity: 5, image: "images/lampe.jpg" },
  { id: 3, name: "Tableau mural", price: 300, quantity: 7, image: "images/tableau.jpg" },
  { id: 4, name: "Tapis design", price: 600, quantity: 3, image: "images/tapis.jpg" }
];

// Function to display products
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>💰 Prix: ${product.price} MAD</p>
      <p>📦 Stock: ${product.quantity}</p>
    `;
    productList.appendChild(card);
  });
}

// Load products on page load
window.onload = displayProducts;

