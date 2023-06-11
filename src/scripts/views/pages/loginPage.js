import loginTemplate from "../template/loginTemplate";

const loginForm = {
    async render(){
           return `
               <section id="form"></section>
           `;
       },
   
       async afterRender(){
           const homeContainer = document.querySelector('#form');
           homeContainer.innerHTML = loginTemplate(); 
       },
   };
   
   export default loginForm;