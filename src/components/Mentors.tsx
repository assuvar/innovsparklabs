export default function Mentors() {
    return (
        <section id="mentors" className="py-20 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Meet The <span className="text-brand-accent">Founders</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mentor 1 */}
                    <div className="glass-card rounded-xl p-6 hover:bg-brand-primary/50 transition-colors">
                        <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden border-2 border-brand-accent">
                            {/* Placeholder for Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mahesh"
                                alt="Maheshwaran"
                                className="w-full h-full"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white">Maheshwaran</h3>
                        <p className="text-brand-accent text-sm font-semibold mb-2">Technical Lead & Partner</p>
                        <p className="text-brand-dim text-sm">
                            Expert in Educational Technology solutions and Student Training.
                        </p>
                    </div>

                    {/* Mentor 2 */}
                    <div className="glass-card rounded-xl p-6 hover:bg-brand-primary/50 transition-colors">
                        <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden border-2 border-brand-accent">
                            {/* Placeholder for Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneesh"
                                alt="Aneesh"
                                className="w-full h-full"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white">Aneesh</h3>
                        <p className="text-brand-accent text-sm font-semibold mb-2">
                            Operations & Execution Partner
                        </p>
                        <p className="text-brand-dim text-sm">
                            Specialist in Project Building, Operations, and Client Acquisition.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
