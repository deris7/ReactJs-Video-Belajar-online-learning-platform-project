export default function letter() {
  return (
    <section className="newsletter">
      <img
        src="src/assets/images/10.jpg"
        alt="Background Newsletter"
        className="bg"
      />
      <div className="overlay"></div>
      <div className="content">
        <h4>NEWSLETTER</h4>
        <h2>Mau Belajar Lebih Banyak?</h2>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik Videobelajar!
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Masukkan Emailmu..." required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
