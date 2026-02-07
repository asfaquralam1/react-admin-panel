import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/auth/Login";
import MainLayout from "./components/layout/MainLayout";
import NotfoundPage from "./components/pages/NotFoundPage";
import Dashboard from "./components/pages/Dashboard";
import EditProducts from "./components/pages/products/EditProducts";
import Products from "./components/pages/products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/edit/:id" element={<EditProducts />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
