'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';
import LanguageDropdown from './LanguageDropDown';
import Image from 'next/image';

const Language = () => {
  const { t } = useTranslation('header');
  return (
    <div className="flex justify-between items-center lg:px-20 px-[30px] bg-[#000000] py-5">
      <div className="text-[#CEB780] flex items-center gap-2">
        <Image src={'/call.svg'} alt="logo" width={10} height={10} />
        07712345678
        <p className="lg:pl-10 pl-4">{t('need')}</p>
      </div>
      <LanguageDropdown />
    </div>
  );
};

export default Language;
