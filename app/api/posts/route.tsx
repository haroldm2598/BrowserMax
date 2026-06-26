import prisma from "@/lib/prisma";

export async function GET() {
    const post = await prisma.post.findMany();

    return Response.json({ post });
}

export async function POST(request: Request) {
    const { title, content } = await request.json();

    const post = await prisma.post.create({
        data: {
            title,
            content,
        },
    });

    return Response.json({ post });
}
