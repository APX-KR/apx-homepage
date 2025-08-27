
import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';

const categoryStyles = {
    "리더십 역량": { bg: 'bg-leadership-navy/10', text: 'text-leadership-navy', border: 'border-leadership-navy' },
    "인재경영": { bg: 'bg-talent-orange/10', text: 'text-talent-orange', border: 'border-talent-orange' },
    "조직운영": { bg: 'bg-operation-gray/10', text: 'text-operation-gray', border: 'border-operation-gray' },
    "문화혁신": { bg: 'bg-culture-coral/10', text: 'text-culture-coral', border: 'border-culture-coral' },
    "성과관리": { bg: 'bg-performance-green/10', text: 'text-performance-green', border: 'border-performance-green' },
    "인사분석": { bg: 'bg-analytics-teal/10', text: 'text-analytics-teal', border: 'border-analytics-teal' },
};

type SolutionCategory = keyof typeof categoryStyles;

interface Solution {
    id: number;
    title: string;
    category: SolutionCategory;
}

const mockSolutions: Solution[] = [
    { id: 1, title: "차세대 리더 파이프라인 구축", category: "리더십 역량" },
    { id: 2, title: "핵심인재 유지 및 관리 전략", category: "인재경영" },
    { id: 3, title: "OKR 기반 성과관리 체계 도입", category: "성과관리" },
    { id: 4, title: "데이터 기반 HR 의사결정", category: "인사분석" },
    { id: 5, title: "수평적 조직문화 구축 워크샵", category: "문화혁신" },
    { id: 6, title: "애자일 조직 운영 모델 설계", category: "조직운영" },
    { id: 7, title: "임원 코칭 및 리더십 개발", category: "리더십 역량" },
    { id: 8, title: "신규 입사자 온보딩 프로세스 개선", category: "인재경영" },
];

const categories = ["All", ...Object.keys(categoryStyles)] as const;
type FilterCategory = (typeof categories)[number];

const InteractiveSection: React.FC = () => {
    const { openContactModal } = useModal();
    const [filter, setFilter] = useState<FilterCategory>("All");
    const [portfolio, setPortfolio] = useState<Solution[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
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


    const filteredSolutions = mockSolutions.filter(s => {
        const categoryMatch = filter === "All" || s.category === filter;
        const searchMatch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });

    const togglePortfolio = (solution: Solution) => {
        setPortfolio(prev =>
            prev.find(p => p.id === solution.id)
                ? prev.filter(p => p.id !== solution.id)
                : [...prev, solution]
        );
    };

    const handlePortfolioSubmit = () => {
        const portfolioItems = portfolio.map(s => `- ${s.title} (${s.category})`).join('\n');
        const message = `솔루션 포트폴리오 문의:\n\n${portfolioItems}`;
        openContactModal(message);
        setShowModal(false); // Close portfolio modal after opening contact modal
    };

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <Container ref={sectionRef}>
                <div className={`text-left mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-4 leading-tighter tracking-tight-title">
                        나만의 솔루션 포트폴리오를 직접 구성해 보세요
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-normal">
                        우리 조직에 필요한 솔루션을 ‘나의 포트폴리오’에 담아 상담을 요청하세요.
                    </p>
                </div>
                
                <div className={`flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow-md border border-border-light transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                     <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-body-sm md:text-body-base font-semibold rounded-full transition-colors duration-300 leading-none ${filter === cat ? 'bg-strategy-blue text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                     <div className="relative w-full md:w-auto">
                        <input 
                            type="text"
                            placeholder="솔루션 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-64 px-4 py-2 border border-border-light rounded-full focus:outline-none focus:ring-2 focus:ring-strategy-blue"
                        />
                    </div>
                </div>


                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {filteredSolutions.map(solution => {
                        const styles = categoryStyles[solution.category];
                        return (
                            <div key={solution.id} className={`bg-white p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border-t-4 ${styles.border}`}>
                                <div>
                                    <span className={`text-caption py-1 px-2 rounded-full font-semibold tracking-wide-caption ${styles.bg} ${styles.text}`}>{solution.category}</span>
                                    <h3 className="text-h5 font-bold text-text-primary mt-2 mb-2 leading-tight tracking-tight-title">{solution.title}</h3>
                                    <p className="text-body-sm text-text-secondary mb-4 leading-snug">솔루션에 대한 핵심 설명이 여기에 들어갑니다.</p>
                                </div>
                                <button
                                    onClick={() => togglePortfolio(solution)}
                                    className={`w-full mt-4 px-4 py-2 text-body-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 leading-none ${portfolio.find(p => p.id === solution.id) ? 'bg-white text-error border-2 border-error' : 'bg-strategy-blue text-white border-2 border-transparent hover:bg-opacity-90'}`}
                                >
                                    {portfolio.find(p => p.id === solution.id) 
                                        ? <><span className="text-xl">-</span> 제거하기</> 
                                        : <><span className="text-xl">+</span> 포트폴리오 추가</>
                                    }
                                </button>
                            </div>
                        )
                    })}
                </div>

                {/* Floating Portfolio */}
                <div className="fixed bottom-8 right-8 z-40 transition-transform duration-300 scale-100">
                    <button onClick={() => setShowModal(true)} className={`bg-apx-growth-green text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-apx-deep-growth transition-all duration-300 ${portfolio.length > 0 ? 'animate-pulse' : ''}`}>
                        <span className="font-bold text-body-base leading-none">포트폴리오 보기</span>
                        <span className="bg-white text-apx-growth-green rounded-full w-8 h-8 flex items-center justify-center font-bold">{portfolio.length}</span>
                    </button>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
                        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                            <div className="p-6 border-b border-border-light flex justify-between items-center">
                                <h3 className="text-h3 font-bold text-strategy-blue leading-tight tracking-tight-title">나의 솔루션 포트폴리오</h3>
                                <button onClick={() => setShowModal(false)} className="text-text-tertiary hover:text-text-primary text-3xl font-light" aria-label="Close modal">&times;</button>
                            </div>
                            <div className="p-6 overflow-y-auto">
                                {portfolio.length > 0 ? (
                                    <ul className="space-y-4">
                                        {portfolio.map(s => (
                                            <li key={s.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md">
                                                <div>
                                                    <p className="font-bold text-body-base text-text-primary">{s.title}</p>
                                                    <p className={`text-body-sm font-semibold ${categoryStyles[s.category].text}`}>{s.category}</p>
                                                </div>
                                                <button onClick={() => togglePortfolio(s)} className="text-error hover:text-red-700 text-sm font-semibold">제거</button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-center text-text-secondary py-8">선택된 솔루션이 없습니다.</p>
                                )}
                            </div>
                            <div className="p-6 border-t border-border-light mt-auto bg-gray-50">
                                <button 
                                    onClick={handlePortfolioSubmit}
                                    className="w-full bg-apx-growth-green text-white py-3 rounded-full font-semibold text-body-base leading-none hover:bg-apx-deep-growth transition-colors disabled:opacity-50" 
                                    disabled={portfolio.length === 0}
                                >
                                    포트폴리오 문의하기
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default InteractiveSection;