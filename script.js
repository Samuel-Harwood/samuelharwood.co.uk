
  var cursor = document.querySelector('.blob');

  document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  });

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetBlock = document.querySelector(this.getAttribute('href'));
        targetBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    });
});
