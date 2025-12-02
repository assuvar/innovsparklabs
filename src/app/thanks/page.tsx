import Link from "next/link";

export default function ThanksPage() {
    return (
        <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-brand-primary border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fa-solid fa-check text-4xl text-green-500"></i>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
                <p className="text-brand-dim mb-8">
                    Your enquiry has been received. Our team will contact you shortly to schedule your free consultation.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl transition-colors"
                    >
                        Back to Home
                    </Link>

                    <a
                        href="https://wa.me/916361082605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 font-bold rounded-xl transition-colors"
                    >
                        <i className="fa-brands fa-whatsapp mr-2"></i>
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
