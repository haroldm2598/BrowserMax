import prisma from "@/lib/prisma";

interface ParamsIdProps {
    params: Promise<{
        id: number;
    }>;
}

export async function GET(request: Request, { params }: ParamsIdProps) {
    const { id } = await params;
    const postId = Number(id);

    if (isNaN(postId)) {
        return Response.json({ error: "Invalid id" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    });

    if (!post) {
        return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json(post);
}

export async function PATCH(request: Request, { params }: ParamsIdProps) {
    const { id } = await params;
    const postId = Number(id);

    if (isNaN(postId)) {
        return Response.json({ error: "Invalid id" }, { status: 400 });
    }
    await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            votes: {
                increment: 1,
            },
        },
    });
}
