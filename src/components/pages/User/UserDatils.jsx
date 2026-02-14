import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CFormInput,
  CFormLabel,
  CInputGroup,
  CCol,
  CRow,
  CContainer,
  CForm,
} from "@coreui/react";
import { fetchSingleUser } from "../../../services/userApi";

function UserDatils() {
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    role: "",
    profile_picture:"",
    is_active: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchSingleUser(id);
        const userData = res?.data;
        // console.log("user", userData);
        setUser({
          first_name: userData.first_name,
          last_name: userData.last_name,
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          dob: userData.dob,
          role: userData.role,
          profile_picture: userData.profile_picture,
          is_active: userData.is_active
        });
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) {
    return <p>Loading user...</p>;
  }

  return (
    <CContainer className="form-wrapper">
      <h2>User Details</h2>

      <CForm>
        <CRow>
          <CCol lg={6} md={6}>
            <CFormLabel htmlFor="first_name">First Name</CFormLabel>
            <CInputGroup>
              <CFormInput
                id="first_name"
                placeholder="First Name"
                name="first_name"
                value={user.first_name}
                style={{ width: "100%" }}
              />
            </CInputGroup>
          </CCol>

          <CCol lg={6} md={6}>
            <CFormLabel htmlFor="email">last Name</CFormLabel>
            <CInputGroup>
              <CFormInput
                id="last_name"
                type="last_name"
                name="last_name"
                value={user.last_name}
                style={{ width: "100%" }}
              />
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6}>
            <CFormLabel htmlFor="first_name"> Username </CFormLabel>
            <CInputGroup>
              <CFormInput
                placeholder="userName"
                value={user.username}
                name="username"
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
                style={{ width: "100%" }}
              />
            </CInputGroup>
          </CCol>
        </CRow>
      </CForm>
    </CContainer>
  );
}

export default UserDatils;
