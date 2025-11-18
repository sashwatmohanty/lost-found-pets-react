import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export function DynamicPagination() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageNumRef = useRef(1);
  const containerRef = useRef(null);

  // ✅ Page type setup — each page shows different columns
  const pageLayouts = [
    ["fullName", "email"], // Page 1
    ["fullName", "picture"], // Page 2
    ["fullName", "gender", "country"], // Page 3
    ["picture", "fullName", "email", "country"], // Page 4
  ];

  // ✅ Fetch data per page
  const fetchPageData = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=10`
      );
      const data = await res.json();

      // Transform API data
      const transformed = data.results.map((user, i) => ({
        id: `${page}-${i}`,
        fullName: `${user.name.first} ${user.name.last}`,
        email: user.email,
        gender: user.gender,
        country: user.location.country,
        picture: user.picture.large,
      }));

      // Pick layout for this page
      const layout =
        pageLayouts[(page - 1) % pageLayouts.length] || ["fullName", "email"];

      // Create columns dynamically based on layout
      const columns = layout.map((key) => {
        if (key === "picture") {
          return {
            headerName: "Picture",
            field: "picture",
            width: 120,
            cellRenderer: (params) => (
              <img
                src={params.value}
                alt="User"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
            ),
          };
        }
        return {
          headerName:
            key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
          field: key,
          flex: 1,
        };
      });

      const title = `Dynamic Layout Page ${page}`;

      setPages((prev) => [
        ...prev,
        { page, title, data: transformed, columns, id: Date.now() + page },
      ]);
    } catch (err) {
      console.error("Error fetching page:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load first page
  useEffect(() => {
    fetchPageData(1);
  }, []);

  // ✅ Horizontal scroll to fetch next pages
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || loading) return;

    const nearEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 200;

    if (nearEnd && !loading) {
      const nextPage = pageNumRef.current + 1;
      pageNumRef.current = nextPage;
      fetchPageData(nextPage);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        display: "flex",
        overflowX: "auto",
        height: "100vh",
        width: "100vw",
        scrollBehavior: "smooth",
        background: "#f5f5f5",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {pages.map((p) => (
        <div
          key={p.id}
          className="ag-theme-quartz"
          style={{
            minWidth: "100vw",
            flex: "0 0 100vw",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            background: "#fff",
            padding: "10px",
          }}
        >
          <h3
            style={{
              backgroundColor: "#1976d2",
              color: "white",
              padding: "12px",
              margin: 0,
              textAlign: "center",
              borderRadius: "6px",
            }}
          >
            {p.title}
          </h3>

          <div style={{ height: "80vh", width: "100%", marginTop: "10px" }}>
            <AgGridReact columnDefs={p.columns} rowData={p.data} />
          </div>
        </div>
      ))}

      {loading && (
        <div
          style={{
            minWidth: "100vw",
            flex: "0 0 100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          Loading next page...
        </div>
      )}
    </div>
  );
}
