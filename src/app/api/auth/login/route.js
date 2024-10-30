import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/db';

export async function POST(req) {
  await connectToDatabase();
  
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return new Response(JSON.stringify({
    token,
    user: {
      id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
    },
  }), { status: 200 });
}
