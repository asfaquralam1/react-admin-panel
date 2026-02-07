import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../api/axios";

const AdminAuthProtect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const token = localStorage.getItem("admin-token");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const verifyAdmin = async () => {
      try {
        const res = await api.post("/verify", {
          token: JSON.parse(token),
        });
        setIsAuth(true);
      } catch (err) {
        localStorage.removeItem("admin-token");
        navigate(routesName.adminLogIn, { replace: true });
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [token, dispatch, navigate]);

  if (loading) return <div>Checking admin access...</div>;

  if (!isAuth) {
    return <Navigate to={routesName.adminLogIn} replace />;
  }

  return <Outlet />;
};

export default AdminAuthProtect;
