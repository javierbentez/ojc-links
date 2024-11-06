// auth.config.ts
import Google from '@auth/core/providers/google'
import { defineConfig } from 'auth-astro'

export default defineConfig({
	providers: [
		Google({
			clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
		}),
	],
})