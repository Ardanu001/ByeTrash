const user = [];
const RENDER_EVENT = 'render';
const STORAGE_KEY = 'BYETRASH-APP';
const SAVED_EVENT = 'saved';

function generateRegisterObject(id, nama, alamat, nama_bank, no_rekening, email, pass){
    return {id, nama, alamat, nama_bank, no_rekening, email, pass}
}

function generateID(){
    return +new Date();
}

function isStorageExist(){
    if (typeof(Storage)===undefined){
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

function saveUser(){
    if(isStorageExist()){
        const parsed = JSON.stringify(user);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function adduser(){
    const id = generateID();
    const nama = document.getElementById('nama').value;
    const alamat =  document.getElementById('alamat').value;
    const nama_bank = document.getElementById('namaBank').value;
    const no_rekening = document.getElementById('nomorRekening').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('passSign').value;
    const pushUser = generateRegisterObject(id, nama, alamat, nama_bank, no_rekening, email, pass);
    user.push(pushUser);
    
    document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener('DOMContentLoaded', function(){
    const submitUserForm = document.getElementById('register');
    submitUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
        adduser();
        submitUserForm.setAttribute('href','#/homepage');
    });
});

