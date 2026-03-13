
import { ShieldAlertIcon } from "lucide-react";

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const UnauthenticatedView = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/60 blur-[100px] opacity-100 mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-ring/40 blur-[100px] opacity-80 md:opacity-100" />

                <div className="absolute inset-0 bg-background/60 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
            </div>

            <div className="w-full max-w-lg bg-muted relative z-10 rounded-xl shadow-2xl border border-white/5">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlertIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Unauthorized Access</ItemTitle>
                        <ItemDescription>
                            You are not authorized to access this resource.
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <SignInButton>
                            <Button variant="outline" size="sm">
                                Sign in
                            </Button>
                        </SignInButton>
                    </ItemActions>
                </Item>
            </div>
        </div>
    );
};
