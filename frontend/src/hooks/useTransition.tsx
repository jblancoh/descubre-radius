import { useEffect, useState } from "react";

export const baseTransitionClasses = "transition-all duration-[12000ms]";

export const customTransitionStyles = {
  transition: 'opacity 2.5s, transform 2.5s'
};

export const showUp = "opacity-100"
export const hide = "opacity-0"

export const finalYStyles = `${showUp} translate-y-0`
export const finalXStyles = `${showUp} translate-x-0`

export const initialYStyles = `${hide} translate-y-10`
export const initialXStyles = `${hide} translate-x-10`
export const initialYNegativeStyles = `${hide} -translate-y-10`
export const initialXNegativeStyles = `${hide} -translate-x-10`

export const inicialJumpIn = `${hide} ease-in-out transform scale-0`
export const middleJumpIn = `${showUp} ease-in-out transform scale-110`
export const finalJumpIn = `${showUp} ease-in-out transform scale-100`

const useTransition = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bounceOut, setBounceOut] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setBounceOut(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  
  const applicableYStyle = `${baseTransitionClasses} ${isVisible ? finalYStyles : initialYStyles}`
  const applicableXStyle = `${baseTransitionClasses} ${isVisible ? finalXStyles : initialXStyles}`
  const applicableYNegativeStyle = `${baseTransitionClasses} ${isVisible ? finalYStyles : initialYNegativeStyles}`
  const applicableXNegativeStyle = `${baseTransitionClasses} ${isVisible ? finalXStyles : initialXNegativeStyles}`
  const appearingStyle = `${baseTransitionClasses} ${isVisible ? showUp : hide}`
  const applicableJumpInAnimation = `${baseTransitionClasses} ${isVisible ? bounceOut ? finalJumpIn : middleJumpIn : inicialJumpIn}`

  return {
    applicableYStyle,
    applicableYNegativeStyle,
    applicableXStyle,
    applicableXNegativeStyle,
    applicableJumpInAnimation,
    appearingStyle,
    customTransitionStyles
  };
}

export default useTransition;