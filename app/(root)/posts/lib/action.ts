// using server action opposite from route api handler
"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
    const title = String(formData.get("title") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();

    if (!title || !content) return;

    await prisma.post.create({
        data: {
            title,
            content,
        },
    });

    revalidatePath("/posts");
    // if you want to use cache in ./lib/queries.ts much as possible use revalidateTag("namecache")
};
