import { motion } from 'framer-motion';
import { Book, ArrowRight } from 'lucide-react';

const Ebook = () => {
    return (
        <section className="section container py-12 md:py-16 max-w-4xl mx-auto text-center px-4 md:px-6">
            <div className="mb-8 md:mb-12">
                <span className="text-[var(--color-primary)] font-bold tracking-widest text-xs md:text-base uppercase mb-3 block">
                    AKADEMIA INWESTOWANIA
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif text-[var(--color-text-main)] leading-tight">
                    Wiedza, którą się dzielę
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg md:text-xl px-2">
                    Praktyczne spojrzenie na świat inwestycji długoterminowych.
                </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-6 md:p-14 text-white relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div className="mb-6 bg-white/10 p-4 rounded-full">
                    <Book className="w-8 h-8 text-[var(--color-primary)]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Twoja biblioteka konkretnej wiedzy</h3>
                <p className="text-gray-300 mb-8 md:mb-10 max-w-xl text-base md:text-lg leading-relaxed">
                    Piszę przewodniki, których sam potrzebowałem na start. To czysta praktyka z rynków – bez lania wody, same gotowe schematy do wdrożenia od zaraz.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-[var(--color-primary)] text-white font-bold py-3 px-6 md:px-8 rounded-full flex flex-col md:flex-row items-center gap-2 hover:bg-[#E88A60] transition-colors w-full md:w-auto justify-center text-center"
                >
                    <a href="https://linestack.pl" target="_blank" rel="noopener noreferrer">Dołącz do Akademii Inwestowania</a>
                    <ArrowRight size={18} className="hidden md:block" />
                </motion.button>
            </div>
        </section>
    );
};

export default Ebook;
