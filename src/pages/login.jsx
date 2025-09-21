import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";
import { useUserStore } from "../stores/useUserStore";

export default function Login() {
  const { login, error } = useUserStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // panggil login async dari store
    await login(email, password);

    const { currentUser, error } = useUserStore.getState();
    if (error) {
      setLocalError(error);
      return;
    }

    // redirect ke home
    navigate("/");
  };

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

          <form onSubmit={handleSubmit}>
            <FormInput
              label="E-Mail"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              label="Kata Sandi"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {(localError || error) && (
              <p className="text-red-500">{localError || error}</p>
            )}

            <div className="forgot-password">
              <Link to="/forgot-password">Lupa Password?</Link>
            </div>

            <button type="submit" className="btn green">
              Masuk
            </button>
            <button className="btn light-green">
              <Link to="/register" className="btn light-green">
                Daftar
              </Link>
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
