// Initial products
let products = [
  { id: 1, name: "Vase en céramique", price: 250, quantity: 10, image: "images/vase.jpg" },
  { id: 2, name: "Lampe moderne", price: 450, quantity: 5, image: "images/lampe.jpg" },
  { id: 3, name: "Tableau mural", price: 300, quantity: 7, image: "images/tableau.jpg" },
  { id: 4, name: "Tapis design", price: 600, quantity: 3, image: "images/tapis.jpg" }
];

let editId = null; // Track the product being edited

// Display products with animation
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
      <button onclick="editProduct(${product.id})">Modifier</button>
      <button onclick="deleteProduct(${product.id}, this)">Supprimer</button>
    `;
    productList.appendChild(card);

    // Trigger fade-in animation
    setTimeout(() => card.style.opacity = 1, 10);
  });
}

// Handle form submission (add or update)
document.getElementById("product-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const image = "images/" + document.getElementById("image").value;

  if (editId) {
    // Update product
    const index = products.findIndex(p => p.id === editId);
    if (index !== -1) {
      products[index] = { id: editId, name, price, quantity, image };
    }
    editId = null;
    document.querySelector("#product-form button").textContent = "Ajouter";
  } else {
    // Add new product
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push({ id, name, price, quantity, image });
  }

  displayProducts();
  document.getElementById("product-form").reset();
});

// Edit product
function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("quantity").value = product.quantity;

    // Set select correctly
    const select = document.getElementById("image");
    const imgName = product.image.split("/").pop(); // get filename only
    select.value = imgName;

    editId = id;
    document.querySelector("#product-form button").textContent = "Mettre à jour";
  }
}

// Delete product with fade-out animation
function deleteProduct(id, button) {
  const card = button.parentElement;
  card.classList.add("fade-out");

  // Wait for animation to finish
  setTimeout(() => {
    products = products.filter(p => p.id !== id);
    displayProducts();
  }, 500);
}

// Initial load
window.onload = displayProducts;
// Delete product with fade-out animation
function deleteProduct(id, button) {
  const card = button.parentElement;
  card.classList.add("fade-out");

  // Wait for animation to finish
  setTimeout(() => {
    products = products.filter(p => p.id !== id);
    displayProducts();
  }, 500);
}