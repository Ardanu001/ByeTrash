const DrawerInitiator = {
    init({ content, button }) {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.setAttribute('data-bs-toggle','collapse');
        button.setAttribute('data-bs-target','#navbarNav')
      });
  
      content.addEventListener('click', (event) => {
        event.stopPropagation();
        button.removeAttribute('data-bs-toggle');
        button.removeAttribute('data-bs-target');
      });
    },
  };
  
  export default DrawerInitiator;
  