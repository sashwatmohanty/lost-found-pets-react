import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { FaTrash } from "react-icons/fa";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

// ------------------ Redux Slice ------------------
const reportingSlice = createSlice({
  name: "reporting",
  initialState: {
    isOpen: false,
    isMaximized: false,
    count: 0,
    type: "",
    startDate: "",
    preview: [],
    successMessage: "",
    warningMessage: "",
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    toggleMaximize: (state) => {
      state.isMaximized = !state.isMaximized;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setPreview: (state, action) => {
      state.preview = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setWarningMessage: (state, action) => {
      state.warningMessage = action.payload;
    },
    resetAll: (state) => {
      state.preview = [];
      state.type = "";
      state.startDate = "";
      state.count = 0;
      state.successMessage = "";
      state.warningMessage = "";
    },
  },
});

const {
  setIsOpen,
  toggleMaximize,
  setCount,
  setType,
  setStartDate,
  setPreview,
  setSuccessMessage,
  setWarningMessage,
  resetAll,
} = reportingSlice.actions;

// Store
const store = configureStore({
  reducer: {
    reporting: reportingSlice.reducer,
  },
});

// ------------------ Component ------------------
function ReportingPeriodCardComponent() {
  const dispatch = useDispatch();
  const {
    isOpen,
    isMaximized,
    count,
    type,
    startDate,
    preview,
    successMessage,
    warningMessage,
  } = useSelector((state) => state.reporting);

  const handleDeleteRow = (id) => {
    const newPreview = preview.filter((row) => row.id !== id);
    const resequenced = newPreview.map((row, index) => ({
      ...row,
      period: index + 1,
      label: `${String(index + 1).padStart(3, "0")} (${row.start} - ${row.end})`,
    }));
    dispatch(setPreview(resequenced));
    dispatch(setWarningMessage(""));
  };

  const handleSave = () => {
    const uniqueRows = preview.filter(
      (row, index, self) =>
        index === self.findIndex((r) => r.start === row.start && r.end === row.end)
    );
    dispatch(setPreview(uniqueRows));
    dispatch(setSuccessMessage(`Saved ${uniqueRows.length} row(s) successfully!`));
    setTimeout(() => dispatch(setSuccessMessage("")), 3000);
  };

  const CustomTypeEditor = (props) => {
    const [value, setValue] = useState(props.value || "");
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") props.stopEditing();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [props]);
    return (
      <input
        list="type-options"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          padding: "4px",
        }}
        autoFocus
      />
    );
  };

  const columnDefs = useMemo(
    () => [
      {
        headerName: "Reporting Period",
        field: "label",
        flex: 2,
        editable: true,
        cellEditor: "agTextCellEditor",
        cellStyle: { color: "#d97706", fontWeight: "500" },
      },
      {
        headerName: "Start Date",
        field: "start",
        flex: 1,
        editable: true,
        cellEditor: "agTextCellEditor",
      },
      {
        headerName: "End Date",
        field: "end",
        flex: 1,
        editable: true,
        cellEditor: "agTextCellEditor",
      },
      {
        headerName: "Type",
        field: "typeLabel",
        flex: 1,
        editable: true,
        cellEditor: CustomTypeEditor,
      },
      {
        headerName: "",
        field: "delete",
        width: 80,
        cellRenderer: (params) => (
          <button
            onClick={() => handleDeleteRow(params.data.id)}
            className="text-gray-500 hover:text-red-600 transition"
          >
            <FaTrash />
          </button>
        ),
      },
    ],
    [preview]
  );

  const parseDateSafe = (s) => {
    if (!s) return null;
    const d = new Date(s);
    if (isNaN(d)) return null;
    return d;
  };

  const checkOverlap = (rows) => {
    const ranges = rows
      .map((r) => {
        const s = parseDateSafe(r.start);
        const e = parseDateSafe(r.end);
        if (!s || !e) return null;
        return { start: s, end: e };
      })
      .filter(Boolean);
    for (let i = 0; i < ranges.length; i++) {
      for (let j = i + 1; j < ranges.length; j++) {
        const a = ranges[i];
        const b = ranges[j];
        if (a.start <= b.end && b.start <= a.end) return true;
      }
    }
    return false;
  };

  // ------------------ UPDATED handleGenerate ------------------
 const handleGenerate = () => {
  if (!startDate || !type || count <= 0) {
    alert("Please fill all fields and ensure count > 0");
    return;
  }

  const result = [];
  let current = new Date(startDate);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  for (let i = 0; i < count; i++) {
    const start = new Date(current);
    const end = new Date(current);

    switch (type) {
      case "Weeks(7 Days)":
        end.setDate(start.getDate() + 6);
        break;
      case "Biweekly":
        end.setDate(start.getDate() + 13);
        break;
      case "Calendar Months":
        end.setMonth(start.getMonth() + 1);
        end.setDate(end.getDate() - 1);
        break;
      case "Calendar Quarters":
        end.setMonth(start.getMonth() + 3);
        end.setDate(end.getDate() - 1);
        break;
      case "Semiannual":
        end.setMonth(start.getMonth() + 6);
        end.setDate(end.getDate() - 1);
        break;
      case "Annual":
        end.setFullYear(start.getFullYear() + 1);
        end.setDate(end.getDate() - 1);
        break;
      default:
        break;
    }

    const startStr = start.toISOString().split("T")[0];
    const endStr = end.toISOString().split("T")[0];
    const periodNum = preview.length + i + 1;
    const prefix = String(periodNum).padStart(3, "0"); // 001, 002, 003...

    let label = "";

    // ✅ Add numbering before each label
    if (type === "Weeks(7 Days)" || type === "Biweekly") {
      label = `${prefix} (${startStr} - ${endStr})`;
    } else if (type === "Calendar Months") {
      label = `${prefix} ${monthNames[start.getMonth()]} ${start.getFullYear()}`;
    } else if (type === "Calendar Quarters") {
      label = `${prefix} ${monthNames[start.getMonth()]} ${start.getFullYear()} - ${monthNames[end.getMonth()]} ${end.getFullYear()}`;
    } else if (type === "Semiannual") {
      label = `${prefix} ${monthNames[start.getMonth()]} - ${monthNames[end.getMonth()]} ${end.getFullYear()}`;
    } else if (type === "Annual") {
      label = `${prefix} ${start.getFullYear()}`;
    } else {
      label = `${prefix} (${startStr} - ${endStr})`;
    }

    result.push({
      id: periodNum,
      period: periodNum,
      typeLabel: type,
      start: startStr,
      end: endStr,
      label,
    });

    end.setDate(end.getDate() + 1);
    current = new Date(end);
  }

  const newPreview = [...preview, ...result];

  if (checkOverlap(newPreview)) {
    dispatch(
      setWarningMessage(
        "⚠️ The selected Start Date conflicts with another reporting period. Please adjust the date to avoid overlap."
      )
    );
    return;
  }

  dispatch(setPreview(newPreview));
  dispatch(setWarningMessage(""));
};


  const isGenerateDisabled = !startDate || !type || count <= 0;

  return (
    <div className="p-6">
      <button
        onClick={() => dispatch(setIsOpen(true))}
        className="btn btn-primary px-4 py-2 rounded-lg shadow"
      >
        Open Reporting Period
      </button>

      {isOpen && (
        <div
          className={`position-fixed ${
            isMaximized ? "top-0 start-0 w-100 h-100" : "top-50 start-50 translate-middle"
          } p-4 d-flex justify-content-center align-items-center`}
          style={{
            zIndex: 1050,
            backgroundColor: isMaximized ? "rgba(0,0,0,0.1)" : "transparent",
          }}
        >
          <div
            className={`card shadow-lg p-4 overflow-auto ${isMaximized ? "w-100 h-100" : "w-75"}`}
            style={{ maxHeight: isMaximized ? "100vh" : "80vh", borderRadius: "0.75rem" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h4 className="card-title mb-0">📊 Reporting Period</h4>
              <div className="d-flex gap-2">
                <button onClick={() => dispatch(toggleMaximize())} className="btn btn-sm btn-light">
                  {isMaximized ? "🗗" : "🗖"}
                </button>
                <button onClick={() => dispatch(setIsOpen(false))} className="btn btn-sm btn-danger">
                  ✖
                </button>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <button
                onClick={() => dispatch(setCount(Math.max(0, count - 1)))}
                className="btn btn-outline-secondary"
              >
                -
              </button>

              <input
                type="number"
                value={count}
                onChange={(e) => dispatch(setCount(Number(e.target.value)))}
                className="form-control w-auto text-center"
              />

              <button
                onClick={() => dispatch(setCount(count + 1))}
                className="btn btn-outline-secondary"
              >
                +
              </button>

              <input
                list="type-options"
                value={type}
                onChange={(e) => dispatch(setType(e.target.value))}
                className="form-control w-auto"
                placeholder="Select or type..."
              />
              <datalist id="type-options">
                <option value="Weeks(7 Days)" />
                <option value="Biweekly" />
                <option value="Calendar Months" />
                <option value="Calendar Quarters" />
                <option value="Semiannual" />
                <option value="Annual" />
              </datalist>

              <input
                type="date"
                value={startDate}
                onChange={(e) => dispatch(setStartDate(e.target.value))}
                className="form-control w-auto"
              />

              <button
                onClick={handleGenerate}
                disabled={isGenerateDisabled}
                className={`btn ${isGenerateDisabled ? "btn-warning disabled" : "btn-warning"}`}
              >
                Generate Preview
              </button>

              <button onClick={() => dispatch(resetAll())} className="btn btn-secondary">
                Reset All
              </button>
            </div>

            <div>
              <h5 className="mb-2">Preview</h5>
              <div className="ag-theme-alpine rounded" style={{ width: "100%" }}>
                <AgGridReact
                  rowData={preview}
                  columnDefs={columnDefs}
                  animateRows={true}
                  domLayout="autoHeight"
                  getRowId={(params) => params.data.id}
                />
              </div>

              {warningMessage && (
                <div className="alert alert-warning text-center mt-3 mb-0">{warningMessage}</div>
              )}
              {successMessage && (
                <div className="alert alert-success text-center mt-3 mb-0">{successMessage}</div>
              )}

              {preview.length > 0 && (
                <div className="d-flex flex-column align-items-center mt-3">
                  <button onClick={handleSave} className="btn btn-success mb-2">
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ------------------ Wrap with Provider ------------------
export default function ReportingPRedux() {
  return (
    <Provider store={store}>
      <ReportingPeriodCardComponent />
    </Provider>
  );
}
