'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PatientDashboard() {
  const [patients, setPatients] = useState([]);

  // Fetch patients from the API
  useEffect(() => {
    const fetchPatients = async () => {
      const res = await fetch('/api/patients');
      const data = await res.json();
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <Link href="/patients/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Patient
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id} className="border-b">
                <td className="px-4 py-2">{patient.name}</td>
                <td className="px-4 py-2">{patient.age}</td>
                <td className="px-4 py-2">{patient.contact.phone}</td>
                <td className="px-4 py-2">{patient.contact.email}</td>
                <td className="px-4 py-2">
                  <Link href={`/patients/${patient._id}`}>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">
                      View
                    </button>
                  </Link>
                  <Link href={`/patients/edit/${patient._id}`}>
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deletePatient(patient._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Function to delete a patient
async function deletePatient(id) {
  const res = await fetch(`/api/patients/${id}`, { method: 'DELETE' });
  if (res.ok) {
    window.location.reload();
  }
}
