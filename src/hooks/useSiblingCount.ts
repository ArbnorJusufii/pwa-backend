'use client';

import { useEffect, useState } from 'react';

export const useSiblingCount = () => {
  const [siblingCount, setSiblingCount] = useState<number | undefined>();

  useEffect(() => {
    const handleResize = (entries: any) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        setSiblingCount(newWidth > 360 ? 1 : 0);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return siblingCount;
};
