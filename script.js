function fibonacci(n) {
  let numero = [0, 1];
  for (let i = 2; i < n; i++) {
    numero.push(numero[i - 1] + numero[i - 2]);
  }
  return numero;
}

function ingresarNumero() {
  let numero;
  do {
    let input = prompt('Ingresa un número entero positivo: ');
    numero = parseInt(input);
    if (isNaN(numero) || numero <= 0) {
      alert('Por favor, ingresa un número válido.');
    }
  } while (isNaN(numero) || numero <= 0);
  return numero;
}

document.addEventListener('DOMContentLoaded', function () {
  const numero = ingresarNumero();
  const serieFibonacci = fibonacci(numero);
  console.log('Serie de Fibonacci: ', serieFibonacci.join(', '));
  const resultado = document.getElementById('resultado');
  resultado.textContent = `Serie de Fibonacci: ${serieFibonacci.join(',')}`;
});
