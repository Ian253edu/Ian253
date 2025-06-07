// Función para el botón de saludo
document.getElementById('saludoBtn').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '¡Hola! Gracias por visitar mi página de prueba.';
    mensaje.style.color = 'green';
    
    // Cambiar el color después de 2 segundos
    setTimeout(() => {
        mensaje.style.color = 'black';
    }, 2000);
});

// Manejar el formulario de contacto
document.getElementById('formularioContacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    alert(`Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos en ${email} pronto.`);
    
    // Limpiar el formulario
    this.reset();
});

// Efecto de desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Cambiar el color de fondo del encabezado al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#2c3e50';
    } else {
        header.style.backgroundColor = '#35424a';
    }
});