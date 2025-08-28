
import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const ProblemSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

    return (
        <section className="min-h-screen flex items-center bg-white">
            <div className="relative w-full">
                <Container ref={sectionRef} className="text-center max-w-4xl">
                    <h2 className={`text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-8 leading-tighter tracking-tight-title transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        모든 위대한 성과는<br />강력한 ‘운영체제’에서 시작됩니다
                    </h2>
                    <p className={`text-body-base text-text-secondary leading-normal transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        뛰어난 하드웨어도 운영체제 없이는 무용지물입니다.<br />
                        방향이 다른 노력들은 결코 시너지를 낼 수 없습니다.<br />
                        조직의 성과 역시 그 근간을 이루는 핵심 운영 원리가 필요하며,<br />
                        APX는 바로 그 '성과 운영체제'의 기본 원리를 정의하는 것에서 출발합니다.
                    </p>
                </Container>
                
                {/* Animated connecting line */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-10 h-[38vh] mt-8 flex justify-center transition-opacity duration-500 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
                    <div className="relative h-full w-full flex flex-col items-center">
                        {/* The line container with a mask to animate "drawing" downwards */}
                        <div className="h-full w-px overflow-hidden">
                            <div 
                                className={`h-full w-full transition-transform duration-[1200ms] ease-out delay-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, rgba(74, 169, 102, 0), #4AA966)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 6px, transparent 6px)',
                                    WebkitMaskSize: '1px 16px',
                                    WebkitMaskRepeat: 'repeat-y',
                                    maskImage: 'linear-gradient(to bottom, black 6px, transparent 6px)',
                                    maskSize: '1px 16px',
                                    maskRepeat: 'repeat-y',
                                }}
                            ></div>
                        </div>

                        {/* The circle at the bottom */}
                        <div 
                            className={`absolute bottom-0 w-3 h-3 rounded-full bg-apx-growth-green transition-all duration-700 ease-in-out delay-[1700ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            style={{
                                boxShadow: '0 0 0 4px rgba(74, 169, 102, 0.3)'
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;