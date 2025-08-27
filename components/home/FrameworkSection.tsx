
import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const elementStyles = {
  '전략': { bg: 'bg-strategy-blue', items: ['리더십 역량', '성과관리'] },
  '인재': { bg: 'bg-talent-orange', items: ['인재경영', '문화혁신'] },
  '프로세스': { bg: 'bg-process-gray', items: ['조직운영', '인사분석'] }
};

const FrameworkItem: React.FC<{ title: string; bgColor: string; items: string[] }> = ({ title, bgColor, items }) => (
  <div className="flex flex-col items-center">
    <div className={`${bgColor} text-white font-semibold py-3 px-6 rounded-lg mb-4 text-h5`}>{title}</div>
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, index) => (
        <div key={index} className="bg-white text-text-secondary py-3 px-6 rounded-lg shadow-md text-center text-body-base">{item}</div>
      ))}
    </div>
  </div>
);

const FrameworkSection: React.FC = () => {
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
            <Container ref={sectionRef} className="text-center">
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                        성과를 만드는 3가지 핵심 요소,<br />6개 영역으로 관리합니다.
                    </h2>
                     <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-16 leading-normal">
                        APX는 성과 창출의 3가지 핵심 원리를 놓치지 않고 관리할 수 있도록,<br />
                        실행 가능한 6개의 핵심 관리 영역으로 구체화했습니다.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
                  {Object.entries(elementStyles).map(([title, { bg, items }], index) => (
                      <div key={title} className={`w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                        <FrameworkItem title={title} bgColor={bg} items={items} />
                      </div>
                  ))}
                </div>
            </Container>
        </section>
    );
};

export default FrameworkSection;