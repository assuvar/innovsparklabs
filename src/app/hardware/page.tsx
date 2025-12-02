import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";

export default function HardwarePage() {
    const platforms = [
        { title: "Arduino", icon: "fa-solid fa-microchip" },
        { title: "ESP32", icon: "fa-solid fa-wifi" },
        { title: "Raspberry Pi", icon: "fa-brands fa-raspberry-pi" },
        { title: "Robotics", icon: "fa-solid fa-robot" },
        { title: "PCB-based systems", icon: "fa-solid fa-circuit-board" },
        { title: "GSM/GPS Modules", icon: "fa-solid fa-satellite-dish" },
        { title: "Sensors & IoT Kits", icon: "fa-solid fa-temperature-high" },
    ];

    const inclusions = [
        "Complete circuits",
        "Source Code",
        "Demo video",
        "Project explanation",
    ];

    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Electronics &"
                highlight="Embedded"
                subtitle="We build custom hardware projects with complete circuit design and sensor integration."
            />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {platforms.map((p, index) => (
                        <FeatureCard
                            key={index}
                            title={p.title}
                            icon={p.icon}
                            className="text-center"
                        />
                    ))}
                </div>

                <div className="bg-brand-primary/30 rounded-2xl p-8 md:p-12 border border-white/5 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        What You <span className="text-brand-accent">Get</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {inclusions.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-4 bg-brand-dark rounded-xl border border-brand-accent/10"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span className="text-xl font-bold text-white">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
