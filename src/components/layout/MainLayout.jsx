import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="admin-wrapper">
        <Sidebar isOpen={isOpen} />
        <div className="admin-body">
           <Header toggleSidebar={toggleSidebar} />
           {/* <Sidebar isOpen={isOpen} /> */}
          <main className="admin-content">
            <Outlet />
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
