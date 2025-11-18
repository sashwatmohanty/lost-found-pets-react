import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function EventHandlerDemo() {
  const [showPopup, setShowPopup] = useState(false);
  const [eventName, setEventName] = useState("");
  const [option, setOption] = useState("");
  const [events, setEvents] = useState([]);

  const [columnDefs] = useState([
    { headerName: "Name", field: "name", flex: 1 },
    { headerName: "Action", field: "action", flex: 1 },
  ]);

  const handleAddEvent = () => {
    if (!eventName) return alert("Enter event name");
    setEvents([...events, { name: eventName, action: option }]);
    setShowPopup(false);
    setEventName("");
    setOption("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Table (AG Grid)</h2>

      {/* Add button to open popup */}
      <button
        onClick={() => setShowPopup(true)}
        style={{
          marginBottom: "10px",
          background: "blue",
          color: "#fff",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        + Add
      </button>

      {/* AG GRID TABLE */}
      <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
        <AgGridReact rowData={events} columnDefs={columnDefs} />
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              width: "350px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            {/* close button (×) */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h3>Event Name</h3>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter event name"
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <h4>Select Option</h4>
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <option value="">--Select--</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>

            {/* Conditional Rendering */}
            {option === "Option 1" && (
              <div>
                <p>Set Day & Time</p>
                <label>Start Time: <input type="time" /></label><br />
                <label>End Time: <input type="time" /></label>
              </div>
            )}

            {option === "Option 2" && (
              <div>
                <p>Radio Group 1:</p>
                <label><input type="radio" name="r1" /> Option A</label><br />
                <label><input type="radio" name="r1" /> Option B</label>
              </div>
            )}

            {option === "Option 3" && (
              <div>
                <p>Radio Group 2:</p>
                <label><input type="radio" name="r2" /> Choice 1</label><br />
                <label><input type="radio" name="r2" /> Choice 2</label><br />
                <label><input type="radio" name="r2" /> Choice 3</label>
              </div>
            )}

            <button
              style={{
                marginTop: "15px",
                background: "green",
                color: "#fff",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={handleAddEvent}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventHandlerDemo;
