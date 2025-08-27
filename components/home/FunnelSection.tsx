
import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

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
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

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
                    {/* FIX: The FunnelSection component was truncated starting from this h3 tag. It has been completed with a plausible matrix example and the component is now properly closed and exported. */}
                    <h3 className="text-h3-mobile md:text-h3-tablet lg:text-h3 font-bold text-text-primary mb-6 text-center">진단 매트릭스 (예시: 리더십 역량)</h3>
                    <div className="grid grid-cols-5 text-center text-body-sm font-semibold text-text-secondary">
                        <MatrixCell className="bg-gray-50 col-span-1 rounded-tl-lg">문제요인</MatrixCell>
                        <MatrixCell className="bg-gray-50 col-span-4 rounded-tr-lg">개입 방향</MatrixCell>
                    </div>
                    <div className="grid grid-cols-5 text-center text-body-sm text-text-secondary">
                        <MatrixCell className="bg-gray-50 font-semibold">구조적</MatrixCell>
                        <MatrixCell>조직구조</MatrixCell>
                        <MatrixCell>R&R</MatrixCell>
                        <MatrixCell>의사결정</MatrixCell>
                        <MatrixCell>시스템/제도</MatrixCell>

                        <MatrixCell className="bg-gray-50 font-semibold">역량적</MatrixCell>
                        <MatrixCell>지식/기술</MatrixCell>
                        <MatrixCell>리더십</MatrixCell>
                        <MatrixCell>경험</MatrixCell>
                        <MatrixCell>개인특성</MatrixCell>

                        <MatrixCell className="bg-gray-50 font-semibold">문화적</MatrixCell>
                        <MatrixCell>가치/규범</MatrixCell>
                        <MatrixCell>업무방식</MatrixCell>
                        <MatrixCell>소통</MatrixCell>
                        <MatrixCell>관계</MatrixCell>

                        <MatrixCell className="bg-gray-50 font-semibold rounded-bl-lg">환경적</MatrixCell>
                        <MatrixCell className="rounded-br-lg col-span-4">외부 환경 요인</MatrixCell>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FunnelSection;
