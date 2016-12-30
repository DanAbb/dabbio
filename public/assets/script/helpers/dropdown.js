// Accepts a query string and parses it into a object
export default dropdown => {
  const dropdowns = document.querySelectorAll('#dropdown')

   for (dropdown of dropdowns) {
      const dropdownMenu = dropdown.parentElement.querySelector('#dropdown-menu');
      let entered = false;

      dropdown.addEventListener('click', ev => {
         ev.preventDefault();
      });

      dropdown.addEventListener('mouseover', ev => {
         dropdownMenu.style.display = 'block';
      });

      dropdown.addEventListener('mouseleave', () => {
         setTimeout(() => {
            if (!entered) {
               dropdownMenu.style.display = 'none';
            }
         }, 500);
      });

      dropdownMenu.addEventListener('mouseover', ev => {
         entered = true;
      });

      dropdownMenu.addEventListener('mouseleave', () => {
         dropdownMenu.style.display = 'none';
         entered = false;
      });
   }
};
