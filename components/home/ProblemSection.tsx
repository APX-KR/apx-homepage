import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const ProblemSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-bg-subtle-beige overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 lg:gap-24">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className={`text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-8 leading-tighter tracking-tight-title transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            모든 위대한 성과는<br />강력한 ‘운영체제’에서 시작됩니다
                        </h2>
                        <p className={`text-body-base text-text-secondary leading-normal transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            뛰어난 하드웨어도 운영체제 없이는 무용지물입니다.<br />
                            방향이 다른 노력들은 결코 시너지를 낼 수 없습니다.<br />
                            조직의 성과 역시 그 근간을 이루는 핵심 운영 원리가 필요하며,<br />
                            APX는 바로 그 '성과 운영체제'의 기본 원리를 정의하는 것에서 출발합니다.
                        </p>
                    </div>
                    {/* Image Content */}
                    <div className={`md:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <img 
                            src="https://storage.googleapis.com/apxhomepage-asset/Rocket.png" 
                            alt="성과 운영체제 개념 이미지" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            style={{aspectRatio: '1/1'}}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProblemSection;