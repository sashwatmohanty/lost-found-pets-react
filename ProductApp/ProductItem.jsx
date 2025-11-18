import React from 'react'

export default function ProductItem ({ product }) {
  return (
    <div className="product-item">
      <div className="pi-title">{product.title}</div>
      <div className="pi-meta">
        <span className="pi-category">{product.category}</span>
        <span className="pi-price">₹{product.price.toLocaleString()}</span>
      </div>
    </div>
  )
}
