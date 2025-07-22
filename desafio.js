function validateForm() {
    const name = document.getElementById('nombre');
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
    alert('Correo no válido');
    }
    const password = document.getElementById('password');
    if (password.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    }
}