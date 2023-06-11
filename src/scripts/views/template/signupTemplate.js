const signupTemplate = () => `
<div class="signup">
<div class="signPage">
<div class="signPage__bar">
    <div class="signPage__bar-back">
        <img src="./img/icon/back-icon.svg" alt="Kembali Ke Beranda" aria-label="Kembali Ke Beranda"/>
        <a>Kembali</a>
    </div>
    <img class="signPage__bar-logo" src="./img/logo/logo_byetrash.png" alt="ByeTrash Logo" aria-label="ByeTrash Logo"/>
</div>
<div class="signPage__title">
    <h1>Sign Up</h1>
    <p>Daftarkan Akun Anda Disini</p>
</div>
<form>
<div class="signPage__form">
        <div class="signPage__form1">
            <div class="signPage__form-input">
                <label>Nama Anda</label>
                <input type="text" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Alamat</label>
                <input type="text" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Password</label>
                <input type="password" autocomplete="off"/>
            </div>
        </div>
        <div class="signPage__form2">
            <div class="signPage__form-input">
                <label>E-mail</label>
                <input type="email" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Nomor Rekening</label>
                <input type="text" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Masukkan Kembali Password</label>
                <input type="password" autocomplete="off"/>
            </div>
        </div>
    </div>
            <div class="signPage__check">
                <input type="checkbox"/>
                <p>Show Password</p>
            </div>
            <div class="signPage__button">
                <button id="btn-signUp">Register</button>
            </div>
            <div class="signPage__loginPart">
                <p>Sudah Punya Akun? <a id="signUp" href="../Tampilan Login/form login.html">Masuk Disini</a></p>
            </div>
        </div>
    </form>
</div>
</div>
`;

export default signupTemplate;