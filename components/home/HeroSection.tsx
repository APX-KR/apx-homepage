import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';

const HeroSection: React.FC = () => {
    const { openContactModal } = useModal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 페이지 로드 시 애니메이션이 바로 시작되도록 설정
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 렌더링 후 트랜지션이 적용될 수 있도록 짧은 딜레이 추가

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-gradient-to-b from-white to-apx-growth-green/5 min-h-screen flex items-center overflow-hidden">
            <Container className="text-left">
                <h1 className={`text-h1-mobile md:text-h1-tablet lg:text-h1 font-bold text-text-primary leading-tighter tracking-tight-title mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    조직의 잠재력을<br />성과로 바꾸는 성장 시스템
                </h1>
                <p className={`text-body-lg text-text-secondary max-w-3xl ml-0 mb-10 leading-normal transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    문제가 아니라 원인에, 캠페인이 아니라 시스템에 집중합니다.
                </p>
                <div className={`flex flex-col sm:flex-row justify-start items-center gap-4 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); openContactModal(); }}
                        className="w-full sm:w-auto px-8 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-transparent hover:text-apx-growth-green hover:border-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                        솔루션 문의하기
                    </a>
                    <a
                        href="#academy"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent text-apx-growth-green font-semibold text-body-base leading-none rounded-full border-2 border-apx-growth-green hover:bg-apx-growth-green hover:text-white hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                        아카데미 탐색하기
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;