import { useState, useEffect } from "react";
 import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Setelspace() {
  const pgData = [
    {
      name: "Gouta Grand",
      price: 5000,
      location: "Hyderabad",
      gender: "male",
      image:
        "https://content.jdmagicbox.com/v2/comp/hyderabad/k2/040pxx40.xx40.220622205025.f2k2/catalogue/gautham-grand-mens-paying-guest-hyderabad-hostels-wjeBIK3XPq.jpg",
      map: "https://maps.google.com/maps?q=Gautham%20Grand%20Mens%20PG&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Biswas Hotel",
      price: 6000,
      location: "Hyderabad",
      gender: "male",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd1/cropped_images/2020/Feb/19/Photo_h400_w540/GR1-8650-276143_400_540.jpg",
      map: "https://maps.google.com/maps?q=Biswas%20Hotel&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "47 Girls PG",
      price: 7000,
      location: "Ameerpet",
      gender: "female",
      image:
        "https://content3.jdmagicbox.com/v2/comp/hyderabad/i4/040pxx40.xx40.240908161124.j8i4/catalogue/47-girls-hostel-ameerpet-hyderabad-hostels-kkqw4gqa7f.jpg",
      map: "https://maps.google.com/maps?q=47%20Girls%20PG%20Ameerpet&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Royal Palace PG",
      price: 9000,
      location: "Hyderabad",
      gender: "female",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Mar/04/full_photo/GR2-355085-1680953.jpg",
      map: "https://maps.google.com/maps?q=Royal%20Palace%20PG&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const [filters, setFilters] = useState({
    price: 10000,
    gender: "all",
    location: "all",
  });

  const [filteredPGs, setFilteredPGs] = useState(pgData);
  const [selectedPG, setSelectedPG] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const result = pgData.filter((pg) => {
      if (pg.price > filters.price) return false;
      if (filters.gender !== "all" && pg.gender !== filters.gender)
        return false;
      if (filters.location !== "all" && pg.location !== filters.location)
        return false;
      return true;
    });
    setFilteredPGs(result);
  }, [filters]);

  const handleBooking = (pg) => {
    setSelectedPG(pg);
    setUserName("");
    setUserPhone("");
    setShowModal(true);
  };

  const confirmBooking = () => {
    if (!userName || !userPhone) {
      alert("Please fill out all fields.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("PG Booking Confirmation", 20, 20);
    doc.setFontSize(12);
    doc.text(`PG: ${selectedPG.name}`, 20, 40);
    doc.text(`Name: ${userName}`, 20, 50);
    doc.text(`Phone: ${userPhone}`, 20, 60);
    doc.text("Thank you for booking with SetelSpace!", 20, 80);
    doc.save(`${userName}_Booking.pdf`);

    setShowModal(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-warning fw-bold" href="#">
            <i className="bi bi-house-fill"></i> SetelSpace
          </a>
        </div>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3">
            <div className="filter-sidebar p-3 bg-white rounded shadow-sm">
              <h5>Filter PGs</h5>
              <label className="form-label mt-3">Budget (₹)</label>
              <input
                type="range"
                min="4000"
                max="10000"
                step="500"
                value={filters.price}
                className="form-range"
                onChange={(e) =>
                  setFilters({ ...filters, price: parseInt(e.target.value) })
                }
              />
              <p>Up to ₹{filters.price}</p>

              <label className="form-label">Location</label>
              <select
                className="form-select"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <option value="all">All</option>
                <option value="Ameerpet">Ameerpet</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>

              <label className="form-label mt-3">Gender</label>
              <select
                className="form-select"
                value={filters.gender}
                onChange={(e) =>
                  setFilters({ ...filters, gender: e.target.value })
                }
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* PG Listings */}
          <div className="col-md-9" id="pgList">
            {filteredPGs.map((pg, idx) => (
              <div className="pg-card row mb-3 shadow-sm rounded" key={idx}>
                <div className="col-md-4 p-0">
                  <img src={pg.image} className="pg-img w-100" alt={pg.name} />
                </div>
                <div className="col-md-8 p-3">
                  <h5 className="fw-bold">{pg.name}</h5>
                  <p>📍 {pg.location}</p>
                  <p>💰 ₹{pg.price}/mo</p>
                  <p>👤 {pg.gender === "male" ? "Male" : "Female"} PG</p>
                  <button
                    className="btn btn-book mt-2"
                    style={{ backgroundColor: "#ff5722", color: "#fff" }}
                    onClick={() => handleBooking(pg)}
                  >
                    Book Now
                  </button>
                  <div className="mt-3">
                    <iframe
                      src={pg.map}
                      width="100%"
                      height="150"
                      style={{ borderRadius: "10px" }}
                      title={pg.name}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">PG Booking</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Phone Number"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#ff5722", color: "#fff" }}
                  onClick={confirmBooking}
                >
                  Confirm & Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
