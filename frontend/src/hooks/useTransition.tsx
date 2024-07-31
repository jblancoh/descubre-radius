import { useEffect, useState } from "react";

export const baseTransitionClasses = "transition-all duration-[12000ms]";

export const customTransitionStyles = {
  transition: 'opacity 2.5s, transform 2.5s'
};

export const finalYStyles = "opacity-100 translate-y-0"
export const finalXStyles = "opacity-100 translate-x-0"

export const initialYStyles = "opacity-0 translate-y-10"
export const initialXStyles = "opacity-0 translate-x-10"
export const initialYNegativeStyles = "opacity-0 -translate-y-10"
export const initialXNegativeStyles = "opacity-0 -translate-x-10"


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

  return {
    applicableYStyle,
    applicableYNegativeStyle,
    applicableXStyle,
    applicableXNegativeStyle,
    customTransitionStyles
  };
}

export default useTransition;