import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

const PortfolioPage = () => {
    return (
        <main className="overflow-x-hidden bg-slate-50">
            <div className="container mx-auto px-6 py-20 min-h-[80vh] flex items-center justify-center">
                <div className="text-center bg-white p-12 rounded-2xl shadow-lg max-w-2xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Construction className="w-20 h-20 text-red-800" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                        Segera Hadir!
                    </h1>
                    <p className="text-lg text-slate-600 mb-8">
                        Halaman portfolio sedang dalam tahap pengembangan. Untuk sementara waktu, silakan lihat hasil kerja kami melalui halaman layanan.
                    </p>
                    <Link 
                        to="/services" 
                        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md inline-flex items-center"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Kembali ke Halaman Services
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PortfolioPage;
