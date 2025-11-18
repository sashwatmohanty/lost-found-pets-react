import React from 'react'
import ProductItem from './ProductItem.jsx'

export default function ProductList ({ products, filter }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <div className="no-results">No products match"{filter}"</div>
      ) : (
        products.map(p => <ProductItem key={p.id} product={p} />)
      )}
    </div>
  )
}
