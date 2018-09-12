var collapseButton = document.querySelector('.collapse');

collapseButton.addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  var body = document.querySelector('body');
  collapseButton.classList.toggle('spin');
  navbar.classList.toggle('collapsed');
  body.classList.toggle('wide');
});
