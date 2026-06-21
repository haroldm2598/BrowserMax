import prisma from "@/lib/prisma";

export const getPosts = async () => {
    const response = await prisma.post.findMany({
        take: 10,
        orderBy: {
            id: "desc",
        },
        select: {
            id: true,
            title: true,
        },
    });
    return response;
};
