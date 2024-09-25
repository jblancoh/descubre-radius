'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Contactus from './ContactusMaster';
import Link from 'next/link';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = footerRef.current;
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className={`${styles.header} flex justify-start items-center p-4`}>
        <Image src="/img/logo_rad.png" alt="Logo" width={100} height={50} />
      </header>

    {/* Sección del Héroe */}
<section
  className="relative bg-cover"
  style={{
    backgroundImage: 'url(/img/gifhero.gif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
  <div className="flex flex-col items-start py-24 px-8 md:p-10 lg:p-12 max-w-[1200px] mx-auto relative z-10">
    <div className="flex flex-col mb-6">
      <div className="bg-red-600 text-white text-xs font-light px-3 py-1 mb-2 inline-block" style={{ width: '112px', borderRadius: '0' }}>
        MASTERCLASS
      </div>
      <h1 className="font-archia font-bold text-5xl md:text-6xl lg:text-7xl mb-2 text-white">
        Road to A.I
      </h1>
      <p className="text-red-500 font-archia text-xl md:text-2xl mb-1">
        Unlock the power of artificial intelligence.
      </p>
      <p className="text-white font-archia text-lg md:text-xl mb-4 max-w-[500px]">
        Combine precision with creativity, offering scalable and relevant insights. Join us on the 'Road to AI' and elevate your expertise.
      </p>
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-xs font-light text-white border border-white px-2 rounded-md">
          FREE
        </span>
        <div className="flex items-center text-xs font-light text-white">
          <Image src="/img/Calendar.png" alt="Calendar" width={20} height={20} />
          <span className="ml-1">October 2024</span>
          <Image src="/img/Ubi.png" alt="Location" width={20} height={20} className="ml-3" />
          <span className="ml-1">TX</span>
        </div>
      </div>
      <button className={styles.ctaButton} onClick={scrollToContactUs}>
        Register in advance!
        <div className={styles.redSquare}>
          <Image src="/img/arrow_white.svg" alt="Arrow" width={14} height={14} objectFit="contain" />
        </div>
      </button>
    </div>
  </div>
</section>

{/* Sección de Aprendizaje */}
<section className="py-24 px-8 md:px-12 lg:px-16 bg-black">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Contenedor Izquierdo */}
    <div className="space-y-6 lg:p-12">
      <h2 className="text-red-500 font-archia text-3xl text-left">You will learn to</h2>
      <div className="w-16 h-0.5 bg-red-500"></div>
      <p className="text-white font-archia text-2xl text-left">
      Prepare managers on how to develop a strategic vision for the implementation of AI in the organization, lead digital transformation through AI and take informed investment and asset management decisions on AI projects.
      </p>
      <div className="flex items-center space-x-2 justify-start">
        <span className="text-xs font-light text-white border border-white px-2 rounded-md">
          Topics
        </span>
      </div>

      <ul className="list-disc pl-5 space-y-1 text-white font-open-sans text-lg">
        <li>What is artificial intelligence?</li>
        <li>Use vs integrate vs build</li>
        <li>State of analytical maturity</li>
        <li>What does it take to do AI?</li>
        <li>How to prioritize AI projects?</li>
        <li>Industrial use cases</li>
      </ul>
    </div>

    {/* Contenedor Derecho */}
    <div className="bg-[#181818] p-6 rounded-lg space-y-4">
      <div className="flex items-center">
        <Image src="/img/speaker.png" alt="Speaker" width={140} height={140} className="rounded-full" />
        <div className="ml-4">
          <span className="text-xs font-light text-white border border-white px-2 rounded-md">
            Speaker
          </span>
          <h3 className="text-red-500 font-archia text-2xl flex items-center">
            Edgar Treviño
            <a href="https://www.linkedin.com/in/edgartrevino/" target="_blank" rel="noopener noreferrer" className="ml-2">
              <Image src="/img/link.png" alt="LinkedIn" width={20} height={20} />
            </a>
          </h3>
        </div>
      </div>
      <p className="text-white font-open-sans text-lg">
      Native Digital Technologist with more than 20 years of experience as a leader in the areas and teams of Data & Analytics, Product, Digital Channels & Platforms, Digital Services and New Business Development for Mexico and Latam.
      </p>
      <p className="text-white font-open-sans text-lg">
      Digital transformation expert, with experience in designing and building Excellence Centers, implementing agile frameworks, creating prioritization models and strategic alignment, as well as generating value for the business. 
      </p>
      <p className="text-white font-open-sans text-lg">
      With extensive experience in Data Products, Analytical Services and Digital Products in the telecommunications, retail and banking industries.
      </p>
    </div>
  </div>
</section>


      {/* Nueva Sección */}
      <section className="bg-[#0F0F0F] py-24 px-8 md:px-12 lg:px-16 text-center">
        <h2 className="text-red-500 font-archia text-4xl md:text-5xl mb-2">
        Lead the data revolution
        </h2>
        <p className="text-white font-archia text-3xl md:text-4xl">
        with AI-driven innovation
        </p>
      </section>

      <Contactus ref={contactUsRef} />

      {/* Footer */}
      <footer ref={footerRef} className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <Image src="/img/logo_rad.png" alt="Logo" width={100} height={50} />
            <div className={styles.footerAddress}>
              <div>910 S. Pearl Expressway</div>
              <div>Dallas, TX</div>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerCertifications}>
            <div>Certifications</div>
            <div className={styles.certificationsImages}>
              <Image src="/img/footer_img1.png" alt="Certification 1" width={71} height={28} />
              <Image src="/img/footer_img2.png" alt="Certification 2" width={105} height={27} />
            </div>
            <div className={styles.certificationsImages}>
              <Image src="/img/footer_img3.png" alt="Certification 3" width={58} height={31} />
              <Image src="/img/footer_img4.png" alt="Certification 4" width={93} height={27} />
            </div>
          </div>
        </div>

        <div className={`${styles.footerSection} ${styles.footerWords} ${isVisible ? styles.animate : ''}`}>
          <div className={styles.word}><span>R</span>evolutionary</div>
          <div className={styles.word}><span>A</span>daptative</div>
          <div className={styles.word}><span>D</span>isruptive</div>
          <div className={styles.word}><span>I</span>ntegrated</div>
          <div className={styles.word}><span>U</span>ser-Centered</div>
          <div className={styles.word}><span>S</span>trategic</div>
        </div>
      </footer>

      <div className={styles.footerCopyright}>
    <div className={styles.textContainer}>
      <span>© 2024 Radius USA. All Rights Reserved. | </span>
      <Link href="https://radiustech.us/privacy-policy" className={styles.link}>Privacy Policy</Link>
      <span className="mx-2">|</span>
      <Link href="https://radiustech.us/privacy-policy" className={styles.link}>Terms of Use</Link>
    </div>
    <div className={styles.socialLogos}>
      <a href="https://www.facebook.com/DescubreRadius/" target="_blank" rel="noopener noreferrer">
        <Image src="/img/instagram.png" alt="Instagram" width={24} height={24} />
      </a>
      <a href="https://www.instagram.com/descubreradius/" target="_blank" rel="noopener noreferrer">
        <Image src="/img/facebook.png" alt="Facebook" width={24} height={24} />
      </a>
      <a href="https://www.twitter.com/DescubreRadius/" target="_blank" rel="noopener noreferrer">
        <Image src="/img/x.png" alt="X" width={24} height={24} />
      </a>
      <a href="https://www.linkedin.com/company/descubreradius/" target="_blank" rel="noopener noreferrer">
        <Image src="/img/linkedin.png" alt="LinkedIn" width={24} height={24} />
      </a>
    </div>
  </div>
    </div>
  );
};

export default HomePage;
