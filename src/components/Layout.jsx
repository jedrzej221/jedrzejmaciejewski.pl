import { motion, useScroll, useSpring } from 'framer-motion';

const Layout = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[var(--color-bg-main)] flex justify-center py-8 md:py-16 px-4 font-sans text-[var(--color-text-main)]">
            {/* Scroll Progress Bar - Fixed to top of viewport */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-primary)] origin-left z-50 shadow-md"
                style={{ scaleX }}
            />

            {/* Main Centered Box */}
            <main className="w-full max-w-[1200px] bg-white rounded-3xl md:rounded-[40px] shadow-xl md:shadow-2xl overflow-hidden relative mx-auto">
                {/* Optional: ornamental grain or pattern could be added here */}

                <div className="flex flex-col items-center w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
