
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div>
      <div className="admin-wrapper">
        <Sidebar />
        <div className="admin-body">
          <Header />
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
