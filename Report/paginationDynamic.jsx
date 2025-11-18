import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function InfiniteScrollUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const isFetching = useRef(false);

  // ✅ Fetch 20 users dynamically
  const fetchUsers = async (pageNum) => {
    try {
      const res = await axios.get(
        `https://randomuser.me/api/?page=${pageNum}&results=20`
      );
      return res.data.results;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // ✅ Load next page
  const loadMore = async () => {
    if (isFetching.current) return;
    isFetching.current = true;
    const newUsers = await fetchUsers(page);
    setUsers((prev) => [...prev, ...newUsers]);
    setPage((p) => p + 1);
    isFetching.current = false;
  };

  // ✅ Initial load
  useEffect(() => {
    loadMore();
  }, []);

  // ✅ Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#1976d2",
          marginBottom: "20px",
        }}
      >
        Infinite Scroll Dynamic Users
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <h4 style={{ margin: "5px 0", color: "#333" }}>
              {user.name.title} {user.name.first} {user.name.last}
            </h4>
            <p style={{ fontSize: "13px", color: "#777" }}>{user.email}</p>
            <p style={{ fontSize: "12px", color: "#999" }}>{user.location.country}</p>
          </div>
        ))}
      </div>

      <div
        ref={loaderRef}
        style={{ textAlign: "center", padding: "30px", color: "#666" }}
      >
        Loading more users...
      </div>
    </div>
  );
}
