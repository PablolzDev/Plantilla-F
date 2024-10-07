import NextAuth from 'next-auth';
import options from '../api/auth/[...nextauth]/route';

export const GET = NextAuth(options);
export const POST = NextAuth(options);