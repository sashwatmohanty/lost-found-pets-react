import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // only for Home styling

export default function Home({ pets }) {
  return (
    <div className="container container-premium">
      <h2 className="text-center mb-4">Lost & Found Pets</h2>

      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <Link to="/report-lost" className="btn-premium-lost btn btn-lg">
          Report Lost Pet
        </Link>
        <Link to="/report-found" className="btn-premium-found btn btn-lg">
          Report Found Pet
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pets.slice(0, 6).map((p) => (
          <div key={p.id} className="col">
            <div className="card-premium card h-100 shadow-sm">
              <img src={p.image} alt={p.name} />
              <div className="card-body">
                <h5>{p.name}</h5>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                  <strong>Breed:</strong> {p.breed} <br />
                  <strong>Location:</strong> {p.location} <br />
                  <strong>Gender:</strong> {p.gender} <br />
                  <strong>Description:</strong> {p.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
