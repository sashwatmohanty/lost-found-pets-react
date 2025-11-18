import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { InstaHome } from "./InstaHome";
import { Instasearch } from "./Search";

export function InstaMain() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          
          
          <div className="col-2 bg-black text-white p-3" style={{ height: "100vh" }}>
          
            <div className="mb-5">
              <span className="text-2xl font-bold">Instagram</span>
            </div>

            
            <div className="flex-1 space-y-3">
              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <Link to="/" className="flex items-center space-x-2 text-white hover:text-black">
                  <i className="bi bi-house"></i>
                  <span>Home</span>
                </Link>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <Link to='Search'>
                 <i className="bi bi-search"></i>
                <span className="ml-2">Search</span>
                </Link>
               
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Explore</span>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Reels</span>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Messages</span>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Notifications</span>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Create</span>
              </div>

              <div className="group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
                <span>Profile</span>
              </div>
            </div>

           
            <div className="mt-auto pt-5 group cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 hover:text-black transition">
              <span>More</span>
            </div>
          </div>

        
          <div className="col-10 bg-light" style={{ height: "100vh", overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<InstaHome />} />
              <Route path="Search"element={<Instasearch/>}></Route>
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}
