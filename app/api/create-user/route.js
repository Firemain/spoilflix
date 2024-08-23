import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      throw new Error('Username, email, and password are required');
    }

    const result = await sql`
      INSERT INTO users (id, username, email, password_hash)
      VALUES (uuid_generate_v4(), ${username}, ${email}, ${password})
      RETURNING id;
    `;

    const userId = result.rows[0].id;

    return NextResponse.json({ message: 'User created successfully', userId }, { status: 201 });
  } catch (error) {
    if (error.message.includes('duplicate key value violates unique constraint')) {
      if (error.message.includes('users_email_key')) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
      }
      if (error.message.includes('users_username_key')) {
        return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
      }
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
