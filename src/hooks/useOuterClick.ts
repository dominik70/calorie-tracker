import { useRef, useEffect } from 'react';

export const useOuterClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const clickListener = (e: MouseEvent) => {
    const el = ref.current;

    if (!el || el.contains(e.target as Node)) {
      return;
    }

    callback();
  };

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(`mousedown`, clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener(`mousedown`, clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return ref;
};
