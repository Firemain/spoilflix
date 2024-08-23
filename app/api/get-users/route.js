import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Récupère tous les utilisateurs
    const result = await sql`
      SELECT id, username, email, created_at FROM users;
    `;
    return NextResponse.json({ users: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
