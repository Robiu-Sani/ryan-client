import { NextResponse } from 'next/server';
import { verifyToken } from './lib/authMiddleware';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  try {
    verifyToken(token);
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],  // Protect all admin routes
};
