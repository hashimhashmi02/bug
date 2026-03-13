"use client";

import { Poppins } from "next/font/google";
import { SparkleIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

import { ProjectsList } from "./projects-list";
import { ProjectsCommandDialog } from "./projects-command-dialog";
import { ImportGithubDialog } from "./import-github-dialog";
import { NewProjectDialog } from "./new-project-dialog";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export const ProjectsView = () => {
    const [commandDialogOpen, setCommandDialogOpen] = useState(false);
    const [importDialogOpen, setImportDialogOpen] = useState(false);
    const [newProjectDialogOpen, setNewProjectDialogOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey) {
                if (e.key === "k") {
                    e.preventDefault();
                    setCommandDialogOpen(true);
                }
                if (e.key === "i") {
                    e.preventDefault();
                    setImportDialogOpen(true);
                }
                if (e.key === "j") {
                    e.preventDefault();
                    setNewProjectDialogOpen(true);
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <>
            <ProjectsCommandDialog
                open={commandDialogOpen}
                onOpenChange={setCommandDialogOpen}
            />
            <ImportGithubDialog
                open={importDialogOpen}
                onOpenChange={setImportDialogOpen}
            />
            <NewProjectDialog
                open={newProjectDialogOpen}
                onOpenChange={setNewProjectDialogOpen}
            />
            <div className="min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16 relative overflow-hidden">

                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-sidebar" />

                    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/60 blur-[100px] opacity-100 mix-blend-screen" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-ring/40 blur-[100px] opacity-80 md:opacity-100" />
                    <div className="absolute inset-0 bg-sidebar/60 backdrop-blur-3xl" />
                    <div className="absolute inset-0 bg-linear-to-t from-sidebar/80 to-transparent" />
                </div>

                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                    <UserButton />
                </div>
                <div className="w-full max-w-sm mx-auto flex flex-col gap-4 items-center z-10 relative">

                    <div className="flex justify-between gap-4 w-full items-center">

                        <div className="flex items-center gap-2 w-full group/logo">
                            <img src="/logo.svg" alt="bug" className="size-[32px] md:size-[46px]" />
                            <h1 className={cn(
                                "text-4xl md:text-5xl font-semibold",
                                font.className,
                            )}>
                                bug
                            </h1>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <div className="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setNewProjectDialogOpen(true)}
                                className="h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <SparkleIcon className="size-4" />
                                    <Kbd className="bg-accent border">
                                        ⌘J/Ctrl+J
                                    </Kbd>
                                </div>
                                <div>
                                    <span className="text-sm">
                                        New
                                    </span>
                                </div>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setImportDialogOpen(true)}
                                className="h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <FaGithub className="size-4" />
                                    <Kbd className="bg-accent border">
                                        ⌘I/Ctrl+I
                                    </Kbd>
                                </div>
                                <div>
                                    <span className="text-sm">
                                        Import
                                    </span>
                                </div>
                            </Button>
                        </div>

                        <ProjectsList onViewAll={() => setCommandDialogOpen(true)} />

                    </div>

                </div>
            </div>
        </>
    );
};