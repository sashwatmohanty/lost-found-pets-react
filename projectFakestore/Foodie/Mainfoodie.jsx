import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Homefoodie } from "./Home";
import { LoginFoddie } from "./logiFoddie";

import { Menufoodie } from "./menu";
import { AboutFoodie } from "./about";
import { ContactFoodie } from "./contact";

export function Mainfoodie() {
  return (
    <div>
      <BrowserRouter>
     
        <nav className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
         
          <div className="fs-2 fw-bold text-danger">
            🍴 Fooodie
          </div>

          
          <div className="fs-5 fw-medium">
            <Link to="/" className="mx-3 text-decoration-none text-dark nav-link-hover">
              Home
            </Link>
            <Link to="/menu" className="mx-3 text-decoration-none text-dark nav-link-hover">
              Menu
            </Link>
            <Link to="/contact" className="mx-3 text-decoration-none text-dark nav-link-hover">
              Contact
            </Link>
            <Link to="/about" className="mx-3 text-decoration-none text-dark nav-link-hover">
              About
            </Link>
          </div>

        
          <div className="d-flex align-items-center">
            <span className="bi bi-search mx-3 fs-5 text-secondary"></span>
            <span className="bi bi-person mx-3 fs-5 text-secondary"></span>
            <Link to="Login" className="btn btn-danger px-4 fw-semibold shadow-sm">
              Login
            </Link>
          </div>
        </nav>

      
        <section className="m-0">
          <Routes>
            <Route path="/" element={<Homefoodie />} />
            <Route path="Login" element={<LoginFoddie />} />
            <Route path="menu"element={<Menufoodie/>}></Route>
            <Route path="contact"element={<ContactFoodie/>}></Route>
            <Route path="about"element={<AboutFoodie/>}></Route>
            

          </Routes>
        </section>
      </BrowserRouter>

   
      <style>{`
        .nav-link-hover:hover {
          color: #dc3545 !important; /* Bootstrap danger color */
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}
