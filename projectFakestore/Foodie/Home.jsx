import { useState } from "react";


export function Homefoodie() {
  const [searchTerm, setSearchTerm] = useState("");
  


  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        height: "100vh",
        backgroundImage: "url('foo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      ></div>


      <div className="position-relative text-white" style={{ zIndex: 1 }}>
  
        <h1 className="fw-bold display-3 mb-3">
          <span style={{ color: "#FF4C4C" }}>Foodie</span> Zone 🍴
        </h1>

    
        <p className="fs-4 mb-4">
          Discover the best food & drinks in your city
        </p>

    
        <form
          className="d-flex justify-content-center align-items-center shadow-sm rounded-pill p-1 mx-auto"
          style={{
            maxWidth: "600px",
            width: "90%",
            backgroundColor: "#fff",
          }}
          onSubmit={handleSearch}
        >
          <input
            type="search"
            className="form-control border-0 rounded-pill px-3"
            placeholder="Search for restaurants, cuisines or dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              outline: "none",
              boxShadow: "none",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            className="btn px-4 rounded-pill"
            style={{
              backgroundColor: "#FF4C4C",
              color: "#fff",
              border: "none",
              fontWeight: "500",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
