import React from 'react'

// Controlled input component
// Props:
// - value: current input value (string)
// - onChange: function(newValue) -> parent state setter
// - placeholder: optional placeholder text
export default function FilterInput ({ value, onChange, placeholder }) {
	return (
		<div className="filter-input">
			<label htmlFor="product-filter" className="filter-label">
				Search
			</label>
			<input
				id="product-filter"
				type="text"
				className="filter-field"
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={placeholder || 'Search...'}
				aria-label="Filter products"
			/>
		</div>
	)
}

