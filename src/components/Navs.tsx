import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Navs = () => {
  const pathname = usePathname();
  const { t } = useTranslation('header');

  const navLink = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Stay', url: '/stay' },
    { name: 'Dine', url: '/dine' },
    { name: 'Spa', url: '/spa' },
    { name: 'Gallery', url: '/gallery' },
  ];
  return (
    <div className="lg:flex hidden gap-5 text-[18px] font-[400] leading-[27px] ">
      {navLink.map((link, index) => (
        <ul key={index} className={` ${pathname === link.url ? 'text-50 text-[#C8803C]' : ''}`}>
          <Link href={link.url}>{t(link.name)}</Link>
        </ul>
      ))}
    </div>
  );
};

export default Navs;
