import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ConsultationPage() {
    const helpItems = [
        "Best project for their department",
        "Trending topics",
        "High-scoring ideas",
        "Affordable build options",
        "Project timeline planning",
        "Tech stack suggestions",
    ];

    const benefits = [
        { text: "15 min free call", icon: "fa-solid fa-phone" },
        { text: "Project roadmap", icon: "fa-solid fa-map" },
        { text: "Budget estimate", icon: "fa-solid fa-calculator" },
        { text: "Requirements understanding", icon: "fa-solid fa-list-check" },
        { text: "Technology guidance", icon: "fa-solid fa-microchip" },
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Free Project"
                highlight="Consultation"
                subtitle="Confused about your final year project? Let us help you choose the right path."
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            We Help Students <span className="text-brand-accent">Choose</span>
                        </h2>
                        <ul className="space-y-4 mb-8">
                            {helpItems.map((item, index) => (
                                <li key={index} className="flex items-center text-lg text-brand-dim">
                                    <i className="fa-solid fa-circle-check text-brand-accent mr-3"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-accent rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
                        >
                            Book Free Session
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-xl flex items-center space-x-4 hover:border-brand-accent/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                                    <i className={`${benefit.icon} text-xl text-brand-accent`}></i>
                                </div>
                                <span className="text-xl font-bold text-white">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
