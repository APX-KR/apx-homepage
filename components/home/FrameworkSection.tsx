import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const competencies = [
  {
    category: 'LEADERSHIP',
    title: '리더십 역량',
    description: '변화하는 비즈니스 환경에 대응하고 조직을 성공으로 이끄는 리더십 파이프라인을 구축합니다.',
    color: 'text-leadership-navy',
    keywords: ['리더십 파이프라인', '역량 모델링', '임원 코칭'],
  },
  {
    category: 'TALENT',
    title: '인재경영',
    description: '핵심인재를 확보하고 유지하며, 개인의 성장을 조직의 성과로 연결하는 시스템을 설계합니다.',
    color: 'text-talent-orange',
    keywords: ['핵심인재', '채용·육성', '인재유지'],
  },
  {
    category: 'OPERATION',
    title: '조직운영',
    description: '전략 실행을 지원하는 효율적인 조직구조를 설계하고 운영 프로세스를 최적화합니다.',
    color: 'text-operation-gray',
    keywords: ['조직구조 설계', 'R&R', '애자일'],
  },
  {
    category: 'CULTURE',
    title: '문화혁신',
    description: '구성원의 몰입을 이끌어내고 혁신을 장려하는 조직문화를 진단하고 구축합니다.',
    color: 'text-culture-coral',
    keywords: ['조직문화 진단', '핵심가치', '소통 활성화'],
  },
  {
    category: 'PERFORMANCE',
    title: '성과관리',
    description: '조직의 목표와 개인의 목표를 정렬하고, 지속적인 피드백을 통해 성과를 극대화합니다.',
    color: 'text-performance-green',
    keywords: ['OKR', '성과평가', '피드백 시스템'],
  },
  {
    category: 'ANALYTICS',
    title: '인사분석',
    description: '데이터에 기반한 HR 의사결정을 통해 조직 운영의 효과성과 예측 가능성을 높입니다.',
    color: 'text-analytics-teal',
    keywords: ['HR 데이터 분석', '인재 대시보드', '예측 모델링'],
  },
];

const CompetencyCard: React.FC<{ category: string; title: string; description: string; color: string; keywords: string[] }> = ({ category, title, description, color, keywords }) => (
    <div className="bg-white p-6 rounded-lg flex flex-col h-full border border-border-light/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex-grow">
            <span className={`text-caption font-semibold tracking-wide-caption uppercase ${color}`}>{category}</span>
            <h3 className="text-h5 font-bold text-text-primary mt-3 mb-3 leading-tight tracking-tight-title">{title}</h3>
            <p className="text-body-sm text-text-secondary leading-normal">{description}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
                <a href="#" key={keyword} className={`block text-caption font-medium py-1 px-3 rounded-full transition-all duration-200 ${color.replace('text-', 'bg-')}/10 ${color} hover:brightness-95`}>
                    #{keyword}
                </a>
            ))}
        </div>
    </div>
);


const FrameworkSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-bg-subtle-beige overflow-hidden">
            <Container>
                <div className={`max-w-4xl text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                        성과를 만드는 3가지 핵심 요소, 6개 영역으로 관리합니다.
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-normal">
                        APX는 성과 창출의 3가지 핵심 원리를 놓치지 않고 관리할 수 있도록, 실행 가능한 6개의 핵심 관리 영역으로 구체화했습니다.
                    </p>
                </div>

                <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
                    {competencies.map((item, index) => (
                        <div key={index} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${150 + index * 100}ms` }}>
                            <CompetencyCard {...item} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FrameworkSection;