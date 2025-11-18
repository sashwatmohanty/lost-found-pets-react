import { createContext, useContext, useState } from "react";

let addcontext = createContext(null);

export function HandleInput({ onRemove }) {
  let data = useContext(addcontext);
  return (
    <div className="m-5 bg-body-secondary ">
      {data.map((item, index) => (
        <div key={index} className="d-flex align-items-center mb-2">
          <span className="me-2 m-1">{item}</span>
          <button
            onClick={() => onRemove(index)}
            className="btn btn-sm btn-danger"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export function Addname() {
  const [addvalue, setvalue] = useState("");
  const [contexss, setcontexstt] = useState([]);

  function Handeladdchange(e) {
    setvalue(e.target.value);
  }

  function HandelAdd(e) {
    e.preventDefault();
    if (addvalue.trim() !== "") {
      setcontexstt([...contexss, addvalue]);
      setvalue("");
    }
  }

  // ✅ Remove handler
  function handleRemove(index) {
    const updated = contexss.filter((_, i) => i !== index);
    setcontexstt(updated);
  }

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <form className="d-flex">
          <input
            value={addvalue}
            className="form-control me-2"
            type="text"
            onChange={Handeladdchange}
            placeholder="Enter your name"
          />
          <button
            onClick={HandelAdd}
            type="submit"
            className="btn btn-outline-danger"
          >
            Add
          </button>
        </form>
      </div>

      <div>
        <addcontext.Provider value={contexss}>
          <HandleInput onRemove={handleRemove} />
        </addcontext.Provider>
      </div>
    </div>
  );
}
