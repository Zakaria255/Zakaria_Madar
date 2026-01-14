"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the Project interface here or import it if I exported it from portfolio.ts (I didn't export the type there, so I'll define a compatible one or just use 'any' for now, but better to be typed)
// To keep it clean, I'll infer the type from the props or define it locally.
interface Project {
    id: string;
    title: string;
    category: string;
    overview: string;
    objectives: string[];
    scope: string;
    features: string[];
    technologies: string[];
    results: string;
    image?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="w-full max-w-4xl max-h-[90vh] bg-card border shadow-2xl rounded-xl pointer-events-auto flex flex-col overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b shrink-0">
                                <div>
                                    <Badge variant="secondary" className="mb-2">
                                        {project.category}
                                    </Badge>
                                    <h2 className="text-2xl font-bold font-heading">{project.title}</h2>
                                </div>
                                <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0 rounded-full hover:bg-muted">
                                    <X className="w-5 h-5" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </div>

                            {/* Scrollable Content */}
                            <ScrollArea className="flex-1">
                                <div className="p-6 space-y-8">
                                    {/* Overview */}
                                    <section>
                                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                            <Layers className="w-5 h-5 text-primary" />
                                            Overview
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.overview}
                                        </p>
                                    </section>

                                    {/* Two Column Layout for Objectives & Scope */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <section>
                                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                Key Objectives
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.objectives.map((obj, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        {obj}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                                <ArrowRight className="w-5 h-5 text-primary" />
                                                Scope of Work
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {project.scope}
                                            </p>
                                        </section>
                                    </div>

                                    {/* Features */}
                                    <section className="bg-muted/30 p-4 rounded-lg border">
                                        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {project.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Results */}
                                    <section>
                                        <h3 className="text-lg font-semibold mb-3">Results & Impact</h3>
                                        <p className="text-muted-foreground border-l-4 border-primary pl-4 italic">
                                            "{project.results}"
                                        </p>
                                    </section>

                                    {/* Technologies */}
                                    <section>
                                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                            <Code className="w-5 h-5 text-primary" />
                                            Technology Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline" className="px-3 py-1">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </ScrollArea>

                            {/* Footer - Optional Call to Action or Just Padding */}
                            <div className="p-4 border-t bg-muted/20 shrink-0 flex justify-end">
                                <Button onClick={onClose}>
                                    Close Details
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
