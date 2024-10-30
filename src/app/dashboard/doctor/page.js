'use client';

import Navbar from "@/app/components/Navbar";

const DoctorDashboard = () => {
  return (
    <>
    <Navbar role="doctor" />
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">View Appointments</h2>
            <p>Manage and view upcoming appointments.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Manage Patient Records</h2>
            <p>Access and update patient records and medical history.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Manage</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorDashboard;
