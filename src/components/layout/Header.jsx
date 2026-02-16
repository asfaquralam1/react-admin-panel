import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authApi";
import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon, Menu, Bell, Mail } from "lucide-react";

const Avatar = ({ user }) => {
  if (!user || !user.profile_picture) {
    return (
      <img src="/default-user.png" alt="Default" className="user-avatar" />
    );
  }

  return (
    <img
      src={user.profile_picture}
      alt={user.first_name}
      className="user-avatar"
    />
  );
};

const Header = ({toggleSidebar}) => {
  const navigate = useNavigate();
  const userinfo = JSON.parse(localStorage.getItem("user"));
  const user = userinfo.data;
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
        <Menu onClick={toggleSidebar} size={24} style={{ marginLeft: "10px", cursor: "pointer" }} />
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

        <div className="avatar-wrapper" ref={dropdownRef}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown((prev) => !prev);
            }}
          >
            <Avatar user={user} />
          </div>

          {openDropdown && (
            <div className="user-menu">
              <p className="dropdown-user">
                <a href="#">{user?.username || "Guest"}</a>
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
