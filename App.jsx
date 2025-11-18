import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Lost-Found-Pet/Navbar";
import Home from "./Lost-Found-Pet/Home";
import ReportLostPet from "./Lost-Found-Pet/ReportLostPet";
import ReportFoundPet from "./Lost-Found-Pet/ReportFound";
import BrowseReports from "./Lost-Found-Pet/BroswerReport";
import PetDetails from "./Lost-Found-Pet/PetReport";

export default function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(data);
  }, []);

  function handleAddPet(pet) {
    const updated = [pet, ...pets];
    setPets(updated);
    localStorage.setItem("pets", JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pets={pets} />} />
        <Route path="/report-lost" element={<ReportLostPet onSubmit={handleAddPet} />} />
        <Route path="/report-found" element={<ReportFoundPet onSubmit={handleAddPet} />} />
        <Route path="/browse" element={<BrowseReports pets={pets} />} />
        <Route path="/pet/:id" element={<PetDetails pets={pets} />} />
      </Routes>
    </>
  );
}
