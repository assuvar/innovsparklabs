import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";
import ReferralPromoCard from "@/components/ReferralPromoCard";
import OutcomeSection from "@/components/OutcomeSection";

export default function ProjectsPage() {
    const categories = [
        {
            title: "Software Projects",
            icon: "fa-solid fa-laptop-code",
            items: [
                "Web Applications",
                "Mobile Apps",
                "Desktop Applications",
                "Cloud-based Systems",
                "Automation Tools",
                "AI/ML Projects",
                "Data Science Projects",
            ],
        },
        {
            title: "AI/ML Projects",
            icon: "fa-solid fa-robot",
            items: [
                "Prediction Models",
                "Face Recognition Systems",
                "Chatbots",
                "Recommendation Systems",
                "Image/Video Processing Models",
                "NLP Projects",
                "AI Automation Tools",
            ],
        },
        {
            title: "IoT Projects",
            icon: "fa-solid fa-wifi",
            items: [
                "Smart Home Automation",
                "Smart Agriculture System",
                "Smart Attendance System",
                "Weather Monitoring",
                "IoT-Based Security Systems",
                "Industrial IoT Solutions",
            ],
        },
        {
            title: "Cybersecurity Projects",
            icon: "fa-solid fa-shield-halved",
            items: [
                "Penetration Testing Tools",
                "Encryption/Decryption Systems",
                "Network Security Tools",
                "Vulnerability Scanner",
            ],
        },
        {
            title: "Final Year Capstone",
            icon: "fa-solid fa-graduation-cap",
            items: [
                "B.E / B.Tech",
                "M.E / M.Tech",
                "MCA / MSc / BSc",
                "Polytechnic",
            ],
        },
    ];

    const deliverables = [
        "Full Source Code",
        "Report",
        "PPT",
        "Explanation Video",
        "Viva-Ready Notes",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Student Projects"
                highlight="We Build"
                subtitle="We create custom projects for Engineering, Arts & Science, Diploma, MSc, MCA, BCA, and School STEM learners."
            />

            <OutcomeSection
                title="Why Choose Our Projects?"
                subtitle="We don't just give you code. We give you a complete project experience that guarantees success in your final viva."
                features={[
                    {
                        icon: "fa-solid fa-check-double",
                        title: "100% Viva Success",
                        description: "Our projects are designed to meet university standards. We provide detailed explanations so you can answer any question.",
                        color: "bg-green-500"
                    },
                    {
                        icon: "fa-solid fa-code",
                        title: "Clean Code",
                        description: "Well-structured, commented, and industry-standard code that is easy to understand and modify.",
                        color: "bg-blue-500"
                    },
                    {
                        icon: "fa-solid fa-book-open",
                        title: "Complete Documentation",
                        description: "Get a professional project report, PPT, and synopsis ready for submission.",
                        color: "bg-purple-500"
                    },
                    {
                        icon: "fa-solid fa-headset",
                        title: "Instant Support",
                        description: "Stuck somewhere? Our team is available to help you setup and run the project on your machine.",
                        color: "bg-orange-500"
                    }
                ]}
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {categories.map((cat, index) => (
                        <FeatureCard
                            key={index}
                            title={cat.title}
                            icon={cat.icon}
                            items={cat.items}
                            className="h-full"
                        />
                    ))}
                </div>

                <div className="bg-gradient-to-r from-brand-primary to-brand-dark rounded-2xl p-8 md:p-12 border border-brand-accent/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            What You Will <span className="text-brand-accent">Receive</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-10">
                            {deliverables.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center bg-white/5 w-32 h-32 rounded-xl border border-white/10 hover:border-brand-accent/50 transition-colors"
                                >
                                    <i className="fa-solid fa-box-open text-3xl text-brand-accent mb-3"></i>
                                    <span className="text-brand-light font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-accent rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
                        >
                            Get Your Project Now
                        </Link>
                    </div>
                </div>
            </section>

            <ReferralPromoCard />
        </main>
    );
}
