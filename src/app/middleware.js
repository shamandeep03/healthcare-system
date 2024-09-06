import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Authentication token missing' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;  // Attach user to request for future use
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  return NextResponse.next();
}

// Apply middleware to specific routes (e.g., /api/patients)
export const config = {
  matcher: ['/api/patients/:path*'],
};
