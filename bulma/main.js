document.addEventListener('DOMContentLoaded', () => {
    // const transisi = document.querySelector("a.navbar-burger");
    // const transisi2 = document.querySelector("div.navbar-menu")

    // mendapatkan semua garis pada hamburger menu
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // mendapatkan target dari atribut data target
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        transisi.classList.toggle('slide');
        transisi2.classList.toggle('slide');
      });
    });
  
  });