'use client';
import { useState} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Navs from './Navs';
import Link from 'next/link';
import SModal from './modal/SModal';
import { usePathname } from 'next/navigation';
import MenuDrawer from './drawers/MenuDrawer';
import DrawerButton from './DrawerButton';
import ConfirmBookingDrawer from './drawers/ConfirmBookingDrawer';


const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  // const registerResponse = usePathname();
  const userName = pathname === '/success';
  const name = pathname === '/welcome';

  const { t } = useTranslation('header');
  return (
    <header className="flex justify-between py-5 bg-[#151515E5] text-[#F9F9F9] lg:shadow-md lg:px-[5em] px-[20px]">
      <div className="flex items-center lg:space-x-30">
        <MenuDrawer/>
        <Navs />
        <div className="lg:ml-10 hidden lg:inline-flex">
          <Link href={'/'}>
            <Image src={'/logo.svg'} alt="logo" width={80} height={80} />
          </Link>
        </div>
      </div>
      <div className="inline-flex lg:gap-10 gap-5 text-[18px] font-[400] items-center leading-[27px]">
        {/* <MSearch/> */}
        <button onClick={() => setIsSearchOpen(true)}>search</button>
        <SModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        {userName || name ? (
          <div className="flex gap-1">
            <Image src={'/user1.svg'} alt="logo" width={15} height={15} />
            Hi, Helen
          </div>
        ) : (
          <Link href={'/login'} className="flex items-center gap-2 cursor-pointer">
            <Image src={'/user1.svg'} alt="logo" width={15} height={15} />
            Signin/Join
          </Link>
        )}
        <button className="lg:flex hidden items-center gap-2 bg-[#802000] px-4 py-2 rounded-md hover:bg-[#C8803C] hover:text-white transition duration-300 cursor-pointer">
          {t('book_now')}
          <Image src={'/arrow-forward.svg'} alt="logo" width={20} height={10} />
        </button>
      </div>
    </header>
  );
};

export default Header;
