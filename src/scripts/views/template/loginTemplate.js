const loginTemplate = () =>
    `<div class="login">
        <div class="loginPage">
            <div class="loginPage__bar">
                <div class="loginPage__bar-back">
                    <img alt="back-icon" aria-label="Kembali Ke Beranda" src="https://raw.githubusercontent.com/Ardanu001/ByeTrash/def1b0edf0b766da6bbbb614a21249bd704c1d16/src/public/logo/back-icon.svg" />
                    <a href="#/homepage">Kembali</a>
                </div>
                <img class="loginPage__bar-logo" alt="Logo Website ByeTrash" src="https://raw.githubusercontent.com/Ardanu001/ByeTrash/def1b0edf0b766da6bbbb614a21249bd704c1d16/src/public/logo/logo_byetrash.svg"/>
            </div>
                <div class="loginPage__title">
                    <h1>Login</h1>
                    <p>Masukkan E-mail dan password anda</p>
                </div>
                <form>
                    <div class="loginPage__form">
                        <label class="loginPage__form-label">E-mail</label>
                        <input type="email" id="emailInputLogin" class="loginPage__form-input" autocomplete="off"/>
                    </div>
                    <div class="loginPage__form">
                        <label class="loginPage__form-label">Password</label>
                        <input type="password" class="loginPage__form-input" autocomplete="off" id="passLogin"/>
                    </div>
                    <div class="loginPage__check">
                        <div class="loginPage__check-check">
                            <input type="checkbox" class="checkBox" id="checkLogin" />
                            <p id="showPass">Show Password</p>
                        </div>
                        <a id="forgotPassword">Lupa Password?</a>
                    </div>
                    <div class="loginPage__button">
                        <button id="btn-login" type="submit">Login</button>
                    </div>
                </form>
                <div class="loginPage__signPart">
                    <p>Belum Punya Akun? <a id="login" href="#/signuppage">Daftar Disini</a></p>
                </div>
            </div>
        </div>
    `;

    export default loginTemplate;