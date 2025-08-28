import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const FunnelStep: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-border-light h-full">
        <div className="bg-strategy-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-h4 mb-4 flex-shrink-0">{number}</div>
        <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-h5 font-bold text-text-primary">{title}</h3>
            <p className="text-body-sm text-text-secondary leading-snug mt-1">{description}</p>
        </div>
    </div>
);

const FunnelSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

    const steps = [
        { number: 1, title: "관리영역 (Area)", description: "핵심 영역 식별" },
        { number: 2, title: "문제요인군 (Factor Class)", description: "구조적/역량적/문화적/환경적" },
        { number: 3, title: "개입수단 (Intervention Lever)", description: "표준 접근 방향" },
        { number: 4, title: "솔루션 (Solution)", description: "APX 솔루션 매칭" }
    ];

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
                    {/* Image Content */}
                    <div className={`md:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <img 
                            src="https://storage.googleapis.com/apxhomepage-asset/SectionImage_Funnel.png" 
                            alt="APX 인사이트 퍼널 시각화 이미지" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            style={{aspectRatio: '1/1'}}
                        />
                    </div>
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                                APX 인사이트 퍼널:<br />현상에서 핵심으로, 문제에서 해결책으로
                            </h2>
                            <div className="text-body-lg text-text-secondary max-w-4xl leading-normal mb-12">
                                <p>인사이트 퍼널은 현상 너머의 진짜 원인을 진단하고 가장 효과적인 해결책을 도출하는 APX만의 독자적인 프레임워크입니다.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {steps.map((step, index) => (
                                <div key={step.number} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                                   <FunnelStep {...step} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FunnelSection;