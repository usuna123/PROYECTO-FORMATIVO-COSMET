// Get modal elements
const modal = document.getElementById('editModal');
const closeModal = document.getElementsByClassName('close')[0];
const editInput = document.getElementById('editInput');
const saveButton = document.getElementById('saveButton');

// Field that is being edited
let currentField;

// Open modal when pencil icon is clicked
const editIcons = document.querySelectorAll('.edit-icon');
editIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        currentField = this.getAttribute('data-field');
        modal.style.display = 'flex';

        // Set input value based on the current field
        if (currentField === 'name') {
            editInput.value = document.getElementById('nameDisplay').innerText.split(': ')[1];
        } else if (currentField === 'id') {
            editInput.value = document.getElementById('idDisplay').innerText.split(': ')[1];
        } else if (currentField === 'email') {
            editInput.value = document.getElementById('emailDisplay').innerText.split(': ')[1];
        } else if (currentField === 'password') {
            editInput.value = '';  // Do not pre-fill the password field
        }
    });
});

// Close modal when "x" is clicked
closeModal.onclick = function () {
    modal.style.display = 'none';
}

// Save changes and close modal
saveButton.onclick = function () {
    const newValue = editInput.value;

    if (currentField === 'name') {
        document.getElementById('nameDisplay').innerText = `Nombre: ${newValue}`;
    } else if (currentField === 'id') {
        document.getElementById('idDisplay').innerText = `Identificación: ${newValue}`;
    } else if (currentField === 'email') {
        document.getElementById('emailDisplay').innerText = `Correo: ${newValue}`;
    } else if (currentField === 'password') {
        document.getElementById('passwordDisplay').innerText = `Contraseña: *****`;  // Mask password
    }

    modal.style.display = 'none';
}

// Close modal if clicked outside of modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
