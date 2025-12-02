import React from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    highlight?: string;
}

export default function PageHeader({ title, subtitle, highlight }: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {title} <span className="text-brand-accent">{highlight}</span>
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-brand-dim max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
