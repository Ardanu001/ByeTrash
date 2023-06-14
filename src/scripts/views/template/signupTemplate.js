const signupTemplate = () => `
<div class="signup">
<div class="signPage">
<div class="signPage__bar">
    <div class="signPage__bar-back">
        <img src="https://raw.githubusercontent.com/Ardanu001/ByeTrash/def1b0edf0b766da6bbbb614a21249bd704c1d16/src/public/logo/back-icon.svg" alt="Kembali Ke Beranda" aria-label="Kembali Ke Beranda"/>
        <a href="#/homepage">Kembali</a>
    </div>
    <img class="signPage__bar-logo" src="https://raw.githubusercontent.com/Ardanu001/ByeTrash/def1b0edf0b766da6bbbb614a21249bd704c1d16/src/public/logo/logo_byetrash.svg" alt="ByeTrash Logo" aria-label="ByeTrash Logo"/>
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
                <label>Email</label>
                <input type="email" autocomplete="off" class="pass1"/>
            </div>
        </div>
        <div class="signPage__form2">
            <div class="signPage__form-input">
                <label>Nama Bank</label>
                <input type="text" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Nomor Rekening</label>
                <input type="text" autocomplete="off"/>
            </div>
            <div class="signPage__form-input">
                <label>Password</label>
                <input type="password" autocomplete="off" id="passSign" class="pass2"/>
            </div>
        </div>
    </div>
            <div class="signPage__check">
                <input type="checkbox" id="checkSign"/>
                <p id="showPass">Show Password</p>
            </div>
            <div class="signPage__button">
                <button id="btn-signUp" type="submit">Register</button>
            </div>
            <div class="signPage__loginPart">
                <p>Sudah Punya Akun? <a id="signUp" href="#/loginpage">Masuk Disini</a></p>
            </div>
        </div>
    </form>
</div>
</div>
`;

export default signupTemplate;