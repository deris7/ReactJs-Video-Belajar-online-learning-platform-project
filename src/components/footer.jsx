export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <div className="logo">
            video<span style={{ color: "#f44336" }}>belajar</span>
          </div>
          <p>
            <strong>
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </strong>
          </p>
          <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p>+62-877-7123-1234</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Kategori</h4>
            <ul>
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h4>Komunitas</h4>
            <ul>
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>©2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
