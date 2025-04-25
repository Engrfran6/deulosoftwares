'use client';

import {usePathname, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-9QKM05MSN9', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
