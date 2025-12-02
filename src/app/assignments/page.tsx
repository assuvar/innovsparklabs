import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import ReferralPromoCard from "@/components/ReferralPromoCard";
import OutcomeSection from "@/components/OutcomeSection";

export default function AssignmentsPage() {
    const tasks = [
        "Coding Assignments",
        "Lab Exercises",
        "Python Notebooks",
        "Case Studies",
        "Report Writing",
        "PPT Preparation",
        "Mini Projects for Class Submission",
    ];

    const deliveryOptions = [
        { title: "Same-day Delivery", icon: "fa-solid fa-bolt", color: "text-yellow-400" },
        { title: "24 Hour Delivery", icon: "fa-solid fa-clock", color: "text-blue-400" },
        { title: "Express Delivery", icon: "fa-solid fa-truck-fast", color: "text-green-400" },
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Academic Tasks"
                highlight="We Handle"
                subtitle="Stuck with assignments? We provide high-quality, plagiarism-free solutions for your academic needs."
            />

            <OutcomeSection
                title="Academic Excellence"
                subtitle="High-quality, plagiarism-free solutions delivered on time to help you secure top grades."
                features={[
                    {
                        icon: "fa-solid fa-check-to-slot",
                        title: "Plagiarism-Free",
                        description: "100% original content written from scratch. We provide a plagiarism report on request.",
                        color: "bg-blue-500"
                    },
                    {
                        icon: "fa-solid fa-clock",
                        title: "On-Time Delivery",
                        description: "We respect deadlines. Get your assignments delivered well before the submission date.",
                        color: "bg-green-500"
                    },
                    {
                        icon: "fa-solid fa-file-pen",
                        title: "Quality Writing",
                        description: "Well-researched and professionally written content that meets academic standards.",
                        color: "bg-purple-500"
                    },
                    {
                        icon: "fa-solid fa-user-secret",
                        title: "Confidentiality",
                        description: "Your data and identity are safe with us. We never share your details with anyone.",
                        color: "bg-orange-500"
                    }
                ]}
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">
                            What We <span className="text-brand-accent">Cover</span>
                        </h2>
                        <div className="grid gap-4">
                            {tasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 rounded-lg flex items-center space-x-4"
                                >
                                    <i className="fa-solid fa-check text-brand-accent"></i>
                                    <span className="text-lg text-brand-light">{task}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Delivery <span className="text-brand-accent">Options</span>
                        </h2>
                        {deliveryOptions.map((opt, index) => (
                            <div
                                key={index}
                                className="bg-brand-primary/50 p-6 rounded-xl border border-white/5 flex items-center space-x-6"
                            >
                                <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl ${opt.color}`}>
                                    <i className={opt.icon}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{opt.title}</h3>
                                    <p className="text-brand-dim text-sm">Get your work done on time, every time.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReferralPromoCard />
        </main>
    );
}
