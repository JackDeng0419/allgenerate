'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('38653a79-8a31-4b30-87f8-5d13a0bd3c11');
  }, []);

  return null;
};
