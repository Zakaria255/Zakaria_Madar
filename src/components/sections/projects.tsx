"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ProjectModal } from "@/components/ui/project-modal";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects demonstrating expertise in Odoo implementation and web solutions.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {project.overview}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full justify-between group"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
