import 'normalize.css';
import './index.scss';
import './styles/components.scss';

// Serch toggle

const search = document.querySelector('.search');
const searchOpen = search.querySelector('.open');
const searchClose = search.querySelector('.close');
const searchInput = search.querySelector('input');

searchOpen.addEventListener('click', (e) => {
  search.classList.add('active');
})
searchClose.addEventListener('click', (e) => {
  search.classList.remove('active');
  searchInput.value = '';
})

// Burger

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  burger.classList.toggle('active');
});