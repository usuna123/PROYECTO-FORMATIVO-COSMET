// Simulación de base de datos de productos
const productos = [
    { nombre: 'Polvos', cantidad: 2, precio: 15.00 },
    { nombre: 'Shampoo', cantidad: 3, precio: 25.00 },
    { nombre: 'Crema', cantidad: 5, precio: 12.00 }
];

// Función para imprimir la factura
function imprimirFactura() {
    window.print();
}

// Función para buscar productos
function buscarProducto() {
    const nombreProducto = document.getElementById("buscarProductoNombre").value.toLowerCase();
    const resultadosTabla = document.getElementById("resultadosBusqueda");

    // Limpiar la tabla de resultados
    resultadosTabla.innerHTML = '';

    // Filtrar productos que coincidan con la búsqueda
    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombreProducto));

    // Mostrar los resultados en la tabla
    if (resultados.length > 0) {
        resultados.forEach((producto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${producto.nombre}</td>
                <td><input type="number" value="1" min="1" style="width: 50px;" class="quantity"></td>
                <td><button class="add-btn">Agregar</button></td>
            `;
            resultadosTabla.appendChild(fila);
        });
    } else {
        // Si no hay resultados, mostrar un mensaje
        const fila = document.createElement("tr");
        fila.innerHTML = `<td colspan="4">No se encontraron productos</td>`;
        resultadosTabla.appendChild(fila);
    }
}

// Asignar funciones a los botones cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", function() {
    const imprimirBtn = document.getElementById("imprimirBtn");
    if (imprimirBtn) {
        imprimirBtn.addEventListener("click", imprimirFactura);
    }

    // Asignar evento al botón de búsqueda
    const buscarBtn = document.getElementById("buscarBtn");
    if (buscarBtn) {
        buscarBtn.addEventListener("click", buscarProducto);
    }

    // Asignar evento a los botones de agregar
    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-btn')) {
            const row = event.target.closest('tr');
            const productName = row.children[1].innerText;
            const quantityInput = row.querySelector('.quantity');
            const quantity = quantityInput.value;

            if (quantity > 0) {
                // Crear un nuevo elemento de lista
                const listItem = document.createElement('li');
                listItem.textContent = `${productName} - Cantidad: ${quantity}`;
                
                // Agregar el elemento a la lista de productos
                document.getElementById('product-list').appendChild(listItem);

                // Reiniciar el campo de cantidad
                quantityInput.value = 1; // Restablecer a 1 después de agregar
            } else {
                alert('Por favor, ingrese una cantidad válida.');
            }
        }
    });
});
