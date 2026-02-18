import { motion } from 'framer-motion';
import { GraduationCap, Globe } from 'lucide-react';

const EducationItem = ({ school, degree, location, time, delay }) => (
    <div className="bg-gray-50 rounded-2xl p-6 text-left hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-[var(--color-primary)]">
            <GraduationCap size={20} />
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold flex items-center gap-1">
                <Globe size={12} /> {location}
            </span>
        </div>
        <h3 className="text-lg font-bold mb-1 text-[var(--color-text-main)] font-serif">{school}</h3>
        <p className="text-[var(--color-text-muted)] text-sm font-medium">{degree}</p>
        <p className="text-[var(--color-text-muted)] text-sm font-medium">{time}</p>
    </div>
);

const About = () => {
    const education = [
        {
            school: "Uniwersytet Ekonomiczny w Poznaniu",
            degree: "Ekonomia, Finanse i Rachunkowość - Magister",
            location: "Polska",
            time: "2014 - 2019"
        },
        {
            school: "Nanjing University",
            degree: "MBA - wymiana",
            location: "Chiny",
            time: "2018 - 2019"
        },
        {
            school: "IÉSEG School of Management",
            degree: "Finanse i Rachunkowość - wymiana",
            location: "Francja",
            time: "2016 - 2017"
        },
        {
            school: "Chonnam National University",
            degree: "Ekonomia - wymiana",
            location: "Korea Południowa",
            time: "2015 - 2016"
        }
    ];

    return (
        // Added px-4 to prevent edges touching on mobile
        <section id="about" className="section container pt-0 pb-12 md:pb-16 px-4 md:px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8 md:mb-12"
            >
                <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm md:text-base uppercase mb-3 block">
                    O mnie
                </span>
                {/* Responsive heading: 3xl on mobile, 5xl on desktop */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif leading-tight text-[var(--color-text-main)]">
                    Łączę finanse i technologię
                </h2>
                {/* Adjusted text size from xl to lg on mobile for better readability */}
                <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                    <p>
                        Cześć! Nazywam się Jędrzej Maciejewski. Jestem ekonomistą, inwestorem i programistą z bogatym międzynarodowym doświadczeniem. Tworzę innowacyjne rozwiązania odpowiadające na potrzeby rynku. Fundamenty mojej wiedzy zdobywałem w międzynarodowych ośrodkach akademickich:
                    </p>
                </div>
            </motion.div>

            {/* Added a gap-4 to ensure cards have vertical space when stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {education.map((edu, index) => (
                    <EducationItem key={index} {...edu} delay={index * 0.1} />
                ))}
            </div>
        </section>
    );
};

export default About;
