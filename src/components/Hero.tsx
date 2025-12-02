import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="px-4 mx-auto max-w-7xl text-center relative z-10">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
                    <span className="w-2 h-2 mr-2 bg-brand-accent rounded-full animate-pulse"></span>
                    Admissions Open for 2025 Batch
                </div>
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-8xl text-white">
                    Don't Just Buy Projects. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-400 text-glow">
                        Build Your Career.
                    </span>
                </h1>
                <p className="mb-8 text-lg font-normal text-brand-dim lg:text-xl sm:px-16 lg:px-48">
                    InnovSpark Labs bridges the gap between College Theory and Industry Innovation. We provide
                    hands-on training, IoT hardware support, and 100% Viva guidance.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link
                        href="/projects"
                        className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-white rounded-lg bg-brand-accent hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105"
                    >
                        Explore Projects
                        <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                    <Link
                        href="/free-consultation"
                        className="inline-flex justify-center items-center py-4 px-8 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-700 transition-all"
                    >
                        Free Consultation
                    </Link>
                    <a
                        href="https://wa.me/916361082605?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20know%20more."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg hover:bg-[#25D366]/20 transition-all"
                    >
                        <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-sm text-brand-dim">
                    Trusted by students from top colleges in Karnataka
                </div>
            </div>
        </section>
    );
}
