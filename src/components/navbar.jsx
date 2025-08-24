export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          video<span style={{ color: "#f44336" }}>belajar</span>
        </div>
        <div className="nav-right">
          <a href="#">Kategori</a>
          <img src="/images/profile.png" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
