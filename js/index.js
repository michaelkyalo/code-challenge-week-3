document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('nganya-search');
  const nganyaSections = document.querySelectorAll('.A-Nganya');

  window.toggleMoreInfo = function (button) {
    const section = button.closest('.A-Nganya');
    const infoDiv = section.querySelector('.moreInfo');

    if (!infoDiv) return;

    const isVisible = infoDiv.style.display === "block";
    infoDiv.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Click to know more" : "Click to show less";
  };

  
  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    nganyaSections.forEach(section => {
      const heading = section.querySelector('h1,h2,h3,h4,h5,h6');
      const title = heading ? heading.textContent.toLowerCase() : '';
      const description = section.querySelector('.moreInfo')?.textContent.toLowerCase() || '';
      const classes = section.className.toLowerCase();

      const matches = title.includes(query) || description.includes(query) || classes.includes(query);

      section.style.display = matches ? 'block' : 'none';
    });
  });
});




