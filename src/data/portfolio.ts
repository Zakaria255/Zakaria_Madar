export const portfolioData = {
    personal: {
        name: "Eng. Zakaria Madar",
        title: "Odoo Functional Consultant | Senior Web Developer | Digital Communication & Web Manager",
        email: "sakicade41@gmail.com",
        location: "Mogadishu, Somalia",
        summary: "Odoo Functional Certified Consultant with hands-on experience delivering 12+ Odoo projects across 6 companies. Expert in system operations, digital workflows, and business process optimization. Senior Web Developer specializing in scalable, SEO-optimized, and performance-driven web solutions.",
    },
    experience: [
        {
            role: "Operations Manager & Odoo Implementor",
            company: "Taagerso Technology LTD",
            period: "Present",
            description: [
                "Leading day-to-day operational activities and digital workflows across the organization.",
                "Acting as a core Odoo Implementor, responsible for system setup, configuration, and optimization.",
                "Supporting business process automation using Odoo modules including Sales, CRM, Accounting, Inventory, and Project Management.",
                "Collaborating with technical and non-technical teams to ensure smooth system adoption and operational efficiency."
            ],
        },
        {
            role: "Digital Communication & Web Manager",
            company: "HornReport.org",
            period: "Previous – Ongoing",
            description: [
                "Managing the overall website architecture, maintenance, and performance.",
                "Leading digital communication strategy, content publishing workflows, and online presence.",
                "Implementing SEO best practices to improve visibility, performance, and reach.",
                "Ensuring consistency between editorial content, digital platforms, and brand identity."
            ],
        },
        {
            role: "Senior Web Developer",
            company: "Freelance / Agency",
            period: "Ongoing",
            description: [
                "Designing and developing scalable, SEO-optimized, and performance-driven websites.",
                "Building modern web solutions using Next.js, WordPress, and related technologies.",
                "Working with agencies and clients to deliver clean UI, responsive layouts, and maintainable codebases.",
                "Providing technical consultation, performance optimization, and long-term support."
            ],
        }
    ],
    skills: {
        technical: [
            "Odoo Functional Consulting (Sales, CRM, Accounting, Inventory, HR, Project, Website, Studio)",
            "Odoo System Implementation & Company Setup",
            "Business Process Mapping & Automation",
            "Web Development (Next.js, React, WordPress)",
            "SEO & Performance Optimization",
            "Web Design (Professional UI/UX)",
            "CMS & Enterprise Systems Integration",
        ],
        soft: [
            "Strong Team Player & Collaborative Mindset",
            "Excellent Time Management & Task Prioritization",
            "High Sense of Responsibility & Ownership",
            "Clear Communication & Stakeholder Engagement",
            "Continuous Learner & Growth-Oriented Professional",
        ]
    },
    coreValues: [
        {
            title: "Client-Centric Mindset",
            description: "Focused on understanding client needs and delivering solutions that create real business value, not just technical outputs.",
            icon: "Target"
        },
        {
            title: "Clean & Maintainable Systems",
            description: "I prioritize structured, scalable, and well-documented solutions—whether in Odoo implementations or web applications.",
            icon: "Layers"
        },
        {
            title: "Process Automation & Efficiency",
            description: "Strong belief in using technology to automate workflows, reduce manual effort, and improve operational efficiency.",
            icon: "Settings"
        },
        {
            title: "Continuous Learning & Growth",
            description: "Committed to ongoing professional development, staying updated with evolving technologies, and refining my expertise.",
            icon: "BookOpen"
        }
    ],
    projects: [
        {
            id: "odoo-erp",
            title: "Odoo ERP Implementation",
            category: "Odoo / ERP",
            overview: "A comprehensive Odoo V17 implementation for a large-scale manufacturing firm. The project aimed to digitize the entire supply chain, from raw material procurement to final product delivery and accounting.",
            objectives: [
                "Eliminate manual spreadsheet tracking.",
                "Real-time inventory visibility across multiple warehouses.",
                "Automated financial reporting and cost analysis.",
                "Streamlined sales and purchase approvals."
            ],
            scope: "Full system configuration, custom module development for specific manufacturing workflows, data migration from legacy systems, and staff training.",
            features: [
                "Multi-warehouse Inventory Management",
                "Automated Manufacturing Orders (BOM)",
                "Integrated Accounting & Invoicing",
                "Custom Reporting Dashboard"
            ],
            technologies: ["Odoo 17", "Python", "PostgreSQL", "XML", "Ubuntu"],
            results: "achieved a 30% increase in operational efficiency and reduced inventory discrepancies by 95% within the first quarter.",
            image: "odoo-project.jpg"
        },
        {
            id: "taagerso-platform",
            title: "Taagerso Digital Platform",
            category: "Web Development / Operations",
            overview: "Currently serving as the digital backbone for Taagerso Technology. This platform integrates e-commerce capabilities with internal operational workflows, ensuring a seamless bridge between front-end sales and back-end logistics.",
            objectives: [
                "Create a centralized hub for digital operations.",
                "Improve customer engagement through a responsive UI.",
                "Automate internal task assignments based on orders."
            ],
            scope: "End-to-end development of the web platform, API integration with third-party logistics providers, and internal dashboard creation.",
            features: [
                "Real-time Order Tracking",
                "Dynamic Content Management",
                "Role-based Access Control",
                "Automated Email Notifications"
            ],
            technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST API"],
            results: "Processed over 500+ monthly orders with zero downtime and improved team collaboration scores by 40%.",
            image: "taagerso.jpg"
        },
        {
            id: "hornreport-news",
            title: "HornReport News Portal",
            category: "Web & Content Strategy",
            overview: "A high-traffic news portal designed for speed, accessibility, and SEO dominance. The project focused on delivering content rapidly to a global audience while maintaining a high standard of editorial integrity.",
            objectives: [
                "Achieve <1s page load times on mobile.",
                "Implement robust SEO structure for Google News compliance.",
                "Secure and scalable infrastructure for traffic spikes."
            ],
            scope: "Architecture design, CMS configuration, frontend development using modern web technologies, and ongoing server maintenance.",
            features: [
                "Server-side Rendering (SSR) for SEO",
                "AMP (Accelerated Mobile Pages) Support",
                "AdSense & Analytics Integration",
                "Automated Social Media Sharing"
            ],
            technologies: ["Next.js", "Vercel", "Google Analytics", "SEO Implementation", "CMS"],
            results: "Grew monthly active users to 50k+ and consistently ranked on the first page of search results for key regional topics.",
            image: "hornreport.jpg"
        }
    ]
};
