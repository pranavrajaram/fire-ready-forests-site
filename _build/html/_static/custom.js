document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.info-popup').forEach(el => {
      el.addEventListener('click', () => {
        alert(el.dataset.info);
      });
    });
  });
  