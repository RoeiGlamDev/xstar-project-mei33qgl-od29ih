import { useEffect, useState } from 'react';

/
 * Custom hook for managing animations in GlamCS cosmetics website.
 * This hook provides elegant and luxurious animations tailored for
 * the cosmetics industry, enhancing user experience with modern designs.
 *
 * @returns {Object} - Contains animation properties and handlers.
 */
export interface AnimationProps {
  isVisible: boolean;
  fadeIn: () => void;
  fadeOut: () => void;
}

export const useAnimation = (): AnimationProps => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /
   * Fade in effect for elements.
   * This is used to smoothly introduce GlamCS product elements on the page.
   */
  const fadeIn = () => {
    setIsVisible(true);
    const element = document.querySelector('.glamcs-animated');
    if (element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    }
  };

  /
   * Fade out effect for elements.
   * This can be used when navigating away from GlamCS product sections.
   */
  const fadeOut = () => {
    const element = document.querySelector('.glamcs-animated');
    if (element) {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
      setTimeout(() => setIsVisible(false), 300); // duration of fade-out
    }
  };

  // Use effect hook to manage animation lifecycle
  useEffect(() => {
    // Example: Trigger fade-in when component mounts
    fadeIn();
    
    // Cleanup function to handle fade-out on unmount
    return () => {
      fadeOut();
    };
  }, []);

  return { isVisible, fadeIn, fadeOut };
};