import { turso } from '../../tursoClient';
import { authMiddleware } from '../../middleware/auth';

export async function POST({ request }) {
    const authResponse = await authMiddleware({ request });
    if (authResponse) return authResponse;

    const { href } = await request.json();
    await turso.execute("DELETE FROM links WHERE href = ?", [href]);
    return new Response(null, { status: 200 });
}