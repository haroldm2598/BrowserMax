import { Suspense } from "react";
import Link from "next/link";

import RecentlyViewed from "@/components/RecentlyViewed";
import { Skeleton } from "@/components/ui/skeleton";

import FormServerAction from "@/components/FormServerAction";
import { getPosts } from "./lib/queries";
import BtnUpVotes from "@/components/btn-upvotes";
import ServerUpvotes from "@/components/serverUpvotes";

// may ganito meaning yung page na to is SSR by default purpose alternative para sa cache : "no-store" sa response
export const dynamic = "force-dynamic";

async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    Posts
                </h1>

                <ul className="space-y-3">
                    {posts.map(({ id, title, votes }) => (
                        <li key={id}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={`/posts/${id}`}
                                    className="text-lg font-medium text-zinc-950 hover:text-zinc-700 sm:text-xl"
                                >
                                    {title.charAt(0).toUpperCase() +
                                        title.slice(1)}
                                </Link>

                                <ServerUpvotes PostId={id} votes={votes} />
                            </div>
                        </li>
                    ))}
                </ul>

                <Suspense
                    fallback={<Skeleton className="h-8 w-96 rounded-md" />}
                >
                    <RecentlyViewed />
                </Suspense>

                <section className="space-y-4 border-t border-zinc-200 pt-6">
                    <FormServerAction />
                </section>

                <BtnUpVotes />
            </section>
        </div>
    );
}

export default PostsPage;
