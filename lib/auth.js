import { lucia } from "lucia";
import { pg } from "@lucia-auth/adapter-postgresql";
import { db } from "@vercel/postgres";

export const auth = lucia({
	adapter: pg(db, {
        
	})
	
});