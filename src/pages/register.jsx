import Logo from "../components/logo";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";

export default function Regist() {
  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <div className="login-box">
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, Daftarkan Akunmu Sekarang juga!</p>

          <form>
            <FormInput
              label="Nama Lengkap"
              type="text"
              id="name"
              name="name"
              required
            />
            <FormInput
              label="E-Mail"
              type="email"
              id="email"
              name="email"
              required
            />

            <div className="phonewrapper">
              <label htmlFor="phone">
                No. HP <span className="required">*</span>
              </label>
              <select id="countryCode" name="countryCode">
                <option value="+62">🇮🇩 +62</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
              <input type="tel" id="phone" name="phone" />
            </div>

            <PasswordInput
              label="Buat Kata Sandi"
              id="password"
              name="password"
            />
            <PasswordInput
              label="Konfirmasi Kata Sandi"
              id="confirmPassword"
              name="confirmPassword"
            />

            <div className="forgot-password">
              <a href="#">Lupa Password?</a>
            </div>

            <button type="submit" className="btn green">
              Daftar
            </button>
            <button type="button" className="btn light-green">
              <a href="/" className="btn light-green">
                Masuk
              </a>
            </button>

            <div className="divider">atau</div>

            <button type="button" className="btn google">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
