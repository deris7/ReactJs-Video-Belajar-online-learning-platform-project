import { Link } from "react-router-dom";
import Logo from "../components/logo.jsx";
import FormInput from "../components/formInput.jsx";
import PasswordInput from "../components/passwordinput.jsx";

export default function Login() {
  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <div className="login-box">
          <h2>Masuk ke Akun</h2>
          <p>
            Yuk, lanjutkan belajarmu di <strong>videobelajar</strong>.
          </p>

          <form>
            <FormInput
              label="E-Mail"
              type="email"
              id="email"
              name="email"
              required
            />
            <PasswordInput label="Kata Sandi" id="password" name="password" />

            <div className="forgot-password">
              <a href="#">Lupa Password?</a>
            </div>

            <button type="submit" className="btn green">
              Masuk
            </button>
            <Link to="/register" className="btn light-green">
              Daftar
            </Link>

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
