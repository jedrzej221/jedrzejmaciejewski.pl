import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-24 pb-12 flex flex-col justify-center items-center relative container text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="mb-6 flex justify-center">
                    {/* Placeholder for a personal photo or avatar if available later */}
                    <div className="w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-20 animate-pulse"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 font-serif text-[var(--color-text-main)] leading-tight px-4 md:px-0">
                    Cześć, jestem <span className="text-[var(--color-primary)] relative inline-block whitespace-nowrap">
                        Jędrzej
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[var(--color-secondary)] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-muted)] mb-8 md:mb-10 font-light leading-relaxed px-4 md:px-0">
                    Łączę wiedzę finansową i technologiczną, by tworzyć narzędzia i materiały, które pomogą Ci mądrzej inwestować.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
                    <a href="https://linestack.pl" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center">
                        Akademia Inwestowania
                    </a>
                    <a href="https://alphasnap.pl/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-[var(--color-text-main)] hover:bg-gray-50 transition-all border border-gray-100 text-center">
                        AlphaSnap
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
