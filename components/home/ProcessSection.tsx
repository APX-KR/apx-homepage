
import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const ProcessStepCard: React.FC<{ step: string; title: string; description: string; color: string;}> = ({ step, title, description, color }) => (
    <div className={`bg-white p-8 rounded-lg shadow-lg text-center border-t-4 ${color}`}>
        <span className={`text-h5 font-bold ${color.replace('border-', 'text-')}`}>{step}</span>
        <h3 className="text-h3-mobile md:text-h3 font-bold text-text-primary my-2 leading-tight tracking-tight-title">{title}</h3>
        <p className="text-body-base text-text-secondary leading-normal">{description}</p>
    </div>
);

const ProcessSection: React.FC = () => {
    const steps = [
        { step: "STEP 1", title: "진단 (Diagnosis)", description: "현황 파악·문제 식별", color: "border-diagnosis-blue" },
        { step: "STEP 2", title: "설계 (Design)", description: "맞춤 솔루션 구성", color: "border-design-purple" },
        { step: "STEP 3", title: "실행 (Execution)", description: "전사 확산·내재화", color: "border-execution-red" }
    ];

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

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <Container ref={sectionRef}>
                <div className={`text-left mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                        아이디어를 실질적 성과로 바꾸는<br/>3단계 성과 창출 프로세스
                    </h2>
                    <p className="text-body-lg text-text-secondary max-w-3xl ml-0 leading-normal">
                        'APX 인사이트 퍼널'을 통해 도출된 명확한 해결책은 보고서에 머무르지 않습니다.<br />
                        우리는 완결성 있는 3단계 프로세스를 통해 실질적인 변화를 만들고, 지속 가능한 시스템으로 내재화합니다.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, index) => (
                         <div key={s.title} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                           <ProcessStepCard {...s} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProcessSection;