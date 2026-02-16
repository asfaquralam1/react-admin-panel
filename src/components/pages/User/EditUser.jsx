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
  CForm,
} from "@coreui/react";
import { editSingleUser, updateSingleUser } from "../../../services/userApi";

function EditUser() {
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await editSingleUser(id);
        const userData = res?.data;
        // console.log("user", userData);
        setUser({
          first_name: userData.first_name,
          email: userData.email,
          password: userData.password_hash
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Data:", user);

    try {
      const data = await updateSingleUser({
        email: user.email, // assuming you store it in state
        password: user.password, // assuming you store it in state
      });
      console.log("User updated successfully:", data);
      // Optionally update local state or show success message
    } catch (error) {
      console.error("Failed to update user:", error);
      // Optionally show an error message to the user
    }
  };


  if (loading) {
    return <p>Loading user...</p>;
  }

  return (
    <CContainer className="form-wrapper">
      <h2>Edit User</h2>

      <CForm onSubmit={handleSubmit}>
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
                style={{ width: "100%" }}
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
                style={{ width: "100%" }}
              />
            </CInputGroup>
          </CCol>
        </CRow>

        <CCol lg={6} md={6}>
            <CFormLabel htmlFor="password">Password</CFormLabel>
            <CInputGroup>
              <CFormInput
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
                style={{ width: "100%" }}
              />
            </CInputGroup>
          </CCol>

        <CButton type="submit" color="primary">
          Update
        </CButton>
      </CForm>
    </CContainer>
  );
}

export default EditUser;
