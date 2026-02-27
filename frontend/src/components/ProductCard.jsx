import React from "react";
import "../styles/product.css";

function ProductCard({ title, image }) {
  return (
    <div className="product">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default ProductCard;
