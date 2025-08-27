
import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const PartnerSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });
    
    return (
        <section className="bg-apx-foundation-beige py-24 md:py-32 lg:py-40 overflow-hidden">
            <Container ref={sectionRef} className="text-left">
                <h2 className={`text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary leading-tighter tracking-tight-title mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    리더가 가장 먼저 찾는 성장 파트너
                </h2>
                <p className={`text-body-lg text-text-secondary max-w-2xl ml-0 mb-10 leading-normal transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    단순 해결사가 아닌 생각의 파트너
                </p>
                <div className={`flex flex-col sm:flex-row justify-start items-center gap-4 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                     <a
                        href="#newsletter"
                        className="w-full sm:w-auto px-8 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-transparent hover:text-apx-growth-green hover:border-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                        뉴스레터 신청하기
                    </a>
                    <a
                        href="#resources"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent text-apx-growth-green font-semibold text-body-base leading-none rounded-full border-2 border-apx-growth-green hover:bg-apx-growth-green hover:text-white hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                        자료실 확인하기
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default PartnerSection;