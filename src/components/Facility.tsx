'use client';
import React, { ReactElement } from 'react';
import Button from './Button';
import { MdPrint } from 'react-icons/md';
import { CiWifiOn } from 'react-icons/ci';
import { ImPower } from 'react-icons/im';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineDining } from 'react-icons/md';
import { FaPersonSwimming } from 'react-icons/fa6';
import { CgGym } from 'react-icons/cg';
import { SlScreenDesktop } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';

interface Facilities {
  id: number;
  icon: ReactElement;
  name: string;
}

const Facility = () => {
  const { t } = useTranslation('header');

  const icons: Facilities[] = [
    { id: 1, icon: <CiWifiOn className="text-[#AD783C]" />, name: 'Free WiFi' },
    { id: 2, icon: <IoFastFoodOutline className="text-[#AD783C]" />, name: 'Breakfast' },
    { id: 3, icon: <MdOutlineDining className="text-[#AD783C]" />, name: 'Dinning' },
    { id: 4, icon: <MdPrint className="text-[#AD783C]" />, name: 'Print Services' },
    { id: 5, icon: <ImPower className="text-[#AD783C]" />, name: '24/7 Power' },
    { id: 6, icon: <FaPersonSwimming className="text-[#AD783C]" />, name: 'Swimming pool' },
    { id: 7, icon: <CgGym className="text-[#AD783C]" />, name: 'Gym' },
    { id: 8, icon: <SlScreenDesktop className="text-[#AD783C]" />, name: 'Workspace' },
  ];
  return (
    <div className="bg-[#F6F6F6] ">
      <div className="flex lg:flex-row flex-col-reverse lg:justify-between gap-10 lg:gap-0 py-10 lg:max-w-[1200px] lg:m-auto lg:px-12 px-[20px] ">
        <div>
          <h2 className="lg:text-5xl text-3xl lg:w-120">{t('facility')}</h2>
          <p className="lg:w-100 py-10">{t('enjoy')}</p>
          <Button />
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-3 gap-5">
          {icons.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] shadow-md rounded-md flex
                 flex-col items-center justify-center text-center pt-5 pb-2 w-24 h-24 px-2"
            >
              {item.icon}
              <p className="px-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
