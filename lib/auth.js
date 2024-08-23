import { Lucia } from 'lucia';
import { PostgresJsAdapter } from "@lucia-auth/adapter-postgresql";
import { db } from '@vercel/postgres'; // Use 'neonSql' as alias to avoid confusion
import { cookies } from 'next/headers';

const adapter = new PostgresJsAdapter(db, {
    user: "users",
    session: "user_session"
});

const lucia = new Lucia(adapter,{
    sessionCookie: {
        expires:false,
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    }
});

export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name, 
        sessionCookie.value, 
        sessionCookie.attributes);
}