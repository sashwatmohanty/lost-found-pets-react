import axios from "axios";
import { useEffect, useState } from "react";

export function ProFkaecata() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div>
      <section>
        <h2 className="text-danger fs-3 fw-light">Products</h2>
        <div className="row">
          {products.map((item) => (
            <div key={item.id} className="col-3 mb-3">
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  height="200"
                  alt={item.title}
                />
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text text-success fw-bold">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
