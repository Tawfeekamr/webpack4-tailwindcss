import "../css/aos.css"
import "../css/hover.css"
import "../css/modal.css"
import "../css/plyr-pink.css"
import "bootstrap-datepicker/dist/css/bootstrap-datepicker3.css"
import "../css/master.css"

import $ from 'jquery';
// import Vue from 'vue';
import datepicker from 'bootstrap-datepicker';
import select2 from 'select2';
import '../js/vendor/modernizr-3.8.0.min'
import '../js/vendor/aos'
import Plyr from 'plyr';
import MicroModal from 'micromodal';  // es6 module

const player = new Plyr('#player');

AOS.init();

$('#datepicker').datepicker({
  format: 'yyyy-mm-dd'

}).on('changeDate', function(e){
  $(this).datepicker('hide');
});

$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

let hamburger = document.getElementById('hamburgerbtn');

let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('active');
});
MicroModal.init();

