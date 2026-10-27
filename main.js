document.addEventListener('DOMContentLoaded',cargarProductos);


async function cargarProductos() {
  const response = await fetch('productos.json');
  const productos = await response.json();    
  console.log(productos);                      
}
