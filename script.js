const products = [
  {
    id: 1,
    name: "Cartoon Astronaut T-Shirts",
    price: 100,
    img: "f1.jpg",
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: 200,
    img: "f2.jpg",
  },
  {
    id: 3,
    name: "Puma Jacket",
    price: 300,
    img: "f3.jpg",
  },
  {
    id: 4,
    name: "Reebok Shorts",
    price: 150,
    img: "f4.jpg",
  },
  {
    id: 5,
    name: "Cartoon Astronaut T-Shirts",
    price: 160,
    img: "f7.jpg",
  },
  {
    id: 6,
    name: "Cartoon Astronaut T-Shirts",
    price: 170,
    img: "f8.jpg",
  },
  {
    id: 7,
    name: "New Arrival 1",
    price: 100,
    img: "n1.jpg",
  },
  {
    id: 8,
    name: "New Arrival 2",
    price: 100,
    img: "n2.jpg",
  },
  {
    id: 9,
    name: "New Arrival 3",
    price: 100,
    img: "n3.jpg",
  },
  {
    id: 10,
    name: "New Arrival 4",
    price: 100,
    img: "n4.jpg",
  },
  {
    id: 11,
    name: "New Arrival 5",
    price: 100,
    img: "n5.jpg",
  },
  {
    id: 12,
    name: "New Arrival 6",
    price: 100,
    img: "n6.jpg",
  },
  {
    id: 13,
    name: "New Arrival 7",
    price: 100,
    img: "n7.jpg",
  },
  {
    id: 14,
    name: "New Arrival 8",
    price: 100,
    img: "n8.jpg",
  },
];
// Cart array

// Cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display products
function displayProducts(products, container) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-cart");
    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <span>adidas</span>
      <h4>${product.name}</h4>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h4 class="price">₹${product.price}</h4>
      <button class="add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}" data-product-img="${product.img}">Add to Cart</button>
    `;
    container.appendChild(productCard);
  });
}

// Display featured products
const featuredProductsContainer = document.getElementById("product-list");
displayProducts(products, featuredProductsContainer);

// Display new arrivals
const newArrivalsContainer = document.getElementById("new-arrivals-list");
displayProducts(products, newArrivalsContainer);

// Add event listener to add to cart buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = e.target.getAttribute("data-product-id");
    const productName = e.target.getAttribute("data-product-name");
    const productPrice = e.target.getAttribute("data-product-price");
    const productImg = e.target.getAttribute("data-product-img");

    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        img: productImg,
        quantity: 1,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  }
});
// Update cart counter
function updateCartCounter() {
  const cartCounter = document.querySelector(".cart-counter");
  if (localStorage.getItem("cart")) {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    let cartTotalQuantity = 0;
    cartData.forEach((item) => {
      cartTotalQuantity += item.quantity;
    });
    cartCounter.textContent = cartTotalQuantity;
  } else {
    cartCounter.textContent = 0;
  }
}

// Call updateCartCounter function initially
updateCartCounter();

