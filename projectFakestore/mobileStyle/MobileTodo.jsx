import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const NameContext = createContext();


function Allname() {
  const { names } = useContext(NameContext);
  return (
    <div>
      <h5 className="text-light">📋 all names</h5>
      {names.length === 0 ? (
        <p className="text-secondary">no names added</p>
      ) : (
        names.map((n, i) => (
          <div key={i} className="small text-white p-1">
            {n}
          </div>
        ))
      )}
    </div>
  );
}



function Addname() {
  const { names, setNames } = useContext(NameContext);
  const [value, setValue] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setNames([...names, value]);
      setValue("");
    }
  }

  return (
    <div>
      <h5 className="text-success">➕ Add Name</h5>
      <form className="d-flex mb-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control form-control-sm me-2 bg-dark text-white "
          placeholder="Enter name"/>
       
        <button 
          onClick={handleAdd}
          type="submit"
          className="btn btn-sm btn-success rounded-circle">
         Add 
        </button>
      </form>

      {names.map((n, i) => (
        <div key={i} className="small text-white p-1">
          {n}
        </div>
      ))}
    </div>
  );
}



function RemoveName() {
  const { names, setNames, removed, setRemoved } = useContext(NameContext);

  function handleRemove(index) {
    const nameToRemove = names[index];
    setRemoved([...removed, nameToRemove]);
    setNames(names.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h5 className="text-danger">❌ Remove Names</h5>
      {names.length === 0 ? (
        <p className="text-secondary">No names to remove</p>
      ) : (
        names.map((n, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center small text-white mb-2">
            <span>{n}</span>
            <button  onClick={() => handleRemove(i)}
              className="btn btn-sm btn-outline-danger rounded-circle">✖
            </button>
          </div>
        ))
      )}
    </div>
  );
}




function ViewRemoved() {
  const { removed } = useContext(NameContext);

  return (
    <div>
      <h5 className="text-warning">Removed Names</h5>
      {removed.length === 0 ? (
        <p className="text-secondary">No names removed</p>
      ) : (
        removed.map((n, i) => (
          <div key={i} className="small text-white p-1">
            {n}
          </div>
        ))
      )}
    </div>
  );
}



export function Mobiletodo() {
  const [names, setNames] = useState([]);
  const [removed, setRemoved] = useState([]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="card shadow-lg p-3 text-center"
        style={{
          width: "280px",
          borderRadius: "20px",
          backgroundColor: "#1c1c1c",
        }}
      >
        <BrowserRouter>
          <header className="mb-3">
            <nav className="d-flex justify-content-around">
              <Link to="/"
                className="btn btn-dark border rounded-circle text-white"
                style={{ width: "55px", height: "55px" }}>All
              </Link>
              <Link
                to="/Addname"
                className="btn btn-dark border rounded-circle text-success"
                style={{ width: "55px", height: "55px" }}>Add
              </Link>
              <Link
                to="/Remove"
                className="btn btn-dark border rounded-circle text-danger"
                style={{ width: "55px", height: "55px" }}> Rem
              </Link>
              <Link
                to="/View"
                className="btn btn-dark border rounded-circle text-warning"
                style={{ width: "55px", height: "55px" }}> View
              </Link>
            </nav>
          </header>

          <NameContext.Provider value={{ names, setNames, removed, setRemoved }}>
            <section className="mt-2">
              <Routes>
                <Route path="/" element={<Allname />} />
                <Route path="/Addname" element={<Addname />} />
                <Route path="/Remove" element={<RemoveName />} />
                <Route path="/View" element={<ViewRemoved />} />
              </Routes>
            </section>
          </NameContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}
