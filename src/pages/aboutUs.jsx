import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Building, 
    Rocket, 
    Users, 
    HeartHandshake, 
    Lightbulb, 
    ShieldCheck,
    Sparkles,
    Linkedin,
    Twitter,
    ArrowRight 
} from 'lucide-react';
import rinoImage from '../assets/Pictures/Rino.png';
import pujaImage from '../assets/Pictures/Puja.png';

const teamMembers = [
    {
        name: "Puja Ayu Miswari",
        role: "Founder & CEO",
        bio: "Visioner di balik Ayno, memimpin dengan inovasi dan semangat untuk membantu klien bertumbuh.",
        image: pujaImage
    },
    {
        name: "Aderino Arya Nanda",
        role: "Head of Business Developer",
        bio: "Membangun jembatan strategis dan membuka peluang baru untuk pertumbuhan bisnis Anda bersama kami.",
        image: rinoImage
    }
];

const coreValues = [
    {
        icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
        title: "Kemitraan",
        description: "Kami percaya kesuksesan Anda adalah kesuksesan kami. Kami bekerja bersama Anda, bukan untuk Anda."
    },
    {
        icon: <Lightbulb className="w-10 h-10 text-red-800" />,
        title: "Inovasi",
        description: "Kami tidak pernah berhenti belajar dan beradaptasi untuk memberikan solusi digital terdepan."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
        title: "Integritas",
        description: "Kepercayaan adalah fondasi kami. Transparansi dan kejujuran adalah kunci dalam setiap proyek."
    }
];

const useAnimateOnScroll = (threshold = 0.1) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold });
        const currentElement = elementRef.current;
        if (currentElement) observer.observe(currentElement);
        return () => { if (currentElement) observer.unobserve(currentElement); };
    }, [threshold]);
    return [elementRef, isVisible];
};

const AboutUsPage = () => {
    const [missionRef, missionVisible] = useAnimateOnScroll(0.2);
    const [valuesRef, valuesVisible] = useAnimateOnScroll(0.15);
    const [teamRef, teamVisible] = useAnimateOnScroll(0.1);

    return (
        <main className="overflow-x-hidden bg-white">
            <section className="py-20 md:py-28 bg-slate-50 relative flex items-center min-h-[60vh] md:min-h-[70vh]">
                <div className="container mx-auto px-6 text-center z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 animate-fade-in-down max-w-4xl mx-auto">
                        Kami adalah <span className="bg-gradient-to-r from-blue-600 to-red-800 bg-clip-text text-transparent">Partner Pertumbuhan Anda</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up">
                        Lebih dari sekadar agensi, kami adalah tim yang berdedikasi untuk mengubah ide brilian menjadi kenyataan digital yang berdampak.
                    </p>
                </div>
            </section>

            <section ref={missionRef} className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cerita Kami Dimulai Dari Sebuah Mimpi.</h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                                Ayno Global Support lahir dari keyakinan bahwa setiap bisnis, besar maupun kecil, berhak mendapatkan akses ke solusi digital berkualitas tinggi. Kami memulai perjalanan ini untuk menjadi jembatan antara ide-ide inovatif dengan teknologi yang dapat mewujudkannya.
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                Misi kami sederhana: memberdayakan klien kami untuk mencapai potensi penuh mereka di dunia digital melalui strategi yang cerdas, eksekusi yang sempurna, dan **kemitraan yang tulus**.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className={`bg-blue-50 p-6 sm:p-8 rounded-2xl text-center transition-all duration-1000 delay-200 ${missionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <Rocket className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-800">Visi Kami</h3>
                                <p className="text-slate-500 mt-2 text-sm">Menjadi katalisator utama transformasi digital bagi bisnis di Indonesia.</p>
                            </div>
                            <div className={`bg-red-50 p-6 sm:p-8 rounded-2xl text-center transition-all duration-1000 delay-400 ${missionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <Users className="w-10 h-10 text-red-800 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-800">Misi Kami</h3>
                                <p className="text-slate-500 mt-2 text-sm">Memberikan solusi digital inovatif dan kemitraan strategis yang mendorong pertumbuhan berkelanjutan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={valuesRef} className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Nilai yang Kami Pegang Teguh</h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Prinsip yang menjadi kompas dalam setiap langkah dan keputusan kami.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                        {coreValues.map((value, index) => (
                            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-700 ease-out ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="inline-block bg-slate-100 p-4 rounded-xl mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={teamRef} className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Bertemu dengan Tim Profesional Kami</h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Sekumpulan individu penuh semangat dengan keahlian beragam, bersatu untuk kesuksesan proyek Anda.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className={`text-center transition-all duration-700 ease-out ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="relative group max-w-xs mx-auto">
                                    <img src={member.image} alt={member.name} className="rounded-2xl w-full h-80 sm:h-96 object-cover object-center mb-6 shadow-xl" 
                                        onError={(e) => e.target.src = "https://placehold.co/400x320/cccccc/333333?text=Ayno+Team"} // Fallback image
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl flex items-center justify-center">
                                        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a href="#" className="text-white hover:text-blue-400"><Linkedin size={24} /></a>
                                            <a href="#" className="text-white hover:text-blue-400"><Twitter size={24} /></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-red-800 font-semibold text-base">{member.role}</p>
                                <p className="text-slate-500 mt-2 max-w-xs mx-auto text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-600 to-red-800 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <Sparkles className="absolute -top-4 -left-4 w-24 h-24 text-white opacity-20 transform rotate-12" />
                        <Sparkles className="absolute -bottom-8 -right-0 w-32 h-32 text-white opacity-20 transform -rotate-12" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-5">Mari Wujudkan Sesuatu yang Hebat Bersama.</h2>
                        <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
                            Siap untuk memulai proyek Anda berikutnya? Hubungi kami untuk konsultasi gratis dan mari kita diskusikan bagaimana kami dapat membantu Anda.
                        </p>
                        <Link 
                            to="/contact" 
                            className="group inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-base hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-110"
                        >
                            Mulai mengerjakan Project
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUsPage;