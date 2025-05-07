// src/components/CartModal.js
import React, { useState } from "react";
import "./CartModal.css";

function CartModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    onAdd(product, qty);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 상단 썸네일과 상품명 */}
        <div className="modal-header">
          <img
            src={`/${product.thumbnail}`}
            alt={product.name}
            width="50"
            height="50"
          />
          <p className="modal-title">{product.name}</p>
        </div>

        {/* 다시 상품명 (작게) */}
        <p className="product-subtitle">{product.name}</p>

        {/* 가격 + 수량 */}
        <div className="price-qty-row">
          <div>
            <strong className="price-discount">
              {product.product_choice.discount_price}
            </strong>
            <del className="price-original">{product.price.original}</del>
          </div>
          <div className="qty-control">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>+</button>
          </div>
        </div>

        <hr className="modal-divider" />

        {/* 합계 */}
        <div className="total-section">
          <span>합계</span>
          <span className="total-price">
            {(
              parseInt(
                product.product_choice.discount_price.replace(/,/g, "")
              ) * qty
            ).toLocaleString()}
            원
          </span>
        </div>

        {/* 하단 버튼 */}
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            취소
          </button>
          <button className="add-btn" onClick={handleAdd}>
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
