import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export function EventProject() {
  const [showPopup, setPopup] = useState(false);
  const [eventList, setEventList] = useState([]);

  const [option, setOption] = useState("");
  const [day, setDay] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("");

  const [usedDays, setUsedDays] = useState([]);
  const [usedCities, setUsedCities] = useState([]);
  const [usedCars, setUsedCars] = useState([]);

  const [editEventIndex, setEditEventIndex] = useState(null);

  const colDef = [
    { headerName: "Name", field: "name", flex: 1 },
    { headerName: "Action", field: "action", flex: 1 },
  ];

  // NAME MUST BE ONLY OPTION NAME
  const getEventName = (opt) => {
    if (opt === "one") return "DailySet";
    if (opt === "two") return "RadioSet";
    if (opt === "three") return "Selector";
    return "";
  };

  // ACTION MUST ONLY SHOW SELECTED VALUE
  const getActionValue = (opt, dayVal, radioVal, selectVal) => {
    if (opt === "one") return dayVal;
    if (opt === "two") return radioVal;
    if (opt === "three") return selectVal;
    return "";
  };

  const openAddPopup = () => {
    setOption("");
    setDay("");
    setStartDate("");
    setEndDate("");
    setRadio("");
    setSelect("");
    setEditEventIndex(null);
    setPopup(true);
  };

  const openEditPopup = (index) => {
    const ev = eventList[index];

    setOption(ev.option);
    setDay(ev.day || "");
    setStartDate(ev.startDate || "");
    setEndDate(ev.endDate || "");
    setRadio(ev.radio || "");
    setSelect(ev.select || "");

    setEditEventIndex(index);
    setPopup(true);
  };

  const saveEvent = () => {
    let name = getEventName(option);
    let action = getActionValue(option, day, radio, select);

    if (!option) {
      alert("Select Option");
      return;
    }

    if (option === "one" && !day) {
      alert("Select Day");
      return;
    }
    if (option === "two" && !radio) {
      alert("Select City");
      return;
    }
    if (option === "three" && !select) {
      alert("Select Car");
      return;
    }

    const newEvent = {
      name,
      action,
      option,
      day,
      startDate,
      endDate,
      radio,
      select,
    };

    const updated = [...eventList];

    if (editEventIndex !== null) {
      const old = eventList[editEventIndex];

      if (old.option === "one")
        setUsedDays((p) => p.filter((d) => d !== old.day));
      if (old.option === "two")
        setUsedCities((p) => p.filter((c) => c !== old.radio));
      if (old.option === "three")
        setUsedCars((p) => p.filter((c) => c !== old.select));

      updated[editEventIndex] = newEvent;
    } else {
      updated.push(newEvent);
    }

    setEventList(updated);

    if (option === "one") setUsedDays((p) => [...p, day]);
    if (option === "two") setUsedCities((p) => [...p, radio]);
    if (option === "three") setUsedCars((p) => [...p, select]);

    setOption("");
    setDay("");
    setStartDate("");
    setEndDate("");
    setRadio("");
    setSelect("");
    setEditEventIndex(null);
    setPopup(false);
  };

  return (
    <div>
      <div className="mx-auto m-5" style={{ height: 700 }}>
        <div className="m-3">
          <button className="btn btn-primary" onClick={openAddPopup}>
            + Add
          </button>
        </div>

        <div className="ag-theme-alpine m-5" style={{ height: 300 }}>
          <AgGridReact rowData={eventList} columnDefs={colDef} />
        </div>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
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
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "650px",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setPopup(false);
                setEditEventIndex(null);
              }}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                border: "none",
                background: "transparent",
                fontSize: "20px",
              }}
            >
              ×
            </button>

            <h3>{editEventIndex !== null ? "Edit Event" : "Add New Event"}</h3>

            {/* NO EVENT NAME INPUT - REMOVED COMPLETELY */}

            <label className="form-label">Select Option</label>

            <div className="d-flex gap-2 mb-3">
              <button
                className={`btn ${option === "one" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setOption("one")}
                disabled={usedDays.length === 7 && editEventIndex === null}
              >
                DailySet {usedDays.length === 7 ? "(All used)" : ""}
              </button>

              <button
                className={`btn ${option === "two" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setOption("two")}
                disabled={usedCities.length === 4 && editEventIndex === null}
              >
                RadioSet {usedCities.length === 4 ? "(All used)" : ""}
              </button>

              <button
                className={`btn ${option === "three" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setOption("three")}
                disabled={usedCars.length === 4 && editEventIndex === null}
              >
                Selector {usedCars.length === 4 ? "(All used)" : ""}
              </button>
            </div>

            {option === "one" && (
              <div className="mb-3">
                <label>Select Day</label>
                <select
                  className="form-select"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option value="">--select day--</option>
                  {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(
                    (d) => (
                      <option key={d} value={d} disabled={usedDays.includes(d) && day !== d}>
                        {d} {usedDays.includes(d) && day !== d ? "(used)" : ""}
                      </option>
                    )
                  )}
                </select>

                <button className="btn btn-primary mt-3" onClick={saveEvent}>
                  {editEventIndex !== null ? "Update Event" : "Add Event"}
                </button>
              </div>
            )}

            {option === "two" && (
              <div>
                <label>Select City</label>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  {["Pune", "Delhi", "Mumbai", "Odisha"].map((city) => (
                    <label key={city}>
                      <input
                        disabled={usedCities.includes(city) && radio !== city}
                        type="radio"
                        name="city"
                        value={city}
                        checked={radio === city}
                        onChange={(e) => setRadio(e.target.value)}
                      />
                      {" "}{city}
                      {usedCities.includes(city) && radio !== city ? " (used)" : ""}
                    </label>
                  ))}
                </div>

                <button className="btn btn-primary mt-3" onClick={saveEvent}>
                  {editEventIndex !== null ? "Update Event" : "Add Event"}
                </button>
              </div>
            )}

            {option === "three" && (
              <div>
                <label>Select Car</label>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  {["Audi", "Bmw", "Suzuki", "Alto"].map((car) => (
                    <label key={car}>
                      <input
                        disabled={usedCars.includes(car) && select !== car}
                        type="radio"
                        name="car"
                        value={car}
                        checked={select === car}
                        onChange={(e) => setSelect(e.target.value)}
                      />
                      {" "}{car}
                      {usedCars.includes(car) && select !== car ? " (used)" : ""}
                    </label>
                  ))}
                </div>

                <button className="btn btn-primary mt-3" onClick={saveEvent}>
                  {editEventIndex !== null ? "Update Event" : "Add Event"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
