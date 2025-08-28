import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';

const HeroSection: React.FC = () => {
    const { openContactModal } = useModal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            className="relative bg-cover bg-center"
            style={{ 
                backgroundImage: "url('https://storage.googleapis.com/apxhomepage-asset/HeroSectionBG02.png')"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent"></div>
            
            <Container className="relative z-10">
                <div className="flex items-end" style={{ minHeight: '740px' }}>
                    <div className="py-20 md:py-28">
                        <h1 className={`text-h1-mobile md:text-h1-tablet lg:text-h1 font-bold text-white leading-tighter tracking-tight-title mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            조직의 잠재력을<br />성과로 바꾸는 성장 시스템
                        </h1>
                        <p className={`text-body-lg text-gray-100 max-w-2xl mb-10 leading-normal transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            문제가 아니라 원인에, 캠페인이 아니라 시스템에 집중합니다.
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); openContactModal(); }}
                                className="w-full sm:w-auto px-8 py-3 bg-apx-growth-green text-white font-semibold rounded-full border-2 border-apx-growth-green hover:bg-transparent hover:text-white hover:border-white hover:-translate-y-0.5 transform transition-all duration-300"
                            >
                                솔루션 문의하기
                            </a>
                            <a
                                href="#academy"
                                className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
                            >
                                아카데미 탐색하기
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;