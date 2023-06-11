import signupTemplate from "../template/signupTemplate";
const signUpForm = {
    async render(){
           return `
               <section id="form"></section>
           `;
       },
   
       async afterRender(){
           const homeContainer = document.querySelector('#form');
           homeContainer.innerHTML = signupTemplate(); 
       },
   };
   
   export default signUpForm;