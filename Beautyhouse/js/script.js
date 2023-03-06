const arrowRight = document.querySelector('.arrow-right');

console.log(arrowRight); // para verificar si el botón se está seleccionando correctamente

arrowRight.addEventListener('click', (event) => {
  event.preventDefault();
  const mainTable = document.querySelector('.exchange-tablesContainer');
  const secondaryTable = document.querySelector('.exchange-tablesContainer--secondary');
  mainTable.style.display = 'none';
  secondaryTable.style.display = 'block';
});

const arrowLeft = document.querySelector('.arrow-left');

arrowLeft.addEventListener('click', (event) => {
  event.preventDefault();
  const mainTable = document.querySelector('.exchange-tablesContainer');
  const secondaryTable = document.querySelector('.exchange-tablesContainer--secondary');
  mainTable.style.display = 'block';
  secondaryTable.style.display = 'none';
});
