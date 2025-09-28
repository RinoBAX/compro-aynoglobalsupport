import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    PartyPopper, 
    Handshake, 
    Megaphone, 
    Code2, 
    MonitorSmartphone, 
    Target,
    Users,
    Briefcase,
    Award,
    Sparkles
} from 'lucide-react';

// Data services dan whyUs tetap sama
const services = [
    {
        icon: <PartyPopper className="w-10 h-10 text-blue-600" />,
        title: "Event Organizer",
        description: "Wujudkan acaramu jadi kenyataan dengan konsep kreatif dan eksekusi profesional dari kami."
    },
    {
        icon: <Handshake className="w-10 h-10 text-red-800" />,
        title: "Event Sponsorship",
        description: "Hubungkan event-mu dengan sponsor potensial melalui jaringan perbankan terpercaya kami."
    },
    {
        icon: <Code2 className="w-10 h-10 text-red-800" />,
        title: "Kelas Fullstack Developer",
        description: "Program intensif dengan jaminan penyaluran kerja. Jadilah developer handal yang dicari industri."
    },
    {
        icon: <Megaphone className="w-10 h-10 text-blue-600" />,
        title: "Kelas Digital Marketing",
        description: "Jadi ahli digital marketing dalam 3 bulan dengan bimbingan karir dan bonus beasiswa S1."
    },
    {
        icon: <MonitorSmartphone className="w-10 h-10 text-blue-600" />,
        title: "Jasa Pembuatan Aplikasi",
        description: "Bangun aplikasi modern untuk website, mobile, dan desktop sesuai kebutuhan bisnismu."
    },
    {
        icon: <Target className="w-10 h-10 text-red-800" />,
        title: "Jasa Digital Marketing",
        description: "Boost bisnismu! Kami tangani iklan, SEO, dan manajemen sosial media secara profesional."
    }
];

const whyUsPoints = [
    {
        icon: <Users className="w-12 h-12 text-blue-600 mx-auto" />,
        title: "Program ISA Inovatif",
        description: "Belajar dulu, bayar nanti setelah dapat kerja. Fokus upgrade skill tanpa pusing biaya."
    },
    {
        icon: <Briefcase className="w-12 h-12 text-red-800 mx-auto" />,
        title: "Penyaluran Kerja",
        description: "Lulusan terbaik kami langsung terhubung dengan jaringan perusahaan partner ternama."
    },
    {
        icon: <Award className="w-12 h-12 text-blue-600 mx-auto" />,
        title: "Bonus Beasiswa S1",
        description: "Kesempatan emas dapat pendidikan S1 gratis bagi yang melunasi program ISA di muka."
    }
];

// Komponen Card
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 sm:p-8 h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-blue-600 flex flex-col">
        <div className="bg-slate-100 p-4 rounded-xl mb-6 inline-block group-hover:bg-blue-100 transition-colors duration-300 self-start">
            {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">{description}</p>
        <a href="#" className="text-red-800 font-bold inline-flex items-center group mt-auto self-start text-sm">
            Selengkapnya
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
    </div>
);

const WhyUsCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl p-6 sm:p-8 h-full text-center shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <div className="mb-5">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm sm:text-base">{description}</p>
    </div>
);

// Hook untuk animasi scroll
const useAnimateOnScroll = (threshold = 0.1) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return [elementRef, isVisible];
};

