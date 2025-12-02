export default function Marquee() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-primary/50 border-y border-white/5 py-4">
            <div className="flex animate-marquee whitespace-nowrap">
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-python mr-2"></i> Python
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-microchip mr-2"></i> IoT
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-robot mr-2"></i> Machine Learning
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-react mr-2"></i> React
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-database mr-2"></i> Data Science
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-aws mr-2"></i> Cloud
                </span>
                {/* Duplicate for seamless loop */}
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-python mr-2"></i> Python
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-microchip mr-2"></i> IoT
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-robot mr-2"></i> Machine Learning
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-react mr-2"></i> React
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fas fa-database mr-2"></i> Data Science
                </span>
                <span className="mx-8 text-2xl font-bold text-gray-500 flex items-center">
                    <i className="fab fa-aws mr-2"></i> Cloud
                </span>
            </div>
        </div>
    );
}
