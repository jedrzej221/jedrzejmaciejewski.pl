import { Mail, Youtube, Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 py-8 md:py-12 mt-8 w-full px-4">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-serif font-bold mb-2 text-[var(--color-text-main)]">Jędrzej Maciejewski</h2>
                    <p className="text-[var(--color-text-muted)] text-xs md:text-sm">
                        &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Instagram */}
                    <a href="https://instagram.com/jedrzej.maciejewski" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-muted)]">
                        <Instagram size={24} />
                    </a>

                    {/* Facebook */}
                    <a href="https://facebook.com/jedrzej.maciejewski" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-muted)]">
                        <Facebook size={24} />
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com/@jedrzejmaciejewski" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-muted)]">
                        <Youtube size={24} />
                    </a>

                    {/* TikTok */}
                    <a href="https://tiktok.com/@jedrzejmaciejewski" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-muted)]">
                        <Music2 size={24} />
                    </a>

                    {/* Email */}
                    <a href="mailto:jedrzej.maciejewski@linestack.pl" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-muted)]">
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
