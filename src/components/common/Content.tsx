'use client';

import React from 'react';
import '@/utils/localization/i18n';
import Banner from '../Banner';

interface IProps {
  children: React.ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => {
  return (
    <div className="lg:w-[calc(100%-337px)] h-full w-full ">
      <div className="h-full w-full relative">
        {children}
      </div>
    </div>
  );
};

export default Content;
