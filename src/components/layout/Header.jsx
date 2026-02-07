import { useNavigate } from "react-router-dom";
import { logout } from "../../api/authApi";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("Header user:", user);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  const handleLogout = () => {
    logout();              // clear storage
    navigate("/login");    // redirect instantly
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
      <Menu size={18} style={{ marginTop: "10px", marginLeft: "10px" }} />

      {user && (
        <div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <span>Welcome, {user.firstName} </span>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
