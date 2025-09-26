import React, { useState } from 'react';
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

    // Style untuk NavLink yang aktif
    const activeLinkStyle = {
        color: '#1d4ed8', // blue-700
        fontWeight: '600'
    };

    return (
        <>
            <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-3xl font-bold text-slate-900">
                        Ayno<span className="text-red-800">.</span>
                    </Link>
                    
                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                             <NavLink 
                                key={link.name} 
                                to={link.path} 
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                             >
                                 {link.name}
                                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                             </NavLink>
                        ))}
                    </div>
                    <Link to="/contact" className="hidden md:inline-block bg-red-800 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-900 transition-all duration-300 transform hover:scale-105 shadow-md">
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

            {/* Overlay Menu Mobile */}
            <div className={`md:hidden fixed inset-0 bg-white z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                    {navLinks.map((link) => (
                         <NavLink 
                            key={link.name} 
                            to={link.path} 
                            className="text-4xl text-slate-800 hover:text-blue-600 font-semibold"
                            onClick={handleLinkClick}
                            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                         >
                             {link.name}
                         </NavLink>
                    ))}
                     <Link 
                        to="/contact" 
                        className="bg-red-800 text-white mt-6 px-10 py-4 rounded-full font-semibold text-lg"
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

