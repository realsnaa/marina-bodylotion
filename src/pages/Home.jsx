import React, { useState, useEffect } from "react";

export default function Home({ openDetail, setPage }) {

  const products = [
    {
      id: 1,
      name:"Marina Natural Smooth and Glow",
      img:"/assets/images/Smooth and Glow.png",
      slogan:"Kulit halus bercahaya sepanjang hari 🌸",
      price:"Rp 5.000 - 15.000",
      detail:"Lotion dengan ekstrak Macadamia & Pure Honey, melembapkan dan membuat kulit halus bercahaya hingga 24 jam.",
      ingredients:["Pure Honey & Pearlescent Essence","Macadamia"],
      size:["95ml","190ml","335ml","475ml"],
      usage:"Aplikasikan pada seluruh bagian tubuh secara merata minimal 2x sehari."
    },
    {
      id: 2,
      name:"Marina Natural Nourished and Healthy",
      img:"/assets/images/Nourished and Healthy.png",
      slogan:"Menutrisi & menjaga kelembapan kulit 🌿",
      price:"Rp 5.000 - 15.000",
      detail:"Diperkaya Sweet Almond & Chia Seed yang menutrisi dan menjaga kelembapan kulit seharian. Ideal untuk kulit kusam yang butuh perawatan ekstra agar sehat dan lembut.",
      ingredients:["Sweet Almond","Chia Seed"],
      size:["95ml","190ml","335ml","475ml"],
      usage:"Aplikasikan pada seluruh bagian tubuh secara merata minimal 2x sehari."
    },
    {
      id: 3,
      name:"Marina Natural Protects and Cares",
      img:"/assets/images/Protects and Cares.png",
      slogan:"Lindungi kulit dari sinar matahari & polusi ☀️",
      price:"Rp 5.000 - 15.000",
      detail:"Mengandung Apple, Grapefruit, dan Sunscreen untuk lindungi kulit dari sinar matahari dan polusi, plus kelembapan tahan lama 24 jam. Pilihan tepat untuk aktivitas di luar ruangan.",
      ingredients:["Apple","Grapefruit","Sunscreen"],
      size:["95ml","190ml","335ml","475ml"],
      usage:"Aplikasikan pada seluruh bagian tubuh secara merata minimal 2x sehari."
    },
    {
      id: 4,
      name:"Marina Natural Rich Moisturizing",
      img:"/assets/images/Rich Moisturizing.png",
      slogan:"Kelembapan ekstra & kulit halus 🥑",
      price:"Rp 5.000 - 15.000",
      detail:"Kaya Avocado dan Olive Oil memberikan kelembapan ekstra dan menghaluskan kulit kering dan kasar. Pas untuk kulit yang sering kering akibat aktivitas di dalam dan luar ruangan.",
      ingredients:["Avocado","Olive Oil"],
      size:["95ml","190ml","335ml","475ml"],
      usage:"Aplikasikan pada seluruh bagian tubuh secara merata minimal 2x sehari."
    },
    {
      id: 5,
      name:"Marina Natural Nutri Serum",
      img:"/assets/images/Nutri Serum.png",
      slogan:"Menutrisi kulit & aroma menenangkan 💜",
      price:"Rp 5.000 - 15.000",
      detail:"Body serum lavender dengan Oat dan Vitamin E, menutrisi kulit sekaligus memberikan aroma menenangkan. Cocok untuk semua jenis kulit yang butuh perlindungan dan kelembapan.",
      ingredients:["Lavender","Oat","Vitamin E"],
      size:["95ml","190ml","335ml","475ml"],
      usage:"Aplikasikan pada seluruh bagian tubuh secara merata minimal 2x sehari."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = products[index];

  return (
    <div>
      <div className="header">
        <h1>Marina Natural Body Care</h1>
        <p>Produk alami untuk kulit sehat, lembap, dan bercahaya 🌸</p>
      </div>

      {/* SLIDER */}
      <div className="slider-container">
        <div className="slide-item">
          <img src={current.img} alt={current.name} />
          <div className="slide-info">
            <h3>{current.name}</h3>
            <p>{current.slogan}</p>
          </div>
        </div>
      </div>

      {/* VIDEO IKLAN */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <video controls width="90%" style={{ maxWidth: "600px", borderRadius: "12px" }}>
          <source src="/assets/videos/marina.mp4" type="video/mp4" />
        </video>
      </div>

      {/* GRID PRODUK */}
      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id} onClick={() => openDetail(p)}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.slogan}</p>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="contact">
        <a href="https://wa.me/6281234567890" target="_blank">Contact</a>
        <a href="mailto:sahabatmarina@gmail.com">Email</a>
        <button className="button" onClick={() => setPage("login")}>Login Admin</button>
      </div>
    </div>
  );
}
