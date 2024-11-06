import { turso } from '../../tursoClient';
import { authMiddleware } from '../../middleware/auth';

export async function POST({ request }) {
    const authResponse = await authMiddleware({ request });
    if (authResponse) return authResponse;

    const { emoji, title, href, oldHref } = await request.json();
    await turso.execute("UPDATE links SET emoji = ?, title = ?, href = ? WHERE href = ?", [emoji, title, href, oldHref]);
    return new Response(null, { status: 200 });
}