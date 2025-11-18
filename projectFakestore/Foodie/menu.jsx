import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Menufoodie() {
  const [food, setFood] = useState([]);
  const [searchTerm, setSearchTerm] = useState("fast food");
  const [cookie] = useCookies(["name"]);
  const navigate = useNavigate();

  const fetchFoodImages = (query) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: query || "fast food",
          per_page: 30,
          content_filter: "high",
        },
        headers: {
          Authorization: "Client-ID XNOtq9pC4TwJR_lEIAeHWUyvPIVcb1fHKAPeZYLPNmc",
        },
      })
      .then((response) => {
        const filteredResults = response.data.results.filter((item) => {
          const description = item.alt_description?.toLowerCase() || "";
          return (
            description.includes("food") ||
            description.includes("pizza") ||
            description.includes("burger") ||
            description.includes("snack") ||
            description.includes("drink")
          );
        });
        setFood(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching food images:", error);
      });
  };

  useEffect(() => {
    if (cookie.name) {
      fetchFoodImages(searchTerm);
    } else {
      navigate("/Login");
    }
  }, [cookie, navigate, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    fetchFoodImages(searchTerm);
  };

  return (
    <div className="container my-5">
      {/* Search Section */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          🍝 <span className="text-danger">Your</span> <span>Menu</span>
        </h2>
        <h5 className="text-muted">Discover the best food around you. Order now! 🚀</h5>
      </div>

      <form className="d-flex justify-content-center mb-5" onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control w-50 p-3 shadow-sm rounded-pill"
          placeholder="Search for restaurants, dishes, or cuisines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-danger ms-2 px-4 rounded-pill shadow-sm" type="submit">
          Search
        </button>
      </form>

      {/* Food Cards Grid */}
      <div className="row g-4">
        {food.length > 0 ? (
          food.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <div className="position-relative">
                  <img
                    src={item.urls.small}
                    className="card-img-top"
                    alt={item.alt_description || "Food"}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-success text-white rounded-3 small">
                    ⭐ {(Math.random() * (5 - 3) + 3).toFixed(1)}
                  </span>
                </div>

                <div className="card-body text-start">
                  <h5 className="card-title fw-semibold text-truncate">
                    {item.alt_description
                      ? item.alt_description.charAt(0).toUpperCase() + item.alt_description.slice(1)
                      : "Delicious Food"}
                  </h5>
                  <p className="text-muted small mb-2">
                    {["Pizza", "Burger", "Snacks", "Drinks"][Math.floor(Math.random() * 4)]}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">
                      ₹{Math.floor(Math.random() * 400) + 100}
                    </span>
                    <button className="btn btn-outline-danger btn-sm rounded-pill">Order</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No food found. Try searching for "Pizza" or "Burger". 🍕</p>
        )}
      </div>
    </div>
  );
}
