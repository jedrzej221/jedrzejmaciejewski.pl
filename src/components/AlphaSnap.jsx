import { motion } from 'framer-motion';
import { BarChart2, Zap, Layers } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#2A9D8F] mb-3">
            <Icon size={22} />
        </div>
        <h4 className="font-bold text-base mb-1">{title}</h4>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{desc}</p>
    </div>
);

const AlphaSnap = () => {
    return (
        <section id="alphasnap" className="section container py-12 md:py-16 max-w-4xl mx-auto text-center px-4 md:px-6">
            <div className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100">
                <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 block">
                    AlphaSnap Technologies
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif text-[var(--color-text-main)] leading-tight">
                    Upraszczamy finansowy chaos
                </h2>
                <p className="text-[var(--color-text-muted)] mb-8 md:mb-10 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
                    Zarządzam spółką technologiczną AlphaSnap Technologies, która tworzy nowoczesne narzędzia analityczne. Nasze rozwiązania sprawiają, że dane rynkowe stają się przejrzyste.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Feature
                        icon={BarChart2}
                        title="Analityka"
                        desc="Analiza danych w czasie rzeczywistym"
                    />
                    <Feature
                        icon={Zap}
                        title="Szybkość"
                        desc="Błyskawiczne przetwarzanie informacji"
                    />
                    <Feature
                        icon={Layers}
                        title="Przejrzystość"
                        desc="Intuicyjne interfejsy"
                    />
                </div>

                <motion.a
                    href="https://alphasnap.pl/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-[#2A9D8F] hover:bg-[#21867a] py-3 px-8 text-sm md:text-base inline-block w-full md:w-auto"
                >
                    Odkryj AlphaSnap
                </motion.a>
                <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
                    Dostępne Wkrótce
                </p>
            </div>
        </section>
    );
};

export default AlphaSnap;
