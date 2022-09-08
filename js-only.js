const button = document.getElementById('addButton')
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')

function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else {
    return +a + +b
  }
}

button.addEventListener('click', () => {
  console.log(add(input1.value, input2.value))
})