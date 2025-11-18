import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoteHomimmie } from "./fakestoteHomie";
import { Fakestoteproductss } from "./fakestore-product";

export function FakestoreIndex() {
  return (
    <div>
      <BrowserRouter>
        <header className="d-flex justify-content-between p-2 bg-danger-subtle">
          <div>
            <span className="fs-2 text-danger">shping..</span>
          </div>
          <div className="fs-5">
            <span className="mx-4">home</span>
            <span className="mx-4">home</span>
            <span className="mx-4">home</span>
          </div>
          <div>
            <button className="btn btn-danger">click</button>
          </div>
        </header>

        <section>
          <Routes>
           
            <Route path="/" element={<FakestoteHomimmie />} />
            <Route path="product/:category" element={<Fakestoteproductss />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
