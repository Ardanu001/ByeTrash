function login(){
    const loginButtonContainer = document.querySelector('#btn-login');
    loginButtonContainer.addEventListener('click', function() {
        const loginContainer = document.getElementsByClassName('login');
        loginContainer.style.display = 'flex';
    });
}