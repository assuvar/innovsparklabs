import Link from "next/link";

export default function Offerings() {
    return (
        <section id="projects" className="py-20 bg-brand-primary/30">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Our Core <span className="text-brand-accent">Programs</span>
                </h2>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {/* Large Item: Projects */}
                    <div className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
                            alt="Hardware"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="relative z-10">
                            <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                                MOST POPULAR
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2">Final Year Projects</h3>
                            <p className="text-brand-light mb-4">
                                IoT, Embedded Systems, and Robotics projects with full hardware kits and sensor
                                integration.
                            </p>
                            <ul className="text-brand-dim text-sm mb-6 space-y-2">
                                <li>
                                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Working Hardware Models
                                </li>
                                <li>
                                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Python/C++ Codebase
                                </li>
                                <li>
                                    <i className="fa-solid fa-check text-green-500 mr-2"></i> IEEE 2024 Titles
                                </li>
                            </ul>
                            {/* CHANGED: Replaced button with link to projects page */}
                            <Link
                                href="/projects"
                                className="inline-block text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg backdrop-blur-sm transition-all hover:scale-105"
                            >
                                View Project List <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Medium Item: Data Science */}
                    <Link href="/projects" className="col-span-1 md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-brand-accent/50 transition-all">
                        <div className="absolute right-0 bottom-0 opacity-20 text-9xl text-blue-500 -mr-10 -mb-10">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Data Science & AI</h3>
                        <p className="text-brand-dim">
                            Machine Learning models using Python. Predictive analysis, Image Processing, and NLP
                            projects.
                        </p>
                    </Link>

                    {/* Small Item: Training */}
                    <Link href="/workshops" className="col-span-1 glass-card rounded-2xl p-6 flex flex-col justify-center border-l-4 border-brand-accent hover:bg-brand-primary/50 transition-all">
                        <h3 className="text-xl font-bold text-white mb-1">Workshops</h3>
                        <p className="text-sm text-brand-dim">For Colleges & Departments.</p>
                    </Link>

                    {/* Small Item: Consultation */}
                    <Link href="/guidance" className="col-span-1 glass-card rounded-2xl p-6 flex flex-col justify-center border-l-4 border-blue-500 hover:bg-brand-primary/50 transition-all">
                        <h3 className="text-xl font-bold text-white mb-1">1:1 Mentorship</h3>
                        <p className="text-sm text-brand-dim">Project Guidance.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
