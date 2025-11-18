import React from "react";
import { Link } from "react-router-dom";

export default function BrowseReports({ pets }) {
  return (
    <div className="browse">
      <h2>All Pets</h2>
      <div className="cards">
        {pets.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.breed}</p>
            <p>{p.location}</p>
            <p>{p.gender}</p>
            <p>{p.description}</p>
            <Link to={`/pet/${p.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
