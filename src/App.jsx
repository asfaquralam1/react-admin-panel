import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./App.css";
import React from "react";
import MainLayout from "./components/layout/MainLayout";
import NotFoundPage from "./components/pages/NotfoundPage";
import Login from "./components/pages/auth/Login";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/User/Users";
import EditUser from "./components/pages/User/EditUser";
import UserDatils from "./components/pages/User/UserDatils";
import AdminAuthProtect from "./components/pages/auth/AdminAuthProtect";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/login" element={<Login />} />

                <Route element={<AdminAuthProtect />}>
                    <Route element={<MainLayout />}>
                        <Route path="/admin/users" element={<Users />} />
                        <Route
                            path="/admin/users/edit/:id"
                            element={<EditUser />}
                        />
                        <Route
                            path="/admin/users/show/:id"
                            element={<UserDatils />}
                        />
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                    </Route></Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
