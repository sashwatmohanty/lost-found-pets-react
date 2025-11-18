import React, { useRef, useCallback, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export function Pagination() {
  const gridRef = useRef();

  const [columnDefs] = useState([
    { headerName: "First Name", field: "name.first", sortable: true, flex: 1 },
    { headerName: "Last Name", field: "name.last", sortable: true, flex: 1 },
    { headerName: "Email", field: "email", flex: 2 },
    { headerName: "Country", field: "location.country", sortable: true, flex: 1 },
    {
      headerName: "Picture",
      field: "picture.thumbnail",
      flex: 0.5,
      cellRenderer: (params) => (
        <img
          src={params.value}
          alt="User"
          style={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "block",
            margin: "auto",
          }}
        />
      ),
    },
  ]);

  // ✅ Fetch users from API
  const fetchUsers = async (page) => {
    const res = await fetch(`https://randomuser.me/api/?page=${page}&results=20`);
    const data = await res.json();
    return data.results;
  };

  // ✅ Infinite scroll logic
  const datasource = {
    page: 1,
    getRows: async (params) => {
      const users = await fetchUsers(datasource.page);
      if (users.length === 0) {
        params.successCallback([], 0);
        return;
      }
      datasource.page += 1;
      params.successCallback(users);
    },
  };

  // ✅ Attach datasource to grid
  const onGridReady = useCallback((params) => {
    params.api.setGridOption("datasource", datasource);
    params.api.sizeColumnsToFit(); // 🔥 Make all columns auto-fit initially
  }, []);

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: "100vh",
        width: "100vw", // full width of the viewport
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h4
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: "10px 20px",
          margin: 0,
        }}
      >
        Random Users (Infinite Scroll)
      </h4>

      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowModelType="infinite"
        cacheBlockSize={20}
        maxBlocksInCache={2}
        onGridReady={onGridReady}
        domLayout="normal"
        animateRows={true}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "13px",
          color: "gray",
        }}
      >
        Data fetched from RandomUser API
      </div>
    </div>
  );
}