// Komponen utama Home
const Home = () => {
    const canvasRef = useRef(null);
    const [whyUsRef, whyUsVisible] = useAnimateOnScroll(0.2);
    const [servicesRef, servicesVisible] = useAnimateOnScroll(0.1);

    // Efek Canvas Particle Background
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particlesArray = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        
        const mouse = { x: null, y: null, radius: 150 };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX; // Gunakan clientX/clientY untuk posisi viewport
            mouse.y = event.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor(x, y, dX, dY, size, color) { this.x=x; this.y=y; this.directionX=dX; this.directionY=dY; this.size=size; this.color=color; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
            update() {
                if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
                if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
                let dx=mouse.x-this.x; let dy=mouse.y-this.y; let dist=Math.sqrt(dx*dx+dy*dy);
                if(dist < mouse.radius + this.size){
                    if(mouse.x < this.x && this.x < canvas.width-this.size*10) this.x+=5;
                    if(mouse.x > this.x && this.x > this.size*10) this.x-=5;
                    if(mouse.y < this.y && this.y < canvas.height-this.size*10) this.y+=5;
                    if(mouse.y > this.y && this.y > this.size*10) this.y-=5;
                }
                this.x+=this.directionX; this.y+=this.directionY; this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let num = (canvas.height * canvas.width) / 9000;
            const colors = ['rgba(37, 99, 235, 0.7)', 'rgba(159, 18, 57, 0.7)'];
            for (let i=0; i<num; i++) {
                let size=(Math.random()*3)+1;
                let x=Math.random()*(canvas.width - size*2)+size; 
                let y=Math.random()*(canvas.height - size*2)+size; 
                let dX=(Math.random()*0.3)-0.15;
                let dY=(Math.random()*0.3)-0.15; 
                let color=colors[Math.floor(Math.random()*colors.length)];
                particlesArray.push(new Particle(x,y,dX,dY,size,color));
            }
        }
        
        function animate() { 
            animationFrameId=requestAnimationFrame(animate); 
            ctx.clearRect(0,0,canvas.width,canvas.height); 
            particlesArray.forEach(p=>p.update()); 
            connect(); 
        }

        function connect(){
            for (let a=0; a<particlesArray.length; a++){
                for (let b=a; b<particlesArray.length; b++){
                    let dist=((particlesArray[a].x-particlesArray[b].x)*(particlesArray[a].x-particlesArray[b].x))+((particlesArray[a].y-particlesArray[b].y)*(particlesArray[a].y-particlesArray[b].y));
                    if (dist<(canvas.width/8)*(canvas.height/8)){
                        let opacity=1-(dist/25000); 
                        const cA=particlesArray[a].color.replace(", 0.7)",""); 
                        const cB=particlesArray[b].color.replace(", 0.7)","");
                        const grad=ctx.createLinearGradient(particlesArray[a].x,particlesArray[a].y,particlesArray[b].x,particlesArray[b].y);
                        grad.addColorStop(0,`${cA}, ${opacity})`); grad.addColorStop(1,`${cB}, ${opacity})`);
                        ctx.strokeStyle=grad; 
                        ctx.lineWidth=0.5;
                        ctx.beginPath(); 
                        ctx.moveTo(particlesArray[a].x,particlesArray[a].y); 
                        ctx.lineTo(particlesArray[b].x,particlesArray[b].y); 
                        ctx.stroke();
                    }
                }
            }
        }

        const handleResize = () => { resizeCanvas(); init(); };
        window.addEventListener('resize', handleResize);
        resizeCanvas(); init(); animate();

        return () => { 
            window.cancelAnimationFrame(animationFrameId); 
            window.removeEventListener('resize', handleResize); 
            window.removeEventListener('mousemove', handleMouseMove); 
        };
    }, []);

    return (
        <main className="overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="py-24 md:py-32 bg-white relative h-[80vh] md:h-screen flex items-center">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-6 animate-fade-in-down max-w-4xl mx-auto">
                        Wujudkan <span className="bg-gradient-to-r from-blue-600 to-red-800 bg-clip-text text-transparent">Masa Depan Digitalmu</span> di Sini
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-10 animate-fade-in-up">
                        Dari event spektakuler hingga karir digital impian, Ayno Global Support adalah partner terbaik untuk melesat lebih tinggi.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-xs mx-auto sm:max-w-none animate-fade-in-up">
                        <Link to="/services" className="w-full sm:w-auto bg-red-800 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Mulai Sekarang
                        </Link>
                        <Link to="/about" className="w-full sm:w-auto bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-semibold text-base hover:bg-slate-300 transition-all duration-300 transform hover:scale-105">
                            Tentang Kami
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY US SECTION */}
            <section ref={whyUsRef} className="py-16 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Kenapa Harus Kami?</h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Kami lebih dari sekadar layanan, kami adalah jembatan menuju kesuksesanmu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                        {whyUsPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ease-out ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <WhyUsCard {...point} />
                                </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section ref={servicesRef} id="services" className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Layanan Unggulan Kami</h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Solusi lengkap untuk event, edukasi, dan kebutuhan digital bisnismu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA SECTION */}
            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-600 to-red-800 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <Sparkles className="absolute -top-4 -left-4 w-24 h-24 text-white opacity-20 transform rotate-12" />
                        <Sparkles className="absolute -bottom-8 -right-0 w-32 h-32 text-white opacity-20 transform -rotate-12" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-5">Siap Mengambil Langkah Pertama?</h2>
                        <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8 md:mb-10">
                            Diskusikan idemu, daftar kelas, atau konsultasikan kebutuhan bisnismu. Tim kami siap membantu mewujudkannya.
                        </p>
                        {/* PERUBAHAN: 
                          - Teks diubah menjadi "Hubungi Kami".
                          - Ditambahkan ikon ArrowRight.
                          - Ditambahkan kelas 'group' dan 'inline-flex items-center' pada Link.
                          - Ikon diberi animasi 'group-hover:translate-x-1.5'.
                        */}
                        <Link 
                            to="/contact" 
                            className="group inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-base hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-110"
                        >
                            Hubungi Kami
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;