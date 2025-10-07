'use client'
import React from "react";
import { useAuth } from "../../../context/AuthContext"; // adjust path if needed
import MainNavbar from "../components/navbar/MainNavbar"; // for logged-in users
import Navbar from "../components/navbar/Navbar"; // for public users
import Footer from "../components/common/Footer";
import Pricing_Page from "../components/HomeNav_components/Pricing_Page";

export default function Pricing() {
  const { user } = useAuth();

  return (
    <div>
      {/* Conditionally render navbar */}
      {user ? <MainNavbar /> : <Navbar />}
      
      <Pricing_Page />
      
      <Footer />
    </div>
  );
}
