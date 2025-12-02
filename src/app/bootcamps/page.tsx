import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import ReferralPromoCard from "@/components/ReferralPromoCard";
import OutcomeSection from "@/components/OutcomeSection";

export default function BootcampsPage() {
    const bootcamps = [
        { title: "AI Bootcamp", icon: "fa-solid fa-brain" },
        { title: "IoT Bootcamp", icon: "fa-solid fa-wifi" },
        { title: "Python Bootcamp", icon: "fa-brands fa-python" },
        { title: "Web Development", icon: "fa-solid fa-code" },
        { title: "App Development", icon: "fa-solid fa-mobile-screen" },
    ];

    const durations = ["1 Week", "10 Days", "30 Days"];

    const inclusions = [
        "Live Projects",
        "Expert Mentorship",
        "Doubt Sessions",
        "Certification",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Intensive"
                highlight="Bootcamps"
                subtitle="Fast-track your learning with our intensive bootcamps designed for rapid skill acquisition."
            />

            <OutcomeSection
                title="Accelerate Your Growth"
                subtitle="Intensive, focused learning paths designed to take you from zero to hero in record time."
                features={[
                    {
                        icon: "fa-solid fa-gauge-high",
                        title: "Rapid Skill Acquisition",
                        description: "Master complex topics in weeks, not months, with our optimized curriculum.",
                        color: "bg-blue-500"
                    },
                    {
                        icon: "fa-solid fa-folder-open",
                        title: "Portfolio Building",
                        description: "Create a portfolio of real-world projects to showcase to potential employers.",
                        color: "bg-green-500"
                    },
                    {
                        icon: "fa-solid fa-users-viewfinder",
                        title: "Career Guidance",
                        description: "Get resume reviews and mock interview sessions from industry experts.",
                        color: "bg-purple-500"
                    },
                    {
                        icon: "fa-solid fa-network-wired",
                        title: "Networking",
                        description: "Connect with like-minded peers and professionals in our exclusive community.",
                        color: "bg-orange-500"
                    }
                ]}
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {bootcamps.map((bc, index) => (
                        <FeatureCard
                            key={index}
                            title={bc.title}
                            icon={bc.icon}
                            className="text-center"
                        />
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-brand-primary/30 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Duration Options</h3>
                        <div className="flex gap-4">
                            {durations.map((d, index) => (
                                <div key={index} className="px-6 py-3 bg-brand-accent rounded-lg text-white font-bold">
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-primary/30 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                        <ul className="space-y-3">
                            {inclusions.map((item, index) => (
                                <li key={index} className="flex items-center text-brand-dim">
                                    <i className="fa-solid fa-check text-brand-accent mr-3"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <ReferralPromoCard />
        </main>
    );
}
