import Navbar from "../components/navbar";
import Card from "../components/card";
import Newsletter from "../components/letter";
import Footer from "../components/footer";

export default function Beranda() {
  return (
    <>
      <Navbar />

      <section className="greetings">
        <img src="/images/0.jpg" alt="Background" className="bg" />
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <a href="#" className="btn">
            Temukan Video Course untuk Dipelajari!
          </a>
        </div>
      </section>

      <section className="container">
        <h1>Koleksi Video Pembelajaran Unggulan</h1>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>

        <div className="tabs">
          <button className="active">Semua Kelas</button>
          <button>Pemasaran</button>
          <button>Desain</button>
          <button>Pengembangan Diri</button>
          <button>Bisnis</button>
        </div>

        <div className="card-grid">
          <Card
            thumbnail="/images/1.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar1.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/2.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar2.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/3.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar3.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/4.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar4.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/5.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar5.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/6.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar6.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/7.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar7.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/8.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar1.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
          <Card
            thumbnail="/images/9.jpg"
            title="Big 4 Auditor Financial Analyst"
            description="Informasi intensif dengan tingkat profesional tinggi yang sangat dibutuhkan perusahaan."
            avatar="/images/Avatar/Avatar8.png"
            instructor="Jenna Ortega"
            rating="⭐⭐⭐⭐☆ (21.000)"
            price="Rp 300K"
          />
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
