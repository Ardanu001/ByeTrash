/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import seviceTemplate from '../template/serviceTemplate';

const serviceWebsite = {
  async render() {
    return `
             <section id="sevicepage"></section>
             <div class="tukarPage">
        <form method="post" id="FormTukarSampah">
        <div class="tukarPage__form_1" id="hiddenForm">
            <div class="tukarPage__title">
                <h1>Tukar Sampah</h1>
                <p>Isilah Data Anda Disini</p>
            </div>
                    <div class="tukarPage__form-input">
                        <label>Nama Anda</label>
                        <input type="text" id="nama" autocomplete="off" required/>
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
                            <option value="Kaleng">Kaleng</option>
                            <option value="Elektronik">Elektronik</option>
                            <option value="Organik (Kompos)">Organik (Kompos)</option>
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
        <div class="confirm" id="hiddenForm">
        <div class="img-check">
            <img class="logo-success" src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/checklist-icon.png?raw=true">
            <div class="caption">
                <p id="user"></p>
                <p id="trashCat"></p>
                <p id="prize"></p>
            </div>
            <button id="btnOk">Done</button>
        </div>
    </div>
    </div>
         `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#sevicepage');
    homeContainer.innerHTML = seviceTemplate();
    const button = document.getElementById('btn-tukar');
    const formBiodataContainer = document.querySelector('.tukarPage__form_1');

    button.addEventListener('click', (event) => {
      event.preventDefault();
      formBiodataContainer.removeAttribute('id');

      const samapahFormContainer = document.querySelector('.tukarPage__form_2');
      const label = document.getElementById('labelData');
      const check = document.getElementById('checkbox');
      const button = document.getElementById('next');

      check.onclick = () => {
        if (check.checked) {
          label.textContent = 'Data Anda Sudah Terkonfirmasi';
          button.removeAttribute('disabled');
          button.addEventListener('click', (event) => {
            event.preventDefault();
            formBiodataContainer.setAttribute('id', 'hiddenForm');
            samapahFormContainer.removeAttribute('id');
          });
        } else {
          button.setAttribute('disabled');
        }
      };

      const jenis = document.getElementById('jenissampah');
      jenis.addEventListener('click', (event) => {
        event.preventDefault();
        if (jenis.value == 'Plastik') {
          document.querySelector('#harga').value = 2000;
        }

        if (jenis.value == 'Kaca') {
          document.querySelector('#harga').value = 5000;
        }

        if (jenis.value == 'Kertas') {
          document.querySelector('#harga').value = 1000;
        }

        if (jenis.value == 'Kaleng') {
          document.querySelector('#harga').value = 6000;
        }

        if (jenis.value == 'Elektronik') {
          document.querySelector('#harga').value = 15000;
        }

        if (jenis.value == 'Organik (Kompos)') {
          document.querySelector('#harga').value = 0;
        }

        const jumlah = document.querySelector('#jumlah');
        jumlah.addEventListener('click', (e) => {
          e.preventDefault();
          const harga = parseInt(document.querySelector('#harga').value);
          const total = document.querySelector('#total');
          const op = harga * jumlah.value;
          total.value = op;
        });

        const sampahFormContainer = document.querySelector('.tukarPage__form_2');
        const successContainer = document.querySelector('.confirm');
        const buttonConfirm = document.getElementById('completed');
        buttonConfirm.addEventListener('click', (e) => {
          e.preventDefault();
          sampahFormContainer.setAttribute('id', 'hiddenForm');
          successContainer.removeAttribute('id');

          const user = document.getElementById('nama').value;
          const trash = document.getElementById('jenissampah').value;
          const prize = document.getElementById('total').value;
          const userContainer = document.getElementById('user');
          const trashContainer = document.getElementById('trashCat');
          const prizeContainer = document.getElementById('prize');

          userContainer.textContent = `Selamat ${user}`;
          trashContainer.textContent = `Sampah ${trash} Anda Berhasil Terjual`;
          prizeContainer.textContent = `Dengan Harga Rp.${prize}`;

          const form = document.getElementById('FormTukarSampah');
          const buttonOK = document.getElementById('btnOk');
          buttonOK.addEventListener('click', (e) => {
            e.preventDefault();
            successContainer.setAttribute('id', 'hiddenForm');
            form.reset();
          });
        });
      });
    });
  },
};

export default serviceWebsite;
