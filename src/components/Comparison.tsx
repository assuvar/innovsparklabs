export default function Comparison() {
    return (
        <section className="py-20 bg-brand-dark relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Why Choose <span className="text-brand-accent">InnovSpark?</span>
                    </h2>
                    <p className="text-brand-dim text-lg">
                        Stop worrying about Plagiarism and Viva questions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-accent/10 rounded-full group-hover:bg-brand-accent/20 transition-all"></div>
                        <i className="fa-solid fa-file-code text-4xl text-brand-accent mb-6"></i>
                        <h3 className="text-2xl font-bold text-white mb-3">100% Unique Code</h3>
                        <p className="text-brand-dim">
                            We don't sell the same code to everyone. Get GitHub verified, plagiarism-free source
                            code for your final year submission.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                        <i className="fa-solid fa-chalkboard-user text-4xl text-blue-500 mb-6"></i>
                        <h3 className="text-2xl font-bold text-white mb-3">1-on-1 Explanation</h3>
                        <p className="text-brand-dim">
                            We explain every single line of code. You will walk into your Viva exam with full
                            confidence, not just a file.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-all"></div>
                        <i className="fa-solid fa-book-open text-4xl text-green-500 mb-6"></i>
                        <h3 className="text-2xl font-bold text-white mb-3">College Format Reports</h3>
                        <p className="text-brand-dim">
                            IEEE Base Papers, PPTs, and 60-page Documentation formatted exactly according to your
                            college guidelines.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
