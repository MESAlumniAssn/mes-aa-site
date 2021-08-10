import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Component imports
import AdminHeadLayout from "../components/layout/head/AdminHeadLayout";
import AdminHeader from "../components/utils/admin/AdminHeader";
import Tabs from "../components/utils/admin/Tabs";
import Footer from "../components/layout/Footer";
import { toast } from "react-toastify";

const loginToast = () =>
  toast.dark("Log in to access the dashboard", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const alumniassndashboard = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");

    if (!localStorage.getItem("mesAAToken")) {
      if (process.browser) loginToast();
      router.push(`/dashboard/${process.env.NEXT_PUBLIC_ADMIN_ID}`);

      return <div></div>;
    }
  }

  return (
    <AdminHeadLayout>
      <div>
        <AdminHeader />
        <Tabs />
        <Footer />
      </div>
    </AdminHeadLayout>
  );
};

export default alumniassndashboard;
