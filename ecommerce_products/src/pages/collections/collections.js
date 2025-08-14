import insertMainHeader from "../../modules/header/header.js";
insertMainHeader(document.getElementById("header"));
// ---------------------------------------------------------

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const priceRange = document.getElementById("priceRange");
const styleSelect = document.getElementById("styleSelect");
const sneakers = document.querySelectorAll(".sneaker");

// Detectar cambios en los filtros
checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));
priceRange.addEventListener("input", filterProducts);
styleSelect.addEventListener("change", filterProducts);

// Función para aplicar los filtros
function filterProducts() {
  // 1. Obtener colores seleccionados
  const selectedColors = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.id.replace("color", "").toLowerCase());
    
    // 2. Precio máximo permitido
    const maxPrice = parseFloat(priceRange.value);
    document.getElementById("priceValue").textContent = `$${maxPrice} usd`;

  // 3. Estilo seleccionado
  const selectedStyle = styleSelect.value;

  // 4. Mostrar u ocultar sneakers
  sneakers.forEach(sneaker => {
    const sneakerColor = sneaker.dataset.color;
    const sneakerPrice = parseFloat(sneaker.dataset.price);
    const sneakerStyle = sneaker.dataset.style;

    const matchColor = selectedColors.length === 0 || selectedColors.includes(sneakerColor);
    const matchPrice = sneakerPrice <= maxPrice;
    const matchStyle = selectedStyle === "" || selectedStyle === sneakerStyle;

    if (matchColor && matchPrice && matchStyle) {
      sneaker.style.display = "block";
    } else {
      sneaker.style.display = "none";
    }
  });
}