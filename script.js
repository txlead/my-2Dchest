document.getElementById("chest").addEventListener("click", function() {
  const chest = document.getElementById("chest");

  // Меняем изображение сундука на открытое
  chest.src = "open_chest.svg";
  
  // Убираем анимацию прыжка
  chest.style.animation = "none"; 
  
  // Показываем сообщение
  const message = document.getElementById("message");
  message.style.display = "block";

  // Генерируем салют
  generateFireworks();
});

function generateFireworks() {
  const fireworksContainer = document.getElementById("fireworks");
  
  for (let i = 0; i < 30; i++) { // Создаем 30 частиц
    const firework = document.createElement("div");
    firework.className = "firework";
    
    // Задаем случайные позиции и цвета
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2; // Ограничиваем высоту
    const size = Math.random() * 10 + 5; // Размер частиц от 5 до 15 пикселей
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
    
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.backgroundColor = color;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    
    fireworksContainer.appendChild(firework);
    
    // Удаляем частицу через 1 секунду
    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
}
