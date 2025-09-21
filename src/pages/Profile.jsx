import { useState, useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import FormInput from "../components/formInput";
import PasswordInput from "../components/passwordinput";
import Logo from "../components/logo";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateUser, deleteUser } = useUserStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: "/images/profile.png",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        password: currentUser.password || "",
        confirmPassword: "",
        avatar: "/images/profile.png",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak sama!");
      return;
    }
    await updateUser(currentUser.id, formData);
    const { error } = useUserStore.getState();
    if (!error) alert("Profil berhasil diperbarui!");
  };

  const handleDelete = async () => {
    if (window.confirm("Yakin ingin menghapus akun?")) {
      await deleteUser(currentUser.id);
      const { error } = useUserStore.getState();
      if (!error) {
        alert("Akun dihapus!");
        navigate("/");
      }
    }
  };

  return (
    <>
      <header className="profile-header-bar flex items-center gap-4 p-4 shadow-md">
        <Logo />
      </header>

      <section className="profile-container">
        <div className="profile-card">
          <button onClick={() => navigate("/")} className="btn-back">
            ← Back
          </button>
          <div className="profile-header">
            <img
              src={formData.avatar || "/images/profile.png"}
              alt="Profile"
              className="profile-avatar"
            />
            <label
              htmlFor="avatarUpload"
              className="btn-upload"
              onClick={(e) => {
                e.preventDefault(); // supaya tidak langsung trigger input file
                alert(
                  "⚠️ Ubah gambar belum berfungsi.\nMockAPI tidak dapat menerima inputan besar seperti gambar >100Kb."
                );
              }}
            >
              Ubah Foto
            </label>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <h2>{formData.name || "User"}</h2>
            <p>{formData.email}</p>
          </div>

          <form onSubmit={handleSave} className="profile-form">
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
            <FormInput
              label="No. HP"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <PasswordInput
              label="Password Baru"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordInput
              label="Konfirmasi Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="profile-actions">
              <button type="submit" className="btn light-green">
                Simpan
              </button>
              <button type="button" className="btn red" onClick={handleDelete}>
                🗑 Hapus Akun
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
