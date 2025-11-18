import React from "react";
import PropTypes from "prop-types";

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 8,
    boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
    background: "#fff",
    maxWidth: 360,
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    objectFit: "cover",
    background: "#eee",
    display: "inline-block",
    flexShrink: 0,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    color: "#111",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  email: {
    fontSize: 13,
    color: "#555",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export default function Usercard({ name, email, avatar, className, style }) {
  return (
    <div style={{ ...styles.card, ...style }} className={className}>
      {avatar ? (
        <img src={avatar} alt={name || "avatar"} style={styles.avatar} />
      ) : (
        <div style={styles.avatar} aria-hidden>
          {/* empty avatar */}
        </div>
      )}
      <div style={styles.info}>
        <div style={styles.name}>{name}</div>
        <div style={styles.email}>{email}</div>
      </div>
    </div>
  );
}

Usercard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Usercard.defaultProps = {
  name: "Unknown User",
  avatar: null,
  className: undefined,
  style: undefined,
};