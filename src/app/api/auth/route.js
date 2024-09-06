import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/db';

export async function POST(request) {
  const { action, ...data } = await request.json();

  await connectToDatabase();

  if (action === 'login') {
    const user = await User.findOne({ email: data.email });
    if (user && bcrypt.compareSync(data.password, user.password)) {
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return NextResponse.json({ token, user });
    }
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } else if (action === 'register') {
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const newUser = await User.create({ ...data, password: hashedPassword });
    return NextResponse.json(newUser);
  }
}
