document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.block');
  const nav = document.querySelector('.hidden');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });

  // Get all the links in the nav
  const links = document.querySelectorAll('.lg\\:inline-block');

  // Get all the divs that correspond to the links
  const divs = document.querySelectorAll('.container');

  // Loop through each link and add an event listener
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      // Hide the nav menu
      nav.classList.add('hidden');

      // Remove the 'active' class from all links
      links.forEach((link) => {
        link.classList.remove('active');
      });

      // Add the 'active' class to the clicked link
      link.classList.add('active');

      // Hide all the divs
      divs.forEach((div) => {
        div.classList.add('hidden');
      });

      // Show the corresponding div
      divs[index].classList.remove('hidden');
    });
  });
});

console.log("Hi Kristine or Juan!  Or should I say Kristine AND Juan?  And Gianna too, because I don't want her to feel left out, although she's gonna probably need mine or Kristine's help finding this.")