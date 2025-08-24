window.onload = function() {
    const spans = document.querySelectorAll('.back span', '.porfolio h3');
    for (const span of spans) {
        span.classList.add('active');
    }
}

//buttons

document.addEventListener('DOMContentLoaded', function() 
{
  var sections = document.querySelectorAll('.portfolio-section');
  sections.forEach(function(sec) {
    sec.classList.remove('active');
  });

  var headings = document.querySelectorAll('.portfolio-headings h3');

    headings.forEach(function(h3) 
    {
    h3.addEventListener('click', function() 
    {
      sections.forEach(function(sec) 
    {
        sec.classList.remove('active');
    });
      var targetId = h3.getAttribute('data-target');
      var targetSection = document.getElementById(targetId);
      if (targetSection) 
    {
        targetSection.classList.add('active');
      }
    });
  });

});

