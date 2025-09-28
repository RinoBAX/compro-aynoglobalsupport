import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    MonitorSmartphone,
    Target,
    Code2,
    Megaphone,
    Facebook,
    Handshake,
    PartyPopper,
    Briefcase,
    Sparkles
} from 'lucide-react';

const allServices = [
    {
        icon: <MonitorSmartphone className="w-10 h-10 text-blue-600" />,
        title: "Jasa Pembuatan Website",
        description: "Bangun kehadiran online profesional dengan website modern, cepat, dan SEO-friendly yang dirancang khusus untuk bisnismu.",
        hasPortfolio: true,
    },
    {
        icon: <Target className="w-10 h-10 text-red-800" />,
        title: "Jasa Digital Marketing",
        description: "Tingkatkan jangkauan bisnismu melalui strategi iklan, SEO, dan manajemen sosial media yang efektif dan terukur.",
        hasPortfolio: true,
    },
    {
        icon: <Code2 className="w-10 h-10 text-red-800" />,
        title: "Kelas Fullstack Developer",
        description: "Jadi developer profesional yang siap kerja dengan kurikulum intensif, bimbingan karir, dan jaminan penyaluran kerja.",
        hasPortfolio: false,
    },
    {
        icon: <Megaphone className="w-10 h-10 text-blue-600" />,
        title: "Kelas Digital Marketing",
        description: "Kuasai skill digital marketing dari dasar hingga mahir dalam 3 bulan, lengkap dengan bonus beasiswa S1.",
        hasPortfolio: false,
    },
    {
        icon: <Facebook className="w-10 h-10 text-blue-600" />,
        title: "Kelas FB-Ads Gratis",
        description: "Pelajari cara beriklan di Facebook secara efektif untuk meningkatkan penjualan bisnismu, tanpa biaya.",
        hasPortfolio: false,
    },
    {
        icon: <Handshake className="w-10 h-10 text-red-800" />,
        title: "Event Sponsorship",
        description: "Dapatkan dukungan sponsor untuk acaramu melalui jaringan perbankan terpercaya dan proposal profesional dari kami.",
        hasPortfolio: false,
    },
    {
        icon: <PartyPopper className="w-10 h-10 text-blue-600" />,
        title: "Event Organizer",
        description: "Serahkan acaramu pada kami. Dari konsep kreatif hingga eksekusi sempurna, kami wujudkan event impianmu.",
        hasPortfolio: false,
    },
    {
        icon: <Briefcase className="w-10 h-10 text-red-800" />,
        title: "Pekerjaan Marketing Freelance",
        description: "Cari peluang kerja freelance di bidang marketing yang fleksibel dan sesuai dengan keahlianmu bersama kami.",
        hasPortfolio: true,
    }
];

const ServiceCard = ({ icon, title, description, hasPortfolio }) => (
    <div className="bg-white p-8 h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-red-800 flex flex-col">
        <div className="bg-slate-100 p-4 rounded-xl mb-6 inline-block group-hover:bg-red-100 transition-colors duration-300 self-start">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-4 mt-auto">
            <Link to="#" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md flex-grow">
                Details
            </Link>
            {hasPortfolio && (
                <Link to="#" className="bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-semibold text-center hover:bg-slate-300 transition-all duration-300 transform hover:scale-105 flex-grow">
                    Portfolio
                </Link>
            )}
        </div>
    </div>
);


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


const ServicesPage = () => {
    const canvasRef = useRef(null);
    const [servicesRef, servicesVisible] = useAnimateOnScroll(0.05);

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
        
        class Particle {
            constructor(x, y, dX, dY, size, color) { this.x=x; this.y=y; this.directionX=dX; this.directionY=dY; this.size=size; this.color=color; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
            update() {
                if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
                if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
                this.x+=this.directionX; this.y+=this.directionY; this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let num = (canvas.height * canvas.width) / 9000;
            const colors = ['rgba(159, 18, 57, 0.7)', 'rgba(37, 99, 235, 0.7)'];
            for (let i=0; i<num; i++) {
                let size=(Math.random()*3)+1; let x=Math.random()*((innerWidth-size*2)-(size*2))+size*2; let y=Math.random()*((innerHeight-size*2)-(size*2))+size*2;
                let dX=(Math.random()*0.4)-0.2; let dY=(Math.random()*0.4)-0.2; let color=colors[Math.floor(Math.random()*colors.length)];
                particlesArray.push(new Particle(x,y,dX,dY,size,color));
            }
        }
        
        function animate() { animationFrameId=requestAnimationFrame(animate); ctx.clearRect(0,0,innerWidth,innerHeight); particlesArray.forEach(p=>p.update()); connect(); }

        function connect(){
            for (let a=0; a<particlesArray.length; a++){
                for (let b=a; b<particlesArray.length; b++){
                    let dist=((particlesArray[a].x-particlesArray[b].x)*(particlesArray[a].x-particlesArray[b].x))+((particlesArray[a].y-particlesArray[b].y)*(particlesArray[a].y-particlesArray[b].y));
                    if (dist<(canvas.width/7)*(canvas.height/7)){
                        let opacity=1-(dist/20000); ctx.strokeStyle=`rgba(159, 18, 57, ${opacity})`;
                        if (a % 2 === 0) ctx.strokeStyle=`rgba(37, 99, 235, ${opacity})`;
                        ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x,particlesArray[a].y); ctx.lineTo(particlesArray[b].x,particlesArray[b].y); ctx.stroke();
                    }
                }
            }
        }

        const handleResize = () => { resizeCanvas(); init(); };
        window.addEventListener('resize', handleResize);
        resizeCanvas(); init(); animate();

        return () => { window.cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); };
    }, []);

    return (
        <main className="overflow-x-hidden">
            <section className="py-24 md:py-32 bg-slate-50 relative h-[60vh] md:h-[70vh] flex items-center">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 animate-fade-in-down">
                        Layanan <span className="bg-gradient-to-r from-blue-600 to-red-800 bg-clip-text text-transparent">Komprehensif</span> Kami
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 animate-fade-in-up">
                        Temukan solusi lengkap untuk event, edukasi, dan kebutuhan digital bisnismu. Semua dirancang untuk kesuksesanmu.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} id="services" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {allServices.map((service, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-600 to-red-800 rounded-3xl shadow-2xl p-8 md:p-16 lg:p-20 text-center text-white relative overflow-hidden">
                        <Sparkles className="absolute -top-4 -left-4 w-24 h-24 text-white opacity-20 transform rotate-12" />
                        <Sparkles className="absolute -bottom-8 -right-0 w-32 h-32 text-white opacity-20 transform -rotate-12" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Punya Pertanyaan?</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                           Tim kami siap membantu menjawab pertanyaanmu dan mendiskusikan kebutuhan proyekmu lebih lanjut.
                        </p>
                        <Link 
                            to="/contact" 
                            className="inline-block bg-white text-blue-600 px-6 md:px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-110 whitespace-nowrap"
                        >
                            Hubungi Kami Sekarang
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;