import { useEffect, useState } from 'react';
import { TABLET_BREAKPOINT } from 'utils/constants';

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= TABLET_BREAKPOINT
  );
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= TABLET_BREAKPOINT);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return isDesktop;
}
