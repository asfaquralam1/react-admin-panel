import { NavLink } from "react-router-dom";
import {
  Diameter,
  List,
  Settings,
  User,
  ChevronDown,
  Circle,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = ({ sidebarOpen }) => {
  const [productOpen, setProductOpen] = useState(false);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      {/* <aside className="sidebar"> */}
      <h2 className="sidebar-title">Admin Panel</h2>

      <NavLink className="sidenav" to="/admin/dashboard" end>
        <Diameter size={18} style={{ marginRight: "10px" }} />
        Dashboard
      </NavLink>

      <NavLink className="sidenav" to="/admin/users">
        <User size={18} style={{ marginRight: "10px" }} />
        Users
      </NavLink>

      {/* Products Dropdown */}
      <div
        className="sidenav dropdown-parent"
        onClick={() => setProductOpen(!productOpen)}
      >
        <List size={18} style={{ marginRight: "10px" }} />
        <span style={{ flex: 1 }}>Courses</span>
        <ChevronDown
          size={14}
          style={{
            transition: "0.3s",
            transform: productOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {productOpen && (
        <div className="submenu">
          <NavLink to="/admin/courses" className="submenu-link">
            <Circle size={14} style={{ marginRight: "10px" }} />
            Courses List
          </NavLink>
          <NavLink to="/admin/courses/create" className="submenu-link">
            <Circle size={14} style={{ marginRight: "10px" }} />
            Add Course
          </NavLink>
        </div>
      )}

      <NavLink className="sidenav" to="/admin/settings">
        <Settings size={18} style={{ marginRight: "10px" }} />
        Settings
      </NavLink>
      {/* </aside> */}
    </div>
  );
};

export default Sidebar;
