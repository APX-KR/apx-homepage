
import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const FunnelStep: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center w-full">
        <div className="bg-strategy-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-h3 mb-4 flex-shrink-0">{number}</div>
        <div>
            <h3 className="text-h4-mobile md:text-h4-tablet lg:text-h4 font-bold text-text-primary">{title}</h3>
            <p className="text-body-sm text-text-secondary leading-snug">{description}</p>
        </div>
    </div>
);

const MatrixCell: React.FC<{ children?: React.ReactNode, className?: string}> = ({ children, className }) => (
    <div className={`p-3 md:p-4 border border-border-light flex items-center justify-center ${className}`}>{children}</div>
)

const FunnelSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const steps = [
        { number: 1, title: "관리영역 (Area)", description: "핵심 영역 식별" },
        { number: 2, title: "문제요인군 (Factor Class)", description: "구조적/역량적/문화적/환경적" },
        { number: 3, title: "개입수단 (Intervention Lever)", description: "표준 접근 방향" },
        { number: 4, title: "솔루션 (Solution)", description: "APX 솔루션 매칭" }
    ];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <Container ref={sectionRef}>
                <div className={`text-left mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                        APX 인사이트 퍼널:<br />현상에서 핵심으로, 문제에서 해결책으로
                    </h2>
                    <div className="text-body-lg text-text-secondary max-w-4xl ml-0 leading-normal">
                        <p>인사이트 퍼널은 현상 너머의 진짜 원인을 진단하고 가장 효과적인 해결책을 도출하는 APX만의 독자적인 프레임워크입니다.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 mb-20">
                    {steps.map((step, index) => (
                        <div key={step.number} className={`w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                           <FunnelStep {...step} />
                        </div>
                    ))}
                </div>
                
                <div className={`bg-white p-4 md:p-8 rounded-lg shadow-lg border border-border-light transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <h3 className="text-h3-mobile md:text-h3 font-bold text-center text-strategy-blue mb-8 leading-tight tracking-tight-title">문제요인군별 개입수단 매트릭스</h3>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-5 text-center text-caption font-semibold min-w-[550px] tracking-wide-caption">
                            <MatrixCell className="bg-gray-50"></MatrixCell>
                            <MatrixCell className="bg-gray-100 text-text-primary">구조적 요인</MatrixCell>
                            <MatrixCell className="bg-gray-100 text-text-primary">역량적 요인</MatrixCell>
                            <MatrixCell className="bg-gray-100 text-text-primary">문화적 요인</MatrixCell>
                            <MatrixCell className="bg-gray-100 text-text-primary">환경적 요인</MatrixCell>

                            <MatrixCell className="bg-gray-100 text-text-primary">전략</MatrixCell>
                            <MatrixCell>시스템/제도</MatrixCell>
                            <MatrixCell>지식/스킬</MatrixCell>
                            <MatrixCell>가치/규범</MatrixCell>
                            <MatrixCell>인프라/자원</MatrixCell>

                            <MatrixCell className="bg-gray-100 text-text-primary">인재</MatrixCell>
                            <MatrixCell>R&R</MatrixCell>
                            <MatrixCell>리더십/경험</MatrixCell>
                            <MatrixCell>소통/협력</MatrixCell>
                            <MatrixCell>시장/경쟁</MatrixCell>
                            
                            <MatrixCell className="bg-gray-100 text-text-primary">프로세스</MatrixCell>
                            <MatrixCell>의사결정</MatrixCell>
                            <MatrixCell>개인 동기</MatrixCell>
                            <MatrixCell>심리적 안정감</MatrixCell>
                            <MatrixCell>외부 환경</MatrixCell>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FunnelSection;