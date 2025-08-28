

import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const infographicData = [
    {
        eng: 'Strategy',
        kor: '전략',
        desc1: '명확한 목표와 방향성 설정으로',
        desc2: '모든 노력을 한 곳으로 집중시킵니다.',
        cx: 120,
        color: 'fill-strategy-blue',
    },
    {
        eng: 'Talent',
        kor: '인재',
        desc1: '탁월한 인재를 확보하고 육성해',
        desc2: '전략 실행의 핵심 동력을 만듭니다.',
        cx: 320,
        color: 'fill-talent-orange',
    },
    {
        eng: 'Process',
        kor: '프로세스',
        desc1: '효율적인 업무 방식으로',
        desc2: '전략-인재 시너지를 극대화합니다.',
        cx: 520,
        color: 'fill-process-gray',
    }
];


const SynergyInfographic: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const fadeInTransition = (delay: number) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
    });
    
    const cy = 120; // Center Y for all elements

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 640 240" className="w-full h-auto" aria-labelledby="infographic-title">
                <title id="infographic-title">성과 운영체제 인포그래픽: 전략, 인재, 프로세스가 상호작용하며 시너지를 냅니다.</title>

                {infographicData.map((item, index) => (
                    <g key={item.eng} style={fadeInTransition(0.5 + index * 0.2)}>
                        <circle cx={item.cx} cy={cy} r="107" strokeWidth="1.5" fill="none" className="stroke-gray-300" />
                        
                        <text x={item.cx} textAnchor="middle">
                            {/* English: Bold, dark gray, moved down */}
                            <tspan x={item.cx} y={cy - 40} className="font-semibold uppercase tracking-wider fill-text-secondary text-caption">
                                {item.eng}
                            </tspan>
                            {/* Korean Title: Bold, larger, moved down */}
                            <tspan x={item.cx} y={cy - 5} className={`font-bold text-h2-mobile ${item.color}`}>
                                {item.kor}
                            </tspan>
                            {/* Korean Description: Regular weight, dark gray, moved down, tighter line spacing */}
                            <tspan x={item.cx} y={cy + 30} className="fill-text-secondary text-body-sm">
                                {item.desc1}
                            </tspan>
                            <tspan x={item.cx} y={cy + 50} className="fill-text-secondary text-body-sm">
                                {item.desc2}
                            </tspan>
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
};


const PhilosophySection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <Container ref={sectionRef} className="text-center">
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                        APX가 정의하는<br />성과 운영체제의 3가지 핵심 요소
                    </h2>
                    <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-normal">
                       성과는 우연이 아닌 '설계된 필연'이어야 합니다.<br />
                       APX는 성과를 만드는 3가지 핵심 요소를 정의하고, 이 요소들이 시너지를 내는 강력한 시스템을 구축합니다.
                    </p>
                </div>
                
                <div className="mt-12 md:mt-16">
                    <SynergyInfographic isVisible={isVisible} />
                </div>
                
                <div className={`flex items-center justify-center gap-4 mt-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-text-primary font-bold">조직 성과</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-apx-growth-green font-bold">=</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-strategy-blue font-bold">전략</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-apx-growth-green font-bold">×</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-talent-orange font-bold">인재</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-apx-growth-green font-bold">×</span>
                    <span className="text-h4-mobile md:text-h4-tablet lg:text-h4 text-process-gray font-bold">프로세스</span>
                </div>
            </Container>
        </section>
    );
};

export default PhilosophySection;