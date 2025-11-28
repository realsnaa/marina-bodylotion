import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [responses, setResponses] = useState([]);

  const openDetail = (product) => {
    setSelectedProduct(product);
    setPage("detail");
  };

  const addResponse = (response) => {
    setResponses([...responses, response]);
  };

  return (
    <div>
      {page === "home" && <Home openDetail={openDetail} setPage={setPage} />}
      {page === "detail" && (
        <ProductDetail
          product={selectedProduct}
          setPage={setPage}
          addResponse={addResponse}
        />
      )}
      {page === "login" && <Login responses={responses} setPage={setPage} />}
    </div>
  );
}
