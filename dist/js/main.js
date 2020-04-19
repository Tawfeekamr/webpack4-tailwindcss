import "../css/aos.css"
import "../css/hover.css"
import "../css/plyr-pink.css"
import "../css/master.css"

import '../js/vendor/modernizr-3.8.0.min'
import '../js/vendor/aos'
import Plyr from 'plyr';

const player = new Plyr('#player');

AOS.init();



let hamburger = document.getElementById('hamburgerbtn');

let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('active');
});


