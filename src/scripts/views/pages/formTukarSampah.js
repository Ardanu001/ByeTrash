const TukarSampah = {
    openBiodataForm() {
        const button = document.getElementById('btn-form');
        const formBiodataContainer = document.querySelector('.tukarPage__form_1');
    
        button.addEventListener('click', function(event){
            event.preventDefault();
            formBiodataContainer.removeAttribute("id");
        });
    },
    
    submitBiodata() {
        const formBiodataContainer = document.querySelector('.tukarPage__form_1');
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
    },
    
    price(){
        const jenis = document.querySelector('#jenissampah');
        const harga = document.querySelector('#harga').value;
        const total = document.querySelector('#total');
        const jumlah = document.querySelector('#jumlah').value;
    
        if (jenis == "Plastik") {
            document.querySelector('#harga').value = 5000;
        } else if (jenis == "Kaca") {
            document.querySelector('#harga').value = 7000;
        } else if (jenis == "Kertas") {
            document.querySelector('#harga').value = 4000;
        }
        
        const op = jumlah * harga;
    
        total = op;
    }
}

export default TukarSampah;