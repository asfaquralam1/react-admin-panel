import React from "react";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: "#111827",
    color: "#aaa",
    fontSize: "0.9rem",
  };

  const linkStyle = {
    color: "#aaa",
    marginLeft: "1rem",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 AdminPanel. All rights reserved.</p>
      <div>
        <a href="#" style={linkStyle}>Privacy</a>
        <a href="#" style={linkStyle}>Terms</a>
        <a href="#" style={linkStyle}>Support</a>
      </div>
    </footer>
  );
};

export default Footer;
