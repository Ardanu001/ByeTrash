import seviceTemplate from "../template/serviceTemplate";

const serviceWebsite = {
  async render(){
         return `
             <section id="sevicepage"></section>
         `;
     },
 
     async afterRender(){
         const homeContainer = document.querySelector('#sevicepage');
         homeContainer.innerHTML = seviceTemplate(); 
     },
 };
 
 export default serviceWebsite;