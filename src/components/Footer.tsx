'use client';
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { ArrowUpOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const allowedRoutes = ['/login', '/register', '/success', '/welcome'];
  const isAllowedRoute = allowedRoutes.includes(pathname);

  const footerNav = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Rooms', url: '/' },
    { name: 'Events/Meetings', url: '/' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Menu', url: '/' },
    { name: 'Specials', url: '/' },
    { name: 'Careers', url: '/' },
  ];

  //smooth scroll to top

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-[#F9F9F9] py-10 text-[13px]">
      <div className="flex justify-end lg:pr-30 pr-12">
        <button
          onClick={scrollToTop}
          className={`bg-white flex items-center justify-center w-10 h-10 rounded-full text-[#151515] cursor-pointer ${isAllowedRoute ? 'hidden' : ''}`}
        >
          <ArrowUpOutlined />
        </button>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-[8em] px-[20px] gap-[3em] justify-between">
        <div>
          <div>
            <Link href={'/'}>
              <Image src={'/footer-logo.svg'} alt="logo icon" width={50} height={50} />
            </Link>
            <p className="lg:w-100 pt-10">
              Discover the epitome of luxury at Haus. Immerse yourself in opulence across our iconic
              locations in Glasgow, Edinburgh, and London. Unforgettable stays, exquisite dining,
              and unparalleled service await.
            </p>
          </div>
          <div className="py-8">
            <h3 className="text-[#C8803C]">Address:</h3>
            <p>Haus Glasgow: 123 Luxe Avenue,GL1 2HA.</p>
            <p>Haus Edinburgh: 456 Prestige Street,EH3 4AB.</p>
            <p>Haus London: 789 Elegance Road,W1A 1BC.</p>
          </div>
          <Button />
        </div>
        <div className={`${isAllowedRoute ? 'lg:border-1 border-[#404040]' : 'hidden'}`}></div>
        <div>
          <h2 className="text-[#C8803C]">Main</h2>
          {footerNav.map((links, index) => (
            <ul key={index}>
              <Link
                href={links.url}
                className="hover:text-[#C8803C] transition duration-300 leading-[25px]"
              >
                {links.name}
              </Link>
            </ul>
          ))}
        </div>
        <div className={`${isAllowedRoute ? "border-l border-[#404040] pl-3" : ""}`}>
          <h2 className="text-[#C8803C]">Contactus</h2>
          <p>
            Reach out to us at Haus—we are here to assist with any inquiries or to tailor your
            experience for an unparalleled stay.
          </p>

          <div className="flex items-center space-x-2 pt-6">
            <Image src={'/call.svg'} alt="call icon" width={20} height={20} />
            <span>07712345678</span>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Image src={'/gmail.svg'} alt="call icon" width={20} height={20} />
            <span>hello@haus.co.uk</span>
          </div>
        </div>
        <div className={`${isAllowedRoute ? 'border-l border-[#404040] pl-3' : ''}`}>
          <h2 className="text-[#C8803C]">Newsletters</h2>
          <p>Sign up for exclusive news, travel inspo and special offers.</p>
          <form className="flex flex-col gap-5">
            <div className="flex lg:flex-row flex-col pt-5 lg:gap10 gap-5">
              <input
                type="text"
                placeholder="Firstname"
                required
                className="border rounded-sm px-3 h-10"
              />

              <input
                type="text"
                placeholder="Lastname"
                required
                className="border rounded-sm px-3 h-10"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              required
              className="border rounded-sm h-10 px-3"
            />
            <div className="flex space-x-2">
              <input type="checkbox" required />
              <p className="text-[13px]">
                By clicking “Sign me up” you agree to{' '}
                <span className="underline">Haus Privacy Policy and Terms.</span>
              </p>
            </div>
            <button className="bg-[#802000] flex items-center gap-[10px] w-full h-10 rounded-sm justify-center cursor-pointer">
              Sign me up
              <Image src={'/arrow-forward.svg'} alt="arrow right icon" width={15} height={15} />
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-1 border-t-[#F9F9F9] pt-3 mt-5 lg:px-[8em] px-[20px]">
        <p>Copyright © Haus. 2025.</p>
        <div className="flex space-x-6">
          <li className="list-none hover:text-[#C8803C] transition duration-300">Legal notice</li>
          <li className="list-none hover:text-[#C8803C] transition duration-300">Privacy Policy</li>
          <li className="list-none hover:text-[#C8803C] transition duration-300">Terms</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
