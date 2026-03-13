import { Spinner } from "@/components/ui/spinner";

export const AuthLoadingView = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/60 blur-[100px] opacity-100 mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-ring/40 blur-[100px] opacity-80 md:opacity-100" />

                <div className="absolute inset-0 bg-background/60 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Spinner className="size-6 text-ring" />
            </div>
        </div>
    );
};