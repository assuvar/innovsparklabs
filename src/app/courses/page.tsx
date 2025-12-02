import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";

export default function CoursesPage() {
    const categories = [
        {
            title: "Programming Courses",
            icon: "fa-solid fa-code",
            items: [
                "Python Fundamentals",
                "Java Crash Course",
                "C/C++ Mastery Bootcamp",
                "Web Development (HTML, CSS, JS)",
                "Node.js Fast Track",
                "React.js for Students",
                "Android App Development Basics",
            ],
        },
        {
            title: "AI / Machine Learning",
            icon: "fa-solid fa-brain",
            items: [
                "Machine Learning Essentials",
                "Deep Learning with Hands-on Labs",
                "Data Science Zero-to-Hero",
                "TensorFlow Crash Course",
                "AI-based Project Implementation",
            ],
        },
        {
            title: "Cloud / DevOps",
            icon: "fa-solid fa-cloud",
            items: [
                "AWS Beginner Labs",
                "Docker & Kubernetes Basics",
                "Git & GitHub Masterclass",
                "CI/CD Foundations",
            ],
        },
        {
            title: "IoT / Embedded",
            icon: "fa-solid fa-microchip",
            items: [
                "Arduino Starter Course",
                "ESP32 Programming",
                "Raspberry Pi Mini Course",
                "IoT Cloud Connectivity Basics",
            ],
        },
    ];

    const inclusions = [
        "Certificate",
        "Project file",
        "Training notes",
        "Sample code",
        "Doubt-clearing session",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Courses We"
                highlight="Offer"
                subtitle="Short-term, outcome-driven programs designed specifically for college students who need fast project mastery, quick learning, and practical implementations."
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-20">
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

                <div className="bg-brand-primary/30 rounded-2xl p-8 md:p-12 border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Every Course <span className="text-brand-accent">Includes</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {inclusions.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 bg-brand-dark px-6 py-3 rounded-full border border-brand-accent/20"
                            >
                                <i className="fa-solid fa-check-circle text-brand-accent"></i>
                                <span className="text-brand-light font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
