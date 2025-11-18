import React, { useState } from "react";

export function Formmm() {
    const [micName, setMicName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!micName.trim()) {
            setError("Mic name is required.");
        } else {
            setError("");
            // Handle successful form submission here
            alert(`Mic name submitted: ${micName}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="micName">Mic Name:</label>
                <input
                    id="micName"
                    type="text"
                    value={micName}
                    onChange={(e) => setMicName(e.target.value)}
                />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}