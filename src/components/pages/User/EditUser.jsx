import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CFormInput,
  CFormLabel,
  CInputGroup,
  CButton,
  CCol,
  CRow,
  CContainer,
} from "@coreui/react";
import { fetchSingleUser } from "../../../services/userApi";

function EditUser() {
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchSingleUser(id);
        const userData = res?.data?.[0];
        console.log("user", userData);
        setUser({
          first_name: userData.first_name,
          email: userData.email,
        });
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", user);
    // update API call here
  };

  if (loading) {
    return <p>Loading user...</p>;
  }

  return (
    <div className="form-wrapper">
      <h2>Edit User</h2>

      <form onSubmit={handleSubmit}>
        <CRow>
          <CCol lg={6} md={6}>
            <CFormLabel htmlFor="first_name">First Name</CFormLabel>
            <CInputGroup>
              <CFormInput
                id="first_name"
                placeholder="First Name"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
              />
            </CInputGroup>
          </CCol>

          <CCol lg={6} md={6}>
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CInputGroup>
              <CFormInput
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </CInputGroup>
          </CCol>
        </CRow>

        <CButton type="submit" color="primary">
          Update User
        </CButton>
      </form>
    </div>
  );
}

export default EditUser;
