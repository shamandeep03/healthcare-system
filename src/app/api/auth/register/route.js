import { connectToDatabase } from '@/lib/db';
import User from '@/models/User';

export async function POST(req) {
  await connectToDatabase();

  const { name, email, password, role } = await req.json();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  // Create a new user
  const user = new User({
    name,
    email,
    password,
    role: role || 'patient', // Default to patient if role isn't provided
  });

  await user.save();

  return new Response(JSON.stringify({
    message: 'User registered successfully',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  }), { status: 201 });
}
