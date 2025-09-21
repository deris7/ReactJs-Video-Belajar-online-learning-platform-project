import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";
import { useUserStore } from "../stores/useUserStore";

export default function Register() {
  const { register, error } = useUserStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setLocalError("Password tidak sama!");
      return;
    }

    await register(formData);
    const { error } = useUserStore.getState();
    if (error) {
      setLocalError(error);
      return;
    }

    alert("Registrasi berhasil, silakan login!");
    navigate("/login");
  };

  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <div className="login-box">
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, Daftarkan Akunmu Sekarang juga!</p>

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Nama Lengkap"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="E-Mail"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="phonewrapper">
              <label htmlFor="phone">
                No. HP <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <PasswordInput
              label="Buat Kata Sandi"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordInput
              label="Konfirmasi Kata Sandi"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {(localError || error) && (
              <p className="text-red-500">{localError || error}</p>
            )}

            <button type="submit" className="btn green">
              Daftar
            </button>
            <button className="btn light-green">
              <Link to="/login" className="btn light-green">
                Masuk
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
