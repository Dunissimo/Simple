import 'normalize.css';
import './index.scss';
import './styles/components.scss';

// Serch toggle

const search = document.querySelector('.search');
const searchOpen = search.querySelector('.open');
const searchClose = search.querySelector('.close');

searchOpen.addEventListener('click', (e) => {
  search.classList.add('active');
})
searchClose.addEventListener('click', (e) => {
  search.classList.remove('active');
})