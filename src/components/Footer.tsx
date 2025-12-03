import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                        <div className="h-20 w-auto relative aspect-[3/1]">
                            <Image
                                src="/assets/logo.svg"
                                alt="InnovSpark Labs Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                    <p className="text-brand-dim max-w-sm">
                        Empowering students with practical tech skills and innovative project solutions. From idea
                        to execution.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-brand-dim">
                        <li>
                            <Link href="/courses" className="hover:text-brand-accent">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-brand-accent">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/workshops" className="hover:text-brand-accent">
                                Workshops
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-brand-accent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <ul className="space-y-2 text-brand-dim">
                        <li>
                            <i className="fa-solid fa-phone mr-2 text-brand-accent"></i> +91 63610 82605
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope mr-2 text-brand-accent"></i>{" "}
                            contact@innovsparklabs.com
                        </li>
                        <li>
                            <i className="fa-solid fa-location-dot mr-2 text-brand-accent"></i> Karnataka, India
                        </li>
                    </ul>
                    <a
                        href="https://wa.me/916361082605?text=Hi%2C%20I%20have%20a%20query."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center px-4 py-2 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-colors"
                    >
                        <i className="fa-brands fa-whatsapp mr-2"></i>
                        Chat with Us
                    </a>
                </div>
            </div>
            <div className="text-center text-brand-dim mt-12 pt-8 border-t border-gray-800 text-sm">
                © 2025 InnovSpark Labs. All rights reserved.
            </div>
        </footer>
    );
}
