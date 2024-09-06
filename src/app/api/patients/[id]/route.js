import { connectToDatabase } from "@/lib/db";
import Patient from "@/models/Patient";

export async function GET(request, { params }) {
  const { id } = params;
  
  try {
    await connectToDatabase();
    const patient = await Patient.findById(id);
    if (!patient) {
      return new Response(JSON.stringify({ error: 'Patient not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(patient), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch patient' }), { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  
  try {
    await connectToDatabase();
    const patient = await Patient.findByIdAndUpdate(id, data, { new: true });
    if (!patient) {
      return new Response(JSON.stringify({ error: 'Patient not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(patient), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update patient' }), { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  
  try {
    await connectToDatabase();
    const patient = await Patient.findByIdAndDelete(id);
    if (!patient) {
      return new Response(JSON.stringify({ error: 'Patient not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Patient deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete patient' }), { status: 500 });
  }
}
