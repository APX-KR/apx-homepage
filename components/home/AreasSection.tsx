
import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const areaStyles: { [key: string]: { border: string; text: string; hoverBg: string; } } = {
    'A': { border: 'border-leadership-navy', text: 'text-leadership-navy', hoverBg: 'hover:bg-leadership-navy/5' },
    'B': { border: 'border-talent-orange', text: 'text-talent-orange', hoverBg: 'hover:bg-talent-orange/5' },
    'C': { border: 'border-operation-gray', text: 'text-operation-gray', hoverBg: 'hover:bg-operation-gray/5' },
    'D': { border: 'border-culture-coral', text: 'text-culture-coral', hoverBg: 'hover:bg-culture-coral/5' },
    'E': { border: 'border-performance-green', text: 'text-performance-green', hoverBg: 'hover:bg-performance-green/5' },
    'F': { border: 'border-analytics-teal', text: 'text-analytics-teal', hoverBg: 'hover:bg-analytics-teal/5' },
};

const AreaCard: React.FC<{ letter: string; title: string; subtitle: string; }> = ({ letter, title, subtitle }) => {
    const style = areaStyles[letter];

    return (
        <div className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 ${style.border} ${style.hoverBg}`}>
            <span className={`text-h3 font-bold ${style.text}`}>{letter}.</span>
            <h3 className="text-h4-mobile md:text-h4-tablet lg:text-h4 font-bold text-text-primary mt-2 leading-tight tracking-tight-title">{title}</h3>
            <p className="text-body-sm text-text-secondary mt-1 leading-snug">{subtitle}</p>
        </div>
    );
};

const AreasSection: React.FC = () => {
    const areas = [
        { letter: 'A', title: '리더십 역량', subtitle: 'Leadership Capability' },
        { letter: 'B', title: '인재경영', subtitle: 'Talent Management' },
        { letter: 'C', title: '조직운영', subtitle: 'Organizational Operation' },
        { letter: 'D', title: '문화혁신', subtitle: 'Culture Innovation' },
        { letter: 'E', title: '성과관리', subtitle: 'Performance Management' },
        { letter: 'F', title: '인사분석', subtitle: 'HR Analytics' },
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
                        성과를 만드는 3가지 원리,<br />6개 영역으로 관리합니다
                    </h2>
                    <div className="text-body-lg text-text-secondary max-w-3xl ml-0 space-y-2 leading-normal">
                        <p>APX는 성과 창출의 3가지 핵심 원리를 놓치지 않고 관리할 수 있도록,</p>
                        <p>실행 가능한 6개의 핵심 관리 영역으로 구체화했습니다.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <div key={area.letter} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                            <AreaCard letter={area.letter} title={area.title} subtitle={area.subtitle} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AreasSection;