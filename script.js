var collapseButton = document.querySelector('.collapse');

collapseButton.addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  var body = document.querySelector('body');
  collapseButton.classList.toggle('spin');
  navbar.classList.toggle('collapsed');
  body.classList.toggle('wide');
});

var graphBars = document.querySelectorAll('.graph-bars');

for (var i = 0; i < graphBars.length; i++) {
  graphBars[i].addEventListener('mouseenter', function(event) {
    HTML = event.target.innerHTML;
    var data = event.target.firstElementChild.firstElementChild.getAttribute('x1');
    var day = event.target.getAttribute('id');
    event.target.insertAdjacentHTML('beforeend',
      `<div class='graph-hover-box'>
        <h3>${day}</h3>
        <p><span>${data}</span> Applications</p>
      </div>`);
  })
}

for (var i = 0; i < graphBars.length; i++) {
  graphBars[i].addEventListener('mouseleave', function(event) {
    var hoverBox = event.target.lastElementChild;
    event.target.removeChild(hoverBox);
  })
}

