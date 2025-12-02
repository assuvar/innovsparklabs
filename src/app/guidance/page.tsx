import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function GuidancePage() {
    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Project"
                highlight="Guidance"
                subtitle="Get 1-on-1 mentoring from industry experts to build your dream project."
            />

            <section className="py-20 px-4 max-w-4xl mx-auto text-center">
                <div className="glass-card p-10 rounded-2xl">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Personalized <span className="text-brand-accent">Mentorship</span>
                    </h2>
                    <p className="text-xl text-brand-dim mb-10">
                        Stuck with an idea? Need help debugging? Our experts are here to guide you through every step of your project journey.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                        <div className="p-4 bg-brand-primary/50 rounded-lg">
                            <h3 className="font-bold text-white mb-2">Idea Validation</h3>
                            <p className="text-sm text-brand-dim">Check if your project idea is viable and innovative.</p>
                        </div>
                        <div className="p-4 bg-brand-primary/50 rounded-lg">
                            <h3 className="font-bold text-white mb-2">Tech Stack</h3>
                            <p className="text-sm text-brand-dim">Select the best technologies for your requirements.</p>
                        </div>
                        <div className="p-4 bg-brand-primary/50 rounded-lg">
                            <h3 className="font-bold text-white mb-2">Debugging</h3>
                            <p className="text-sm text-brand-dim">Get expert help to fix errors and optimize code.</p>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-accent rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
                    >
                        Request Mentorship
                    </Link>
                </div>
            </section>
        </main>
    );
}
