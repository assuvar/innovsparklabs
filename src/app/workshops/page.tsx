import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import ReferralPromoCard from "@/components/ReferralPromoCard";
import OutcomeSection from "@/components/OutcomeSection";

export default function WorkshopsPage() {
    const workshops = [
        { title: "IoT Hands-on Workshop", icon: "fa-solid fa-wifi" },
        { title: "AI/ML Project Workshop", icon: "fa-solid fa-brain" },
        { title: "Robotics Workshop", icon: "fa-solid fa-robot" },
        { title: "Web Development Workshop", icon: "fa-solid fa-code" },
        { title: "Android App Development", icon: "fa-brands fa-android" },
        { title: "Ethical Hacking Workshop", icon: "fa-solid fa-user-secret" },
        { title: "Cloud Computing Workshop", icon: "fa-solid fa-cloud" },
    ];

    const inclusions = [
        "Kits & components",
        "Certificates",
        "Practical sessions",
        "Mini project build",
        "Trainer support",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Workshops for"
                highlight="Colleges"
                subtitle="We conduct 1-day to 5-day hands-on workshops across India for Engineering and Science departments."
            />

            <OutcomeSection
                title="Practical Learning Experience"
                subtitle="Workshops that go beyond theory. We bring hardware kits and real-world projects to your college campus."
                features={[
                    {
                        icon: "fa-solid fa-microchip",
                        title: "Hardware Kits Provided",
                        description: "We provide individual kits for IoT and Robotics workshops so every student gets hands-on experience.",
                        color: "bg-blue-500"
                    },
                    {
                        icon: "fa-solid fa-certificate",
                        title: "Verified Certificates",
                        description: "All participants receive a certificate of participation/excellence from InnovSpark Labs.",
                        color: "bg-green-500"
                    },
                    {
                        icon: "fa-solid fa-chalkboard-user",
                        title: "Expert Trainers",
                        description: "Sessions led by industry experts who have built real products in the market.",
                        color: "bg-purple-500"
                    },
                    {
                        icon: "fa-solid fa-rocket",
                        title: "Mini-Project Build",
                        description: "Students will build and demonstrate a working mini-project by the end of the workshop.",
                        color: "bg-orange-500"
                    }
                ]}
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {workshops.map((ws, index) => (
                        <FeatureCard
                            key={index}
                            title={ws.title}
                            icon={ws.icon}
                            className="text-center"
                        />
                    ))}
                </div>

                <div className="bg-brand-primary/30 rounded-2xl p-8 md:p-12 border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Workshop <span className="text-brand-accent">Inclusions</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {inclusions.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 bg-brand-dark rounded-xl border border-brand-accent/10 text-center"
                            >
                                <i className="fa-solid fa-star text-brand-accent mb-2"></i>
                                <span className="text-brand-light font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReferralPromoCard />
        </main>
    );
}
