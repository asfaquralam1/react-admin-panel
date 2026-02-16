import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="admin-wrapper">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className={`admin-body ${sidebarOpen ? "" : "full"}`}>
          <Header toggleSidebar={toggleSidebar} />
          <main className="admin-content">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
