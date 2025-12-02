import React from "react";

interface FeatureCardProps {
    title: string;
    description?: string;
    icon?: string;
    items?: string[];
    className?: string;
}

export default function FeatureCard({ title, description, icon, items, className = "" }: FeatureCardProps) {
    return (
        <div className={`glass-card p-6 rounded-xl hover:border-brand-accent/50 transition-all group ${className}`}>
            {icon && (
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className={`${icon} text-2xl text-brand-accent`}></i>
                </div>
            )}
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            {description && <p className="text-brand-dim mb-4 text-sm">{description}</p>}
            {items && items.length > 0 && (
                <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-brand-dim">
                            <i className="fa-solid fa-check text-brand-accent mt-1 mr-2 text-xs"></i>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
