"use client";

interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
}

interface OutcomeSectionProps {
    title: string;
    subtitle: string;
    features: Feature[];
    image?: React.ReactNode; // Optional SVG/Image component
}

export default function OutcomeSection({ title, subtitle, features, image }: OutcomeSectionProps) {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#020617] -z-20"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-brand-dim">Verified Outcomes</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-brand-dim leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group p-6 bg-[#0f172a]/40 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-accent/5"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <i className={`${feature.icon} text-xl ${feature.color.replace('bg-', 'text-').replace('/10', '')}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-brand-dim text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Illustration/Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {image ? (
                            image
                        ) : (
                            // Default Abstract SVG if no image provided
                            <svg viewBox="0 0 400 400" className="w-full max-w-md opacity-80" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.2 }} />
                                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="200" cy="200" r="150" fill="url(#grad1)" />
                                <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" />
                                <rect x="150" y="150" width="100" height="100" rx="20" fill="white" fillOpacity="0.05" transform="rotate(45 200 200)" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
