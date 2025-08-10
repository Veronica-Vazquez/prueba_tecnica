import insertMainHeader from "../modules/header/header.js";
insertMainHeader(document.getElementById("header"));
// ---------------------------------------------------------

// Anadir o quitar articulos 
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener('click', increaseQty);
decreaseBtn.addEventListener('click', decreaseQty);

let quantity = 1;
const qtyDisplay = document.getElementById('qty');

function increaseQty() {
  quantity++;
  qtyDisplay.textContent = quantity;
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    qtyDisplay.textContent = quantity;
  }
}

// Cambiar imagen principal al hacer clic en el carrusel
const thumbnails = document.querySelectorAll('.thumbnail-img');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;

    // Activar el borde en la miniatura seleccionada
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
  });
});

// Selección de elementos del del carrito
const openCartBtn = document.getElementById('openCartBtn');
const cartContainer = document.getElementById('cartContainer');
const addToCartBtn = document.querySelector('.add-item');
const cartItemsContainer = document.getElementById('cartItems');

// Carrito vacio
let cart = [];

// Mostrar/Ocultar carrito
openCartBtn.addEventListener('click', () => {
  cartContainer.classList.toggle('d-none');
});

// --- Agregar producto al carrito
addToCartBtn.addEventListener('click', () => {
  const item = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: parseInt(qtyDisplay.textContent),
    image: mainImage.src
  };

  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  renderCart();
});

// Ver contenido del carrito
function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="flex-grow-1 ms-2">
        <p class="mb-1">${item.name}</p>
        <p class="mb-0">$${item.price} x ${item.quantity} = <strong>$${item.price * item.quantity}</strong></p>
      </div>
      <span class="remove-item" data-id="${item.id}">&times;</span>
    `;

    cartItemsContainer.appendChild(div);
  });

  // Eliminar productos del carrito
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      cart = cart.filter(item => item.id !== id);
      renderCart();
    });
  });
}





