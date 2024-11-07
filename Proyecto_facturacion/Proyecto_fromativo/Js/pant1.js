// Función para abrir el modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para confirmar la contraseña
function confirmPassword() {
    const password = document.getElementById('password').value;
    if (password === 'hola') {
        alert('Acceso concedido. Puedes editar o eliminar el producto.');
        closeModal();
    } else {
        alert('Contraseña incorrecta. Inténtalo de nuevo.');
    }
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

let rowToDelete = null;

// Función para abrir el modal de confirmación de eliminación
function openDeleteModal(row) {
    rowToDelete = row;  // Guardamos la fila que se quiere eliminar
    document.getElementById('deleteModal').style.display = 'block';
}

// Función para cerrar el modal de eliminación
function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

// Función para eliminar la fila seleccionada
function deleteRow() {
    if (rowToDelete) {
        rowToDelete.parentElement.removeChild(rowToDelete);  // Eliminar la fila del DOM
        closeDeleteModal();
        alert('El producto ha sido eliminado.');
    }
}


let rowToEdit = null;

// Función para abrir el modal de autenticación
function openPasswordModal(row) {
    rowToEdit = row;  // Guardamos la fila que se quiere editar
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal de autenticación
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para verificar la contraseña y abrir el modal de edición
function confirmPassword() {
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica para verificar la contraseña (ej. validarla contra un valor predefinido)
    if (password === "1234") { // Ejemplo de contraseña
        closeModal();  // Cierra el modal de autenticación
        openEditModal();  // Abre el modal de edición
    } else {
        alert("Contraseña incorrecta");
    }
}

// Función para abrir el modal de edición de producto
function openEditModal() {
    if (rowToEdit) {
        // Cargar los datos de la fila en el formulario de edición
        const cells = rowToEdit.getElementsByTagName('td');
        document.getElementById('editCodigo').value = cells[0].innerText;
        document.getElementById('editDescripcion').value = cells[1].innerText;
        document.getElementById('editPrecio').value = cells[2].innerText;
        document.getElementById('editExistencias').value = cells[3].innerText;
        
        // Mostrar el modal de edición
        document.getElementById('editModal').style.display = 'block';
    }
}

// Función para cerrar el modal de edición de producto
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Función para guardar los cambios del producto
function saveChanges() {
    if (rowToEdit) {
        // Actualizar los valores en la tabla
        const cells = rowToEdit.getElementsByTagName('td');
        cells[0].innerText = document.getElementById('editCodigo').value;
        cells[1].innerText = document.getElementById('editDescripcion').value;
        cells[2].innerText = document.getElementById('editPrecio').value;
        cells[3].innerText = document.getElementById('editExistencias').value;
        
        // Cerrar el modal de edición
        closeEditModal();
        alert('Producto actualizado');
    }
}







