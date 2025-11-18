import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PetDetails({ pets }) {
  const { id } = useParams();
  const pet = pets.find(p => p.id === id);

  if (!pet) return <p>Pet not found</p>;

  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} />
      <p>Breed: {pet.breed}</p>
      <p>Location: {pet.location}</p>
      <p>Gender: {pet.gender}</p>
      {pet.type==="lost" && <p>Pregnant: {pet.pregnant}</p>}
      {pet.type==="found" && <p>Date Found: {pet.foundAt}</p>}
      <p>Description: {pet.description}</p>
      <p>Contact: {pet.contact}</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}
