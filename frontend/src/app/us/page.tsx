'use client'
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Card from './card';
import Contactus from './Contactus';

const HomePage = () => {
  const cardData = [
    {
      title: "Data Solutions",
      subtitle: "We transform your data into insights that drive growth.",
      imageSrc: "/img/imgcard1.png",
      details: [
        "Data Platform Architecture",
        "Big Data Engineering & Analytics",
        "Data Engineering (Integration & Modeling)",
        "Self-Service Data Layer Enablement",
        "Enterprise Data Management\n(Data Governance & Data Quality)"
      ],
      textColor: "#000000"
    },
    {
      title: "Analytic Solutions",
      subtitle: "Unlock insights to drive performance and innovation.",
      imageSrc: "/img/imgcard2.png",
      details: [
        "Data Platform Architecture",
        "Big Data Engineering & Analytics",
        "Data Engineering (Integration & Modeling)",
        "Self-Service Data Layer Enablement",
        "Enterprise Data Management (Data Governance & Data Quality)"
      ],
      textColor: "#FFFFFF"
    },
    {
      title: "Design Strategy",
      subtitle: "Craft solutions that align with your vision and drive success.",
      imageSrc: "/img/imgcard3.png",
      details: [
        "Data Platform Architecture",
        "Big Data Engineering & Analytics",
        "Data Engineering (Integration & Modeling)",
        "Self-Service Data Layer Enablement",
        "Enterprise Data Management (Data Governance & Data Quality)"
      ],
      textColor: "#000000"
    },
    {
      title: "Bussines Solutions",
      subtitle: "Optimize operations and boost efficiency.",
      imageSrc: "/img/imgcard4.png",
      details: [
        "Data Platform Architecture",
        "Big Data Engineering & Analytics",
        "Data Engineering (Integration & Modeling)",
        "Self-Service Data Layer Enablement",
        "Enterprise Data Management (Data Governance & Data Quality)"
      ],
      textColor: "#FFFFFF"
    },
    {
      title: "Software Factory",
      subtitle: "Build software that drives results and fits your vision.",
      imageSrc: "/img/imgcard5.png",
      details: [
        "Data Platform Architecture",
        "Big Data Engineering & Analytics",
        "Data Engineering (Integration & Modeling)",
        "Self-Service Data Layer Enablement",
        "Enterprise Data Management (Data Governance & Data Quality)"
      ],
      textColor: "#FFFFFF"
    },
    // Agrega aquí los otros 7 objetos de tarjeta con datos personalizados si es necesario
  ];
  
  


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
              <button className={styles.ctaButton}>
               Start your transformation today
                <div className={styles.redSquare}>
                <Image src="/img/arrow_white.svg" alt="Arrow" width={14} height={14}objectFit="contain" />
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
    <div className={styles.cardsContainer}>
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
  </div>
</section>

<section className={styles.modularSolutionsSection}>
      <div className={styles.leftContainer}>
        <h2 className={styles.sectionTitle}>Modular Holistic Solutions</h2>
        <p className={styles.sectionSubtitle}>
          Seamlessly integrate adaptable solutions designed to address diverse needs and drive comprehensive growth. Our modular approach ensures flexibility and scalability, creating value that evolves with your business.
        </p>
        <button className={styles.ctaButton}>Discover how it works
        <div className={styles.redSquare}>
                <Image src="/img/arrow_white.svg" alt="Arrow" width={14} height={14}objectFit="contain" />
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
      {/* Aquí van los logos */}
      {Array.from({ length: 18 }).map((_, index) => (
        <img
          key={index}
          src={`/img/logo${index + 1}.png`} // Cambia la ruta a tus imágenes
          alt={`Logo ${index + 1}`}
          className={styles.logo}
        />
      ))}
      {/* Duplicar los logos para que el efecto de desplazamiento sea continuo */}
      {Array.from({ length: 18 }).map((_, index) => (
        <img
          key={`dup-${index}`}
          src={`/img/logo${index + 1}.png`} // Cambia la ruta a tus imágenes
          alt={`Logo ${index + 1}`}
          className={styles.logo}
        />
      ))}
    </div>
  </div>
</section>

       <Contactus />


      {/* Footer */}
      <footer className={styles.footer}>
        {/* Footer Section 1: Logo */}
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <Image src="/img/logo_rad.png" alt="Logo" width={100} height={50} />
          </div>
        </div>

        {/* Footer Section 2: Certifications */}
        <div className={styles.footerSection}>
          <div className={styles.footerCertifications}>
            <div>Certifications</div>
            <div className={styles.certificationsImages}>
              <Image src="/img/footer_img1.png" alt="Certification 1" width={71} height={28} />
              <Image src="/img/footer_img2.png" alt="Certification 2" width={105} height={27}/>
             
            </div>
            <div className={styles.certificationsImages}>
              
              <Image src="/img/footer_img3.png" alt="Certification 3" width={58} height={31} />
              <Image src="/img/footer_img4.png" alt="Certification 4" width={93} height={27} />
            </div>
          </div>
        </div>

        {/* Footer Section 3: Words */}
        <div className={styles.footerSection}>
          <div className={styles.footerWords}>
            <div className={styles.word}>
              <span>R</span>evolutionary
            </div>
            <div className={styles.word}>
              <span>A</span>daptative
            </div>
            <div className={styles.word}>
              <span>D</span>isruptive
            </div>
            <div className={styles.word}>
              <span>I</span>ntegrated
            </div>
            <div className={styles.word}>
              <span>U</span>ser-Centered
            </div>
            <div className={styles.word}>
              <span>S</span>trategic
            </div>
          </div>
        </div>
      </footer>
   {/* Copyright and Social Media Section */}
{/* Copyright and Social Media Section */}
<div className={styles.copyCont}>
  <div className={styles.footerCopyright}>
    <span>© 2024 Copyright</span>
    <div className={styles.socialLogos}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Image src="/img/instagram.png" alt="Instagram" width={24} height={24} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src="/img/facebook.png" alt="Facebook" width={24} height={24} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <Image src="/img/x.png" alt="X" width={24} height={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Image src="/img/linkedin.png" alt="LinkedIn" width={24} height={24} />
      </a>
    </div>
  </div>
</div>



    </div>
  );
};

export default HomePage;
