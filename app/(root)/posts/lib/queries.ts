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
            votes: true,
        },
    });
    return response;
};

// if you want to use revalidateTag
// export const getPosts = async () => {
//     "use cache"
//      cacheLife("days")
//      cacheTag("namecache")
//     const response = await prisma.post.findMany({
//         take: 10,
//         orderBy: {
//             id: "desc",
//         },
//         select: {
//             id: true,
//             title: true,
//         },
//     });
//     return response;
// };
