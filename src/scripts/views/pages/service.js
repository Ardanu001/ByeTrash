import seviceTemplate from "../template/serviceTemplate";

const serviceWebsite = {
  async render(){
         return `
             <section id="sevicepage"></section>
             <div class="tukarPage">
        <form method="post">
        <div class="tukarPage__form_1" id="hiddenForm">
            <div class="tukarPage__title">
                <h1>Tukar Sampah</h1>
                <p>Isilah Data Anda Disini</p>
            </div>
                    <div class="tukarPage__form-input">
                        <label>Nama Anda</label>
                        <input type="text" id="nama" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Alamat</label>
                        <input type="text" id="alamat" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nama Bank</label>
                        <input type="text" id="namabank" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nomor Rekening</label>
                        <input type="text" id="norekening" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>E-mail</label>
                        <input type="email" id="email" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nomor Telpon</label>
                        <input type="text" id="notelpon" required/>
                    </div>
                    <div class="tukarPage__check">
                        <input type="checkbox" id="checkbox"/>
                        <p id="labelData">Data Anda Sudah Benar ?</p>
                    </div>
                    <div class="tukarPage__button">
                        <button id="next" disabled>Berikutnya</button>
                    </div>
            </div>
            <div class="tukarPage__form_2" id="hiddenForm">
                <div class="tukarPage__title">
                    <h1>Tukar Sampah</h1>
                    <p>Uangkan Sampahmu Disini</p>
                </div>
                    <div class="tukarPage__form-input">
                    <label>Jenis Sampah</label>
                        <select id="jenissampah">
                            <option value="Plastik">Plastik</option>
                            <option value="Kaca">Kaca</option>
                            <option value="Kertas">Kertas</option>
                        </select>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Jumlah /Kg</label>
                        <input type="number" id="jumlah" autocomplete="off"/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Harga /kg</label>
                        <input type="number" id="harga" autocomplete="off" disabled/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Total Harga</label>
                        <input type="text" autocomplete="off" id="total" disabled/>
                    </div>
                    <div class="tukarPage__button">
                        <button id="completed" type="submit">Konfirmasi</button>
                    </div>
            </div>
        </form>
        <div class="confirm">
        </div>
    </div>
         `;
     },
 
     async afterRender(){
         const homeContainer = document.querySelector('#sevicepage');
         homeContainer.innerHTML = seviceTemplate(); 
         const button = document.getElementById('btn-tukar');
         const formBiodataContainer = document.querySelector('.tukarPage__form_1');

            button.addEventListener('click', function(event){
            event.preventDefault();
            formBiodataContainer.removeAttribute("id");
            
            const samapahFormContainer = document.querySelector('.tukarPage__form_2');
            const label = document.getElementById('labelData');
            const check = document.getElementById('checkbox');
            const button = document.getElementById('next');
            
            check.onclick = () => {
                if (check.checked){
                    label.textContent = "Data Anda Sudah Benar";
                    button.removeAttribute('disabled');
                    button.addEventListener('click', function(event){
                        event.preventDefault();
                        formBiodataContainer.setAttribute('id', 'hiddenForm');
                        samapahFormContainer.removeAttribute('id');
                    });
                } else {
                    button.setAttribute('disabled');
                }
            }

            const jenis = document.querySelector('#jenissampah').value;
            const harga = document.querySelector('#harga').value;
            const total = document.querySelector('#total');
            const jumlah = document.querySelector('#jumlah');

            if (jenis === "Plastik") {
                document.querySelector('#harga').value = 5000;
            }
            
            if (jenis === "Kaca") {
                document.querySelector('#harga').value = 7000;
            }
            
            if (jenis === "Kertas") {
                document.querySelector('#harga').value = 4000;
            }
     });
     },
 };
 
 export default serviceWebsite;