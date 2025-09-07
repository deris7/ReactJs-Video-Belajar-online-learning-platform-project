import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import Logo from "../components/logo";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }

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

            {error && <p className="text-red-500">{error}</p>}

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
          </form>
        </div>
      </main>
    </>
  );
}
