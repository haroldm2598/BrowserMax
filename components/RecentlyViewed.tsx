import { cookies } from "next/headers";

async function RecentlyViewed() {
    // verification is the suspense is working
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cookiesStore = await cookies();

    return (
        <h1 className="text-lg font-medium text-zinc-950">RecentlyViewed</h1>
    );
}

export default RecentlyViewed;
