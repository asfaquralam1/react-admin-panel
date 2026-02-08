import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authApi";
import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon, Menu, Bell, Mail } from "lucide-react";

const Avatar = ({ user }) => {
  if (!user || !user.image) {
    return (
      <img src="/default-user.png" alt="Default" className="user-avatar" />
    );
  }

  return <img src={user.image} alt={user.firstName} className="user-avatar" />;
};

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("admin/login");
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <header className="header">
      <div className="header-left">
        <Menu size={24} style={{ marginLeft: "10px" }} />
      </div>

      <div className="header-right">
        <div>
          <Bell size={24} />
        </div>
        <div>
          <Mail size={24} />
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Avatar + Dropdown */}
        <div className="avatar-wrapper" ref={dropdownRef}>
          <div onClick={() => setOpenDropdown(!openDropdown)}>
            <Avatar user={user} />
          </div>

          {openDropdown && (
            <div className="dropdown-menu">
              <p className="dropdown-user">
                <a href="">{user?.firstName ? user.firstName : "Guest"}</a>
              </p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
