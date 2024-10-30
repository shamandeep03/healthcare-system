'use client';

import Navbar from "@/app/components/Navbar";

const AdminDashboard = () => {
  return (
    <>
     <Navbar role="admin" />
     <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Manage Users</h2>
            <p>View and manage all users in the system.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Manage</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Manage Doctors</h2>
            <p>View and manage all doctors in the system.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Manage</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Manage Patients</h2>
            <p>View and manage all patients in the system.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Manage</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
