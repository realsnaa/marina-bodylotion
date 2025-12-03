import React, { useState } from "react";

export default function ProductDetail({ product, setPage, addResponse }) {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleYes = () => {
    setModalTitle("Terima Kasih! ");
    setModalMessage(`Senang kamu memilih ${product.name}. Semoga kulitmu makin sehat dan bercahaya! ✨`);
    addResponse({ product: product.name, response: "YES" });
    setShowModal(true);
  };

  const handleNo = () => {
    setFeedbackText("");
    setShowFeedback(true);
  };

  const submitFeedback = () => {
    addResponse({ product: product.name, response: "NO", feedback: feedbackText });
    setModalTitle("Terima Kasih atas Masukanmu 🌸");
    setModalMessage("Feedbackmu sudah diterima. Semoga pengalaman berikutnya lebih menyenangkan! ");
    setShowFeedback(false);
    setShowModal(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: window.innerWidth < 768 ? "column" : "row", gap: "30px", padding: "20px" }}>
      <img src={product.img} alt={product.name} style={{ width: "300px", borderRadius: "12px" }} />
      <div style={{ maxWidth: "600px" }}>
        <h2>{product.name}</h2>
        <p>{product.detail}</p>
        <p><b>Kandungan :</b> {product.ingredients.join(", ")}</p>
        <p><b>Ukuran :</b> {product.size.join(", ")}</p>
        <p><b>Cara Pakai :</b> {product.usage}</p>
        <p><b>Harga :</b> {product.price}</p>


        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button className="button" onClick={handleYes}>YES</button>
          <button className="button" onClick={handleNo}>NO</button>
          <button className="button" onClick={() => setPage("home")}>Kembali</button>
        </div>
      </div>

      {/* Modal YES */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{modalTitle}</h2>
            <p>{modalMessage}</p>
            <button className="button" onClick={() => setShowModal(false)}>Tutup</button>
          </div>
        </div>
      )}

      {/* Modal Feedback NO */}
      {showFeedback && (
        <div className="modal" onClick={() => setShowFeedback(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Kenapa tidak memilih produk ini?</h2>
            <textarea
              value={feedbackText}
              onChange={e => setFeedbackText(e.target.value)}
              placeholder="Tulis alasanmu di sini..."
              style={{ width: "100%", height: "100px", padding: "10px", borderRadius: "8px", marginBottom: "15px" }}
            />
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className="button" onClick={submitFeedback}>Kirim</button>
              <button className="button" style={{ background: "#777" }} onClick={() => setShowFeedback(false)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
