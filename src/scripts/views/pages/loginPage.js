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
           const checkBox = document.getElementById('checkLogin');
           const input = document.getElementById('passLogin');
           const textMsg = document.getElementById('showPass');

           checkBox.onclick = () => {
               if (checkBox.checked){
                   input.setAttribute('type', 'text');
                   textMsg.textContent = 'Hide Password';
               } else {
                   input.setAttribute('type', 'password');
                   textMsg.textContent = 'Show Password';
               }
           } 
       },
   };
   
   export default loginForm;