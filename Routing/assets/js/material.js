window.onload = function () {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  var links = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    navLinks.style.display = 'flex';
  });
}
