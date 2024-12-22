console.log('Ahoj z JS!');

// Funkce pro vytvoření sloupečků
function createTicket() {
  const ticket = document.getElementById('ticket');

  for (let i = 1; i <= 10; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.id = `column-${i}`;

    const numbersDiv = document.createElement('div');
    numbersDiv.classList.add('numbers');
    numbersDiv.id = `numbers-${i}`;

    for (let j = 1; j <= 49; j++) {
      const numberDiv = document.createElement('div');
      numberDiv.classList.add('number');
      numberDiv.textContent = j;
      numbersDiv.appendChild(numberDiv);
    }

    column.innerHTML = `<h3>Sloupec ${i}</h3>`;
    column.appendChild(numbersDiv);
    ticket.appendChild(column);
  }
}

// Funkce pro generování náhodných čísel
function generateNumbers() {
  for (let i = 1; i <= 10; i++) {
    const numbersDiv = document.getElementById(`numbers-${i}`);
    const numbers = generateUniqueRandomNumbers(6, 1, 49);

    // Odznačení všech čísel
    Array.from(numbersDiv.children).forEach((child) => {
      child.classList.remove('selected');
    });

    // Zakroužkování vygenerovaných čísel
    numbers.forEach((number) => {
      const numberDiv = numbersDiv.children[number - 1];
      numberDiv.classList.add('selected');
    });
  }
}

// Pomocná funkce pro generování unikátních náhodných čísel
function generateUniqueRandomNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

// Vytvoření sázenky při načtení stránky
createTicket();
