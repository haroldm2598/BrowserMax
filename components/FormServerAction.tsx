import { createPost } from "@/app/(root)/posts/lib/action";
import { Button } from "./ui/button";

function FormServerAction() {
    return (
        <section className="space-y-4 border-t border-zinc-400 pt-6">
            <h1 className="text-xl font-semibold text-zinc-950">
                Form Section
            </h1>
            <form action={createPost} className="space-y-4">
                <input
                    name="title"
                    placeholder="Title"
                    required
                    className="w-full rounded-md border p-2"
                />

                <textarea
                    name="content"
                    placeholder="Content"
                    required
                    rows={5}
                    className="w-full rounded-md border p-2"
                />

                <Button type="submit">Create Post</Button>
            </form>
        </section>
    );
}

export default FormServerAction;
