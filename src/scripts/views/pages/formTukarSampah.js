import tukarsampahTemplate from "../template/formtukarsampah-template";

const TukarSampah = {
    async render(){
           return `
           <section id="tukarSampah"></section>
           `;
       },
       
       async afterRender(){
           const homeContainer = document.querySelector('#tukarSampah');
           homeContainer.innerHTML = tukarsampahTemplate(); 
       },
   };
   
   export default TukarSampah;