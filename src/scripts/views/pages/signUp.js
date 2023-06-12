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
           const checkBox = document.getElementById('checkSign');
            const input = document.getElementById('passSign');
            const textMsg = document.getElementById('showPass');
            const pass = document.querySelector('.pass1');
            const confirmpass = document.querySelector('.pass2');
            const buttonSign = document.getElementById('btn-signUp');

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
   
   export default signUpForm;