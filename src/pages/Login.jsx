import React, { useState } from "react";
import jsPDF from "jspdf";

export default function Login({ responses, setPage }) {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = () => {
    if (password === correctPassword) {
      setLoggedIn(true);
    } else {
      alert("Password salah!");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Laporan Respon Produk", 10, 10);

    let y = 20;
    const pageHeight = doc.internal.pageSize.height;

    responses.forEach((r, i) => {
      const text = `${i + 1}. Produk: ${r.product}, Response: ${r.response}${
        r.feedback ? ", Feedback: " + r.feedback : ""
      }`;

      if (y > pageHeight - 20) {
        doc.addPage();
        y = 20; 
      }

      doc.text(text, 10, y);
      y += 10; 
    });

    doc.save("laporan_produk.pdf");
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Login Sales/Admin</h2>
        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
        <button
          className="button"
          style={{ marginLeft: "10px" }}
          onClick={() => setPage("home")}
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Laporan Respon Produk</h2>
      {responses.length === 0 ? (
        <p>Belum ada respon dari user.</p>
      ) : (
        <ul>
          {responses.map((r, i) => (
            <li key={i}>
              {r.product} - {r.response}{" "}
              {r.feedback && ` (Feedback: ${r.feedback})`}
            </li>
          ))}
        </ul>
      )}
      <button className="button" onClick={downloadPDF}>
        Download Laporan PDF
      </button>
      <button
        className="button"
        style={{ marginLeft: "10px" }}
        onClick={() => setPage("home")}
      >
        Kembali
      </button>
    </div>
  );
}
