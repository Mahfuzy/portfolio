export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
                            My Portfolio
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a 
                            href="#about" 
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Projects
                        </a>
                        <a 
                            href="#services" 
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Services
                        </a>
                        <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}