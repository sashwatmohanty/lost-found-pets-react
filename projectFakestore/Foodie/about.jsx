export function AboutFoodie() {
  return (
    <div
      className="container py-5"
      id="about"
      style={{ maxWidth: "1200px" }}
    >
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="about.jpg" // <-- Replace with your own image
            alt="About Foodie"
            className="img-fluid rounded-4 shadow"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-md-6 text-start">
          <h2 className="fw-bold mb-3">
            About <span style={{ color: "#FF4C4C" }}>Foodie Zone 🍴</span>
          </h2>
          <p className="text-muted fs-5">
            Foodie Zone is your one-stop destination to discover the best food
            and drinks in your city. Whether you're craving a cheesy pizza, a
            spicy burger, or a refreshing drink, we bring the top restaurants
            and cafes right to your fingertips.
          </p>
          <p className="text-muted fs-5">
            With our easy-to-use platform, you can search, explore, and order
            food from your favorite spots — anytime, anywhere.
          </p>

          {/* Highlight Points */}
          <ul className="list-unstyled fs-6">
            <li className="mb-2">✅ Browse top-rated restaurants and cafes</li>
            <li className="mb-2">✅ Find trending dishes and drinks</li>
            <li className="mb-2">✅ Quick search and smooth ordering</li>
          </ul>

          {/* Button */}
          <button
            className="btn btn-danger px-4 py-2 mt-3 rounded-pill"
            style={{ backgroundColor: "#FF4C4C", border: "none" }}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}
