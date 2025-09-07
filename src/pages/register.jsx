import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import Logo from "../components/logo";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";

export default function Register() {
  const { register } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Password tidak sama!");
      return;
    }

    const result = register(formData);
    if (!result.success) {
      setError(result.message);
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

            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" className="btn green">
              Daftar
            </button>
            <button className="btn light-green">
              <Link to="/login" className="btn light-green">
                Masuk
              </Link>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
