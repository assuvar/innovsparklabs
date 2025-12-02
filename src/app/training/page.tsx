import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import ReferralPromoCard from "@/components/ReferralPromoCard";
import OutcomeSection from "@/components/OutcomeSection";

export default function TrainingPage() {
    const modules = [
        { title: "App Development", icon: "fa-solid fa-mobile" },
        { title: "Web Development", icon: "fa-solid fa-globe" },
        { title: "IoT / Robotics", icon: "fa-solid fa-robot" },
        { title: "AI / ML", icon: "fa-solid fa-brain" },
        { title: "Data Science", icon: "fa-solid fa-chart-line" },
    ];

    const features = [
        "Live coding sessions",
        "Trainer-led instruction",
        "Practical project build-along",
        "Offline / Online options",
        "Industry Certification",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Hands-On"
                highlight="Training"
                subtitle="Real Skills. Real Projects. Learn by doing with our expert-led training programs."
            />

            <OutcomeSection
                title="Transform Your Career"
                subtitle="Our training programs are designed to bridge the gap between academic theory and industry requirements."
                features={[
                    {
                        icon: "fa-solid fa-briefcase",
                        title: "Job-Ready Skills",
                        description: "Learn technologies that are currently in high demand in the industry.",
                        color: "bg-blue-500"
                    },
                    {
                        icon: "fa-solid fa-certificate",
                        title: "Industry Certification",
                        description: "Earn a verified certificate upon completion to boost your resume.",
                        color: "bg-green-500"
                    },
                    {
                        icon: "fa-solid fa-laptop-code",
                        title: "Hands-on Practice",
                        description: "80% practical sessions. Build real-world applications from scratch.",
                        color: "bg-purple-500"
                    },
                    {
                        icon: "fa-solid fa-user-tie",
                        title: "Expert Mentorship",
                        description: "Learn directly from industry professionals with years of experience.",
                        color: "bg-orange-500"
                    }
                ]}
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {modules.map((mod, index) => (
                        <FeatureCard
                            key={index}
                            title={mod.title}
                            icon={mod.icon}
                            className="text-center"
                        />
                    ))}
                </div>

                <div className="bg-gradient-to-br from-brand-primary to-brand-dark p-10 rounded-2xl border border-brand-accent/20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-10">
                        Training <span className="text-brand-accent">Highlights</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                                    <i className="fa-solid fa-check text-brand-accent"></i>
                                </div>
                                <span className="text-lg text-brand-light font-medium">{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReferralPromoCard />
        </main>
    );
}
