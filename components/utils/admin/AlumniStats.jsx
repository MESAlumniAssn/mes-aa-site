import React from "react";

// Component imports
import AlumniMembers from "./AlumniMembers";
import Lighthouse from "./Lighthouse";

const AlumniStats = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <Lighthouse />
      <AlumniMembers memberType="Lifetime" paymentStatus="active" />
      <AlumniMembers memberType="Annual" paymentStatus="active" />
      <AlumniMembers memberType="Lifetime" paymentStatus="pending" />
      <AlumniMembers memberType="Annual" paymentStatus="pending" />
    </div>
  );
};

export default AlumniStats;
