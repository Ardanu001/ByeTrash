const loginForm = () =>
    `<div class="login">
        <div class="loginPage">
            <div class="loginPage__bar">
                <div class="loginPage__bar-back">
                    <img alt="back-icon" aria-label="Kembali Ke Beranda" src="./public/img/logo/back-icon.svg" />
                    <a href="#">Kembali</a>
                </div>
                <img class="loginPage__bar-logo" alt="Logo Website ByeTrash" src="./public/img/logo/logo_byetrash.svg"/>
            </div>
                <div class="loginPage__title">
                    <h1>Login</h1>
                    <p>Masukkan E-mail dan password anda</p>
                </div>
                <form>
                    <div class="loginPage__form">
                        <label class="loginPage__form-label">E-mail</label>
                        <input type="email" class="loginPage__form-input" autocomplete="off"/>
                    </div>
                    <div class="loginPage__form">
                        <label class="loginPage__form-label">Password</label>
                        <input type="password" class="loginPage__form-input" autocomplete="off"/>
                    </div>
                    <div class="loginPage__check">
                        <div class="loginPage__check-check">
                            <input type="checkbox" class="loginPage__check-check" />
                            <p>Show Password</p>
                        </div>
                        <a id="forgotPassword">Lupa Password?</a>
                    </div>
                    <div class="loginPage__button">
                        <button id="btn-login">Login</button>
                    </div>
                </form>
                <div class="loginPage__signPart">
                    <p>Belum Punya Akun? <a id="login" href="../Tampilan Sign Up/sign form.html">Daftar Disini</a></p>
                </div>
            </div>
        </div>
    `;

    export default loginForm;