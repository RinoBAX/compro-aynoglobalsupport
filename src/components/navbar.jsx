import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About Us', path: '/about' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Efek untuk mencegah scrolling body saat menu mobile terbuka
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Style untuk NavLink yang aktif
    const activeLinkClass = "text-red-800 font-bold";

    return (
        <>
            <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-3xl font-bold text-slate-900">
                        Ayno<span className="text-red-800">.</span>
                    </Link>
                    
                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                             <NavLink 
                                 key={link.name} 
                                 to={link.path} 
                                 className={({ isActive }) => 
                                     `text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group text-base ${isActive ? activeLinkClass : ''}`
                                 }
                             >
                                 {link.name}
                                 {/* Underline effect */}
                                 <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                             </NavLink>
                        ))}
                    </div>
                    <Link to="/contact" className="hidden md:inline-block bg-red-800 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-red-900 transition-all duration-300 transform hover:scale-105 shadow-md">
                        Contact Us
                    </Link>
                    
                    {/* Tombol Menu Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-slate-800 focus:outline-none z-50 relative">
                           {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Side-Drawer Menu Mobile */}
            {isOpen && (
                // Backdrop Overlay
                <div onClick={toggleMenu} className="fixed inset-0 bg-black/50 z-40 md:hidden"></div>
            )}
            
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-6 flex flex-col h-full">
                    {/* Header Drawer */}
                    <div className="flex justify-between items-center pb-6 border-b border-slate-100 mb-6">
                        <span className="text-2xl font-bold text-slate-900">Menu</span>
                        <button onClick={toggleMenu} className="text-slate-600 hover:text-red-800">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Nav Links - Smaller text, proper padding */}
                    <div className="flex flex-col space-y-4 flex-grow">
                        {navLinks.map((link) => (
                             <NavLink 
                                 key={link.name} 
                                 to={link.path} 
                                 className={({ isActive }) => 
                                     `text-xl text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300 ${isActive ? activeLinkClass : ''}`
                                 }
                                 onClick={handleLinkClick}
                             >
                                 {link.name}
                             </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link 
                        to="/contact" 
                        className="bg-red-800 text-white mt-8 w-full text-center px-4 py-3 rounded-xl font-semibold text-base hover:bg-red-900 transition-all duration-300 shadow-lg"
                        onClick={handleLinkClick}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
