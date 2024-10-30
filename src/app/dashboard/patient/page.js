'use client';

import Navbar from "@/app/components/Navbar";

const PatientDashboard = () => {
  return (
   <>
     <Navbar role="patient" />
     <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Patient Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">View Appointments</h2>
            <p>See your upcoming appointments with doctors.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">View Prescriptions</h2>
            <p>Check your past prescriptions and details.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View</button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default PatientDashboard;
