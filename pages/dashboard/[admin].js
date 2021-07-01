import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Component imports
import AdminLogin from "../../components/utils/admin/AdminLogin";
import AdminHeadLayout from "../../components/layout/head/AdminHeadLayout";

const admin = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("mesAAToken")) {
        router.push("/alumniassndashboard");
      }
    }
  }, []);

  return (
    <AdminHeadLayout>
      <AdminLogin />
    </AdminHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { admin } = context.params;

  if (admin !== process.env.NEXT_PUBLIC_ADMIN_ID) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      admin: null,
    },
  };
};

export default admin;
