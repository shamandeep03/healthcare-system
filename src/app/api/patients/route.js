import { NextResponse } from 'next/server';
import Patient from '@/models/Patient';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  await connectToDatabase();
  const patients = await Patient.find({});
  return NextResponse.json(patients);
}

export async function POST(request) {
  await connectToDatabase();
  const data = await request.json();
  const patient = await Patient.create(data);
  return NextResponse.json(patient);
}
