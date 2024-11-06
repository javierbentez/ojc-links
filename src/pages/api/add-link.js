import { turso } from '../../tursoClient';
import { authMiddleware } from '../../middleware/auth';

export async function POST({ request }) {
    const authResponse = await authMiddleware({ request });
    if (authResponse) return authResponse;

    const { emoji, title, href } = await request.json();

    // Verificar si el enlace ya existe
    const existingLink = await turso.execute("SELECT href FROM links WHERE href = ?", [href]);
    if (existingLink.rows.length > 0) {
        return new Response('Link already exists', { status: 400 });
    }

    await turso.execute("INSERT INTO links (emoji, title, href) VALUES (?, ?, ?)", [emoji, title, href]);
    return new Response(null, { status: 200 });
}