'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Heromain = () => {
  const router = useRouter();
  const { t } = useTranslation('header');

  return (
    <div className="relative">
      <Image
        src={'/carousel2.svg'}
        alt="logo"
        width={1920}
        height={600}
        className="w-[100%] lg:h-[500px] object-cover z-10"
      />
      <div className="absolute inset-y-0 left-0 lg:w-180 w-full lg:bg-black/70 bg-black/50" />
      <div className="absolute inset-y-0 left-0 lg:w-300 w-[100%] bg-gradient-to-r lg:from-black/100 from-black/90 to-transparent z-10" />

      <div className="z-100 absolute top-0 left-0 right-0 inset-0 top-0 bottom-0 flex flex-col justify-center text-white lg:md:p-10 lg:pt-60 pt-20 lg:max-w-[1200px] lg:m-auto lg:px-12 px-[20px]">
        <p className="lg:w-100">{t('become')}</p>
        <button
          onClick={() => router.push('/stay')}
          className="flex items-center gap-2 bg-[#802000] px-4 py-2 rounded-md w-40
               text-white transition duration-300 cursor-pointer mt-4"
        >
          {' '}
          Become a fan
          <Image src={'/arrow-forward.svg'} alt="logo" width={15} height={15} />
        </button>
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default Heromain;
