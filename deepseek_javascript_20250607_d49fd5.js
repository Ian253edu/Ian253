// script.js
// Variables globales
let counter = 0;
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffbe0b', '#fb5607'];
let colorIndex = 0;

// Referencias a elementos del DOM
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');
const colorBox = document.getElementById('colorBox');
const messageBtn = document.getElementById('messageBtn');
const sizeSlider = document.getElementById('sizeSlider');
const sliderValue = document.getElementById('sliderValue');

// Event Listeners
counterBtn.addEventListener('click', increaseCounter);
changeColorBtn.addEventListener('click', changeBoxColor);
messageBtn.addEventListener('click', showMessage);
sizeSlider.addEventListener('input', changeBoxSize);

// Funciones
function increaseCounter() {
    counter++;
    counterDisplay.textContent = counter;
    
    // Animación
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 300);
}

function changeBoxColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[colorIndex];
    
    // Efecto de transición
    colorBox.style.transform = 'rotate(10deg)';
    setTimeout(() => {
        colorBox.style.transform = 'rotate(0deg)';
    }, 300);
}

function showMessage() {
    // Crear un elemento de mensaje si no existe
    let message = document.querySelector('.message');
    if (!message) {
        message = document.createElement('div');
        message.className = 'message';
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.right = '20px';
        message.style.padding = '15px 25px';
        message.style.background = 'white';
        message.style.borderRadius = '10px';
        message.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        message.style.zIndex = '1000';
        message.style.transition = 'all 0.3s ease';
        document.body.appendChild(message);
    }
    
    // Mensajes aleatorios
    const messages = [
        "¡JavaScript funciona correctamente!",
        "Has activado una función con JS",
        "La interacción del usuario es exitosa",
        "Este mensaje fue generado dinámicamente",
        "¡Buen trabajo! La página responde a tus acciones"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
    
    // Animación de entrada
    message.style.transform = 'translateX(200%)';
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 10);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        message.style.transform = 'translateX(200%)';
        setTimeout(() => {
            message.style.display = 'none';
        }, 300);
    }, 3000);
}

function changeBoxSize() {
    const size = sizeSlider.value;
    sliderValue.textContent = size;
    const boxSize = 200 * (size / 100);
    colorBox.style.width = `${boxSize}px`;
    colorBox.style.height = `${boxSize}px`;
}