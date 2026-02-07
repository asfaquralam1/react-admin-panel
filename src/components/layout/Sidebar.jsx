import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Diameter, Newspaper, Settings, User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <NavLink className={"sidenav"} to="/" end> <Diameter size={14} style={{marginRight: "10px"}}/> Dashboard</NavLink>
      <NavLink className={"sidenav"} to="/users"><User size={14} style={{marginRight: "10px"}}/> Users</NavLink>
      <NavLink className={"sidenav"} to="/products"><Newspaper size={14} style={{marginRight: "10px"}}/> Products </NavLink>
      <NavLink className={"sidenav"} to="/admin/settings"> <Settings size={14} style={{marginRight: "10px"}} /> <span>Settings</span></NavLink>
    </aside>
  );
};

export default Sidebar;
