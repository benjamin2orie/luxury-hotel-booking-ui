'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('header');
  return (
    <div className="bg-[#151515]">
      <div className=" lg:max-w-[1200px] lg:m-auto py-[4em] lg:px-12 px-[20px] lg:leading-[40px] lg:text-[20px] text-[15px] text-[#F9F9F9] font-[200]">
        <p>{t('welcome')}</p>
      </div>
    </div>
  );
};

export default Hero;
