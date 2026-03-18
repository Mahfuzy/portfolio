export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            Mahfuz.dev
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { href: "#about", label: "About" },
                            { href: "#skills", label: "Skills" },
                            { href: "#projects", label: "Projects" },
                            { href: "#services", label: "Services" },
                            { href: "#contact", label: "Contact" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}