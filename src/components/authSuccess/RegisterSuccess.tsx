'use client';
import React from 'react';
import Header from '@/components/Header';
import Language from '@/components/Language';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RegisterSuccess= () => {
  const router = useRouter();
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="sticky top-0 z-50">
        <Language />
        <Header />
      </header>
      <main className=" h-full overflow-y-auto flex-1">
        <div className="flex flex-col">
          <div className="relative">
            <Image
              src={'/carousel2.svg'}
              alt="image"
              width={800}
              height={800}
              className="w-[100%] object-cover lg:h-[500px] h-[300px] "
            />
            <div className="absolute lg:pt-[15em] pt-[7em] lg:pl-[10em] pl-[2em] text-white inset-0 bg-black/70 text-[20px]">
              <h3 className="lg:text-5xl pb-2">Fans of Haus</h3>
              <p>A unique program for our most esteemed guests</p>
            </div>
          </div>

          <div className="w-[100%] flex flex-col gap-3 items-center justify-center  lg:pt-20 pt-10">
            <div className="w-5 h-5 rounded-full text-[#008305] border-2 border-[#008305] flex items-center justify-center">
              ✓
            </div>
            <div className="py-6 text-[#404040] font-semibold">
              <h3 className="lg:text-5xl pb-2 text-[#151515]">Great to have you, Helen!</h3>
            </div>

            <div className="flex gap-10">
              <button
                onClick={() => router.push('/')}
                className="bg-[#802000] text-white font-semibold flex items-center gap-1 p-3 rounded-md mb-10 cursor-pointer"
              >
                <Image
                  src={'/arrow-forward.svg'}
                  alt="arrow icon"
                  width={15}
                  height={15}
                  className="rotate-[180deg]"
                />
                Continue browsing
              </button>

              <button className="bg-[#802000] text-white font-semibold flex items-center gap-1 p-3 rounded-md mb-10 cursor-pointer">
                Book a Service
                <Image src={'/arrow-forward.svg'} alt="arrow icon" width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RegisterSuccess;
