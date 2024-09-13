const mobileMenu = document.getElementById('mobileMenu');
const body = document.querySelector('body');
const menuButton = document.querySelector('.mobile-menu-button');
const iconClose = document.querySelector('.fa-times');
const iconOpen = document.querySelector('.fa-bars');
let veckopeng = 10;
//var // Äldre sätt att deklarera varibler
// console.log(window);
setInterval(() => {
  document.getElementById('date').innerHTML = new Date()
}, 1000)

var changeText = document.getElementById('date');
changeText.onclick = function() {
  console.log('test');
  changeText.innerHTML = 'Test hej';
}

document.getElementById('date').onclick = function() {
  console.log('test');
  document.getElementById('date').innerHTML = 'Test hej';
}

function changeState() {
  console.log('test');
}

// Exempel på let förändrar värde
function increaseSalery() {
  veckopeng = 20;
}

function toggleMobileMenu() {
  // mobileMenu.style.display = 'block';
  mobileMenu.classList.toggle('active');
  body.classList.toggle('noscroll');
  iconOpen.classList.toggle('show-icon');
  iconClose.classList.toggle('show-icon');
}