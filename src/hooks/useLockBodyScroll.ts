import { useLayoutEffect } from 'react';

// This hook toggles the 'overflow' CSS property of the body element to 'hidden' or 'auto'
const useLockBodyScroll = (): void => {
  useLayoutEffect(() => {
    // Store original body overflow value to restore it later
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
};

export default useLockBodyScroll;
