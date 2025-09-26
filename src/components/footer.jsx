import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">
                            Ayno<span className="text-indigo-500">.</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Partner terpercaya untuk pertumbuhan event, karir, dan bisnis digital Anda. Kami hadir untuk mewujudkan ide terbaik Anda menjadi kenyataan.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 tracking-wide">Navigasi Cepat</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Tentang Kami</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Layanan</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Kontak</Link></li>
                            <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 tracking-wide">Layanan Kami</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services/event-organizer" className="text-slate-400 hover:text-white transition-colors">Event Organizer</Link></li>
                            <li><Link to="/services/digital-class" className="text-slate-400 hover:text-white transition-colors">Kelas Digital</Link></li>
                            <li><Link to="/services/development" className="text-slate-400 hover:text-white transition-colors">Jasa Development</Link></li>
                            <li><Link to="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 tracking-wide">Hubungi Kami</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-400 flex-shrink-0" />
                                <span className="text-slate-400">Jl. Contoh Alamat No. 123, Jakarta, Indonesia</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                                <a href="mailto:info@aynoglobal.com" className="text-slate-400 hover:text-white transition-colors">info@aynoglobal.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-700 pt-8 text-center">
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} PT. Ayno Global Support. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

