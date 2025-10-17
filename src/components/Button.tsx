import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Button = () => {
  const { t } = useTranslation('header');

  return (
    <div>
      <button className="flex items-center lg:justify-start justify-center gap-2 bg-[#802000] px-4 py-2 rounded-md hover:bg-[#C8803C] text-white transition duration-300 cursor-pointer lg:w-35 w-full">
        {t('booking')}
        <Image src={'/arrow-forward.svg'} alt="logo" width={15} height={15} />
      </button>
    </div>
  );
};

export default Button;
