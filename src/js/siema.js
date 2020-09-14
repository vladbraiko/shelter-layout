import Siema from 'siema';

const mySiema = new Siema({ perPage: 3 });

const sliderPrevButton = document.querySelector('.prev');
sliderPrevButton.addEventListener('click', () => mySiema.prev());

const sliderNextButton = document.querySelector('.next');
sliderNextButton.addEventListener('click', () => mySiema.next());
