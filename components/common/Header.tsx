import React, { useState, useEffect } from 'react';
import Container from './Container';
import { useModal } from '../../contexts/ModalContext';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-text-secondary hover:text-strategy-blue font-medium text-body-base tracking-tight-title relative group transition-colors duration-300 py-2 leading-tighter"
  >
    {children}
    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-apx-growth-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
  </a>
);

// --- Mega Menu Content Definitions ---

const solutionMegaMenu = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">Approach</h3>
        </div>
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">People & Organization</h3>
            <ul className="space-y-3">
                {['리더십 역량', '인재경영', '조직운영', '문화혁신', '성과관리', '인사분석'].map(item => (
                    <li key={item}><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">{item}</a></li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">Startup</h3>
             <ul className="space-y-3">
                <li><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">경영관리</a></li>
            </ul>
        </div>
    </div>
);

const academyMegaMenuData = {
    "리더십 아카데미": ["차세대 리더 과정", "신임팀장 과정", "임원 코칭"],
    "공통역량 아카데미": ["문제해결 과정", "커뮤니케이션 스킬", "데이터 리터러시"],
    "직무전문 아카데미": ["HR 전문가 과정", "영업대표 과정", "마케터 과정"],
    "조직문화 아카데미": ["조직문화 진단/워크샵", "DE&I 프로그램", "심리적 안정감 워크샵"],
};

const academyMegaMenu = (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {Object.entries(academyMegaMenuData).map(([title, items]) => (
            <div key={title}>
                <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">{title}</h3>
                <ul className="space-y-3">
                    {items.map(item => (
                        <li key={item}><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">{item}</a></li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const megaMenuContent: { [key: string]: React.ReactNode } = {
    solutions: solutionMegaMenu,
    academy: academyMegaMenu,
};


interface HeaderProps {
  onMegaMenuToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMegaMenuToggle }) => {
  const { openContactModal } = useModal();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    onMegaMenuToggle(!!activeMenu);
  }, [activeMenu, onMegaMenuToggle]);

  const navItems = [
    { name: '솔루션', href: '#solutions', megaMenuKey: 'solutions' },
    { name: '아카데미', href: '#academy', megaMenuKey: 'academy' },
    { name: '인사이트', href: '#insights' },
    { name: '성공사례', href: '#cases' },
    { name: '회사소개', href: '#about' },
  ];

  return (
    <div onMouseLeave={() => setActiveMenu(null)} className="sticky top-0 z-50">
      <header className={`transition-shadow duration-300 ${isScrolled && !activeMenu ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''} bg-white/95 backdrop-blur-lg`}>
        <Container className="flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="flex items-center text-apx-growth-green font-bold text-xl">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 100 40" fill="currentColor">
              <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="bold">APX</text>
            </svg>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.name} onMouseEnter={() => setActiveMenu(item.megaMenuKey || null)}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); openContactModal(); }}
              className="px-6 py-2.5 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-transparent hover:text-apx-growth-green hover:border-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
            >
              문의하기
            </a>
          </div>
           <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </Container>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white border-t border-border-light">
              {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="block px-6 py-3 text-body-base font-medium text-text-secondary hover:text-strategy-blue hover:bg-gray-50">{item.name}</a>
              ))}
              <div className="p-4">
                 <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); openContactModal(); setMobileMenuOpen(false); }}
                    className="block w-full text-center px-6 py-2.5 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full"
                  >
                    문의하기
                  </a>
              </div>
            </div>
        </div>
      </header>
      {/* Mega Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${
          activeMenu ? 'max-h-[600px] py-12' : 'max-h-0 py-0'
        }`}
      >
        <Container>
          {activeMenu && megaMenuContent[activeMenu]}
        </Container>
      </div>
    </div>
  );
};

export default Header;