import PageHeader from "@/components/PageHeader";
import ReferralHero from "@/components/ReferralHero";
import ReferralDashboard from "@/components/ReferralDashboard";

export default function ReferralPage() {
    return (
        <main className="min-h-screen pt-20 pb-32">
            <ReferralHero />
            <ReferralDashboard />

            {/* How it Works Section */}
            <div className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5">
                <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "fa-link",
                            title: "1. Get Your Link",
                            desc: "Generate your unique referral link from the dashboard above. It takes less than 10 seconds."
                        },
                        {
                            icon: "fa-share-nodes",
                            title: "2. Share with Friends",
                            desc: "Share your link via WhatsApp, Telegram, or Email with friends looking for projects or training."
                        },
                        {
                            icon: "fa-wallet",
                            title: "3. Earn Commission",
                            desc: "Track clicks and earn up to 20% commission when your friends join. Withdraw directly to your bank."
                        }
                    ].map((step, idx) => (
                        <div key={idx} className="bg-[#0f172a]/30 border border-white/10 rounded-2xl p-8 text-center hover:bg-[#0f172a]/50 transition-colors group">
                            <div className="w-16 h-16 mx-auto bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className={`fa-solid ${step.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-brand-dim leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
