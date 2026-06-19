import { notFound } from "next/navigation";

interface PostIdProps {
    params: Promise<{
        id: string;
    }>;
}

/*
page({params, searchParams}) => pwede rin ganito pero since wala naman searchParams sa url, params lang muna
kung may string instead of id
*/
async function page({ params }: PostIdProps) {
    const { id } = await params;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const post = await response.json();

    if (!post.id) {
        notFound();
    }

    // sample lang to if may preloading ka loading.tsx
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <article className="space-y-6">
            <div className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h1>

                <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
            </div>
        </article>
    );
}

export default page;
