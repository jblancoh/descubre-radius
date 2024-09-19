'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Card from './card';
import Contactus from './Contactus';
import { cardData } from './cardData'; // Import the card data

const HomePage = () => {
  const scrollThumbRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = cardsContainerRef.current;
      const scrollThumb = scrollThumbRef.current;

      if (scrollContainer && scrollThumb) {
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollPercentage = scrollContainer.scrollLeft / scrollWidth;
        const thumbPosition = scrollPercentage * (scrollContainer.clientWidth - scrollThumb.clientWidth);
        scrollThumb.style.transform = `translateX(${thumbPosition}px)`;
      }
    };

    const scrollContainer = cardsContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
      <header className={styles.header}>
        <Image src="/img/logo_rad.png" alt="Logo" width={100} height={50} />
      </header>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextWrapper}>
            <div className={styles.heroTextLeft}>
              <div className={styles.heroEmpowering}>Empowering</div>
              <div className={styles.heroInnovation}>
                Inno<span className={styles.heroRedV}>v</span>ation
              </div>
            </div>
            <div className={styles.heroDescription}>
              <div className={styles.redRectangle}></div>
              From the seamless integration of digital solutions to the data-driven decisions that propel industries forward, we transform challenges into opportunities. Whether it's optimizing processes, innovating products, or enhancing customer experiences, together, we create the future where businesses thrive.
              <button className={styles.ctaButton} onClick={scrollToContactUs}>
                Start your transformation today
                <div className={styles.redSquare}>
                  <Image src="/img/arrow_white.svg" alt="Arrow" width={14} height={14} objectFit="contain" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsContent}>
          <div className={styles.titlesContainer}>
            <h2 className={styles.solutionsTitle}>Our Solutions</h2>
            <p className={styles.solutionsSubtitle}>
              We offer comprehensive, agile services designed to accelerate your business's growth and deliver lasting value.
            </p>
          </div>
          <div className={styles.cardsContainer} ref={cardsContainerRef}>
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                imageSrc={card.imageSrc}
                details={card.details}
                textColor={card.textColor}
              />
            ))}
          </div>
          
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollThumb} ref={scrollThumbRef}></div>
          </div>
        </div>
      </section>

      <section className={styles.modularSolutionsSection}>
        <div className={styles.leftContainer}>
          <h2 className={styles.sectionTitle}>Modular Holistic Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Seamlessly integrate adaptable solutions designed to address diverse needs and drive comprehensive growth. Our modular approach ensures flexibility and scalability, creating value that evolves with your business.
          </p>
          <button className={styles.ctaButton} onClick={scrollToContactUs}>Discover how it works
            <div className={styles.redSquare}>
              <Image src="/img/arrow_white.svg" alt="Arrow" width={14} height={14} objectFit="contain" />
            </div>
          </button>
        </div>
        <div className={styles.rightContainer}>
          <Image 
            src="/img/imgholistic.png" 
            alt="Solution Image" 
            width={400} 
            height={300} 
            className={styles.holisticImage} 
          />
        </div>
        <div className={styles.svgContainer}>
          <Image src="/img/elipse1.svg" alt="Ellipse" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className={styles.brandsSection}>
        <h2 className={styles.brandsTitle}>
          Brands that have trusted us <span className={styles.trustedUs}>us</span>
        </h2>
        <div className={styles.gallery}>
          <div className={styles.logos}>
            {Array.from({ length: 18 }).map((_, index) => (
              <img
                key={index}
                src={`/img/logo${index + 1}.png`} 
                alt={`Logo ${index + 1}`}
                className={styles.logo}
              />
            ))}
            {Array.from({ length: 18 }).map((_, index) => (
              <img
                key={`dup-${index}`}
                src={`/img/logo${index + 1}.png`} 
                alt={`Logo ${index + 1}`}
                className={styles.logo}
              />
            ))}
          </div>
        </div>
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

      <div className={styles.copyCont}>
        <div className={styles.footerCopyright}>
          <span>© 2024 Copyright</span>
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
    </div>
  );
};

export default HomePage;
