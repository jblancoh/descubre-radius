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


const useTransition = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false);

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

  
  const applicableYStyle = `${baseTransitionClasses} ${isVisible ? finalYStyles : initialYStyles}`
  const applicableXStyle = `${baseTransitionClasses} ${isVisible ? finalXStyles : initialXStyles}`
  const applicableYNegativeStyle = `${baseTransitionClasses} ${isVisible ? finalYStyles : initialYNegativeStyles}`
  const applicableXNegativeStyle = `${baseTransitionClasses} ${isVisible ? finalXStyles : initialXNegativeStyles}`
  const appearingStyle = `${baseTransitionClasses} ${isVisible ? showUp : hide}`

  return {
    applicableYStyle,
    applicableYNegativeStyle,
    applicableXStyle,
    applicableXNegativeStyle,
    appearingStyle,
    customTransitionStyles
  };
}

export default useTransition;