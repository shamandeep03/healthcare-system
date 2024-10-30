'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PatientDetails({ params }) {
  const { id } = params;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      const res = await fetch(`/api/patients/${id}`);
      const data = await res.json();
      setPatient(data);
    };
    fetchPatient();
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{patient.name}'s Details</h1>
      <div className="mb-4">
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Phone:</strong> {patient.contact.phone}</p>
        <p><strong>Email:</strong> {patient.contact.email}</p>
        <p><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
      </div>
      <button
        onClick={() => router.push('/patients')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Back to Patients
      </button>
    </div>
  );
}
