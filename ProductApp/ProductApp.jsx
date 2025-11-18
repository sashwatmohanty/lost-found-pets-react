import React, { useMemo, useState } from 'react'
import FilterInput from './Filterinput.jsx'
import './ProductApp.css'

const SAMPLE_PRODUCTS = [
	{ id: 1, title: 'Apple iPhone 15', category: 'Mobile', price: 64900 },
	{ id: 2, title: 'Samsung Galaxy S24', category: 'Mobile', price: 59999 },
	{ id: 3, title: 'Sony WH-1000XM5', category: 'Audio', price: 24990 },
	{ id: 4, title: 'Bose QuietComfort Earbuds', category: 'Audio', price: 19990 },
	{ id: 5, title: 'Dell XPS 13', category: 'Laptop', price: 119999 },
	{ id: 6, title: 'MacBook Air M2', category: 'Laptop', price: 99999 },
	{ id: 7, title: 'Nike Running Shoes', category: 'Shoes', price: 4999 },
	{ id: 8, title: 'Levi\'s 501 Jeans', category: 'Apparel', price: 3499 }
]

// << Add: local components to demonstrate prop drilling >>
function ProductCard({ product, setFilter }) {
	return (
		<li className="product-item" onClick={() => setFilter(product.category)}>
			<h3>{product.title}</h3>
			<div className="category">{product.category}</div>
			<div className="price">₹{product.price.toLocaleString()}</div>
			<div className="hint">Click to filter by this category</div>
		</li>
	)
}

function ProductGrid({ products, setFilter }) {
	return (
		<ul className="product-list">
			{products.map(p => (
				<ProductCard key={p.id} product={p} setFilter={setFilter} />
			))}
		</ul>
	)
}

function ProductContainer({ products, filter, setFilter }) {
	return (
		<div>
			<div className="container-controls">
				<small>Active filter: <strong>{filter || 'None'}</strong></small>
				<button className="clear-btn" onClick={() => setFilter('')}>Clear</button>
			</div>

			<ProductGrid products={products} setFilter={setFilter} />
		</div>
	)
}
// << End added components >>

export default function ProductApp () {
	const [filter, setFilter] = useState('')
	const [products] = useState(SAMPLE_PRODUCTS)

	const filteredProducts = useMemo(() => {
		const q = filter.trim().toLowerCase()
		if (!q) return products
		return products.filter(p => {
			return (
				p.title.toLowerCase().includes(q) ||
				p.category.toLowerCase().includes(q) ||
				String(p.price).includes(q)
			)
		})
	}, [filter, products])

	return (
		<>
			{/* Injected scoped styles for this component */}
			<style>{`
				/* App: black-blue background */
				.product-app {
					font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
					max-width: 880px;
					margin: 32px auto;
					padding: 20px;
					background: linear-gradient(180deg, #020617 0%, #061028 100%); /* black-blue */
					border-radius: 12px;
					box-shadow: 0 10px 30px rgba(2,8,23,0.7);
					border: 1px solid rgba(255,255,255,0.03);
					color: #e6eef8;
				}

				.product-app h2 {
					margin: 0 0 12px 0;
					font-size: 1.2rem;
					color: #dbeefe;
					letter-spacing: -0.2px;
				}

				/* Inputs tuned for dark background */
				.product-app input[type="text"],
				.product-app input[type="search"] {
					width: 100%;
					box-sizing: border-box;
					padding: 10px 12px;
					margin: 10px 0 16px 0;
					border-radius: 8px;
					border: 1px solid rgba(255,255,255,0.06);
					background: rgba(255,255,255,0.03);
					color: #e6eef8;
					font-size: 0.95rem;
					outline: none;
					transition: box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s;
				}

				.product-app input::placeholder {
					color: rgba(230,238,248,0.5);
				}

				.product-app input[type="text"]:focus,
				.product-app input[type="search"]:focus {
					box-shadow: 0 8px 26px rgba(3, 16, 30, 0.6);
					border-color: rgba(24, 180, 255, 0.6);
					background: rgba(255,255,255,0.02);
				}

				.product-app .meta {
					margin-bottom: 12px;
				}

				.product-app .meta small {
					color: rgba(230,238,248,0.7);
				}

				/* Product list grid */
				.product-list {
					list-style: none;
					padding: 0;
					margin: 8px 0 0 0;
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
					gap: 14px;
				}

				/* Stylish product card for dark theme */
				.product-item {
					padding: 14px;
					border-radius: 12px;
					background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%);
					border: 1px solid rgba(24,180,255,0.08);
					box-shadow: 0 6px 20px rgba(2,8,23,0.6);
					transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s;
					color: #f6fbff;
					overflow: hidden;
				}

				.product-item:hover {
					transform: translateY(-8px);
					box-shadow: 0 18px 40px rgba(3,16,30,0.7);
					border-color: rgba(24,180,255,0.9);
				}

				.product-item h3 {
					margin: 0 0 6px 0;
					font-size: 1.02rem;
					color: #f8fbff;
					text-shadow: 0 1px 0 rgba(0,0,0,0.3);
				}

				.product-item .category {
					font-size: 0.85rem;
					color: rgba(230,238,248,0.7);
				}

				/* Price accent with a gradient-ish color */
				.product-item .price {
					margin-top: 10px;
					font-weight: 700;
					color: #00e0ff; /* cyan accent */
					text-shadow: 0 2px 8px rgba(0,224,255,0.08);
				}

				.product-item .hint {
					margin-top: 8px;
					font-size: 0.78rem;
					color: rgba(230,238,248,0.55);
					opacity: 0.95;
				}

				.container-controls {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10px;
				}

				.clear-btn {
					background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
					color: #e6eef8;
					border: 1px solid rgba(255,255,255,0.06);
					padding: 6px 10px;
					border-radius: 8px;
					cursor: pointer;
					font-size: 0.9rem;
					transition: transform 0.12s ease, box-shadow 0.12s ease;
				}

				.clear-btn:hover {
					transform: translateY(-2px);
					box-shadow: 0 8px 20px rgba(3,16,30,0.6);
				}

				/* small responsive tweak */
				@media (max-width: 520px) {
					.product-app { padding: 14px; margin: 18px; }
					.product-list { gap: 10px; }
				}
			`}</style>

			<div className="product-app">
				<h2 className='text-primary d-flex justify-content-center'>Filterable Product Filter App</h2>

				{/* Controlled input: parent passes value and setter to child */}
				<FilterInput value={filter} onChange={setFilter} placeholder="Search by name, category or price..." />

				<div className="meta">
					<small>
						Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
					</small>
				</div>

				{/* Use ProductContainer which drills props down to ProductGrid -> ProductCard */}
				<ProductContainer products={filteredProducts} filter={filter} setFilter={setFilter} />
			</div>
		</>
	)
}

