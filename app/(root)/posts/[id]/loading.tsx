import { Skeleton } from "@/components/ui/skeleton";

function loading() {
    return (
        <div>
            <Skeleton className="h-8 w-96 rounded-md" />
        </div>
    );
}

export default loading;
