import { getSession } from 'auth-astro/server';

export async function authMiddleware({ request }) {
  const session = await getSession(request);
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }
  return null;
}