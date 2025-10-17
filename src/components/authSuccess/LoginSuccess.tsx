'use client';
import React from 'react';
import Header from '@/components/Header';
import Language from '@/components/Language';
import Footer from '@/components/Footer';
import Image from 'next/image';

const LoginSuccess: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="sticky top-0 z-50">
        <Language />
        <Header />
      </header>
      <main className=" h-full overflow-y-auto flex-1">
        <div className="flex">
          <Image
            src={'/carousel2.svg'}
            alt="image"
            width={800}
            height={800}
            className="w-[50%] object-cover"
          />

          <div className="w-[50%] flex flex-col gap-3 items-center justify-center">
            <div className="w-5 h-5 rounded-full text-[#008305] border-2 border-[#008305] flex items-center justify-center">
              ✓
            </div>
            <div className="py-6 text-[#404040] font-semibold">
              <h3 className="lg:text-5xl pb-2 text-[#151515]">Welcome back, Helen!</h3>
            </div>

            <div className="flex gap-10">
              <button className="bg-[#802000] text-white font-semibold flex items-center gap-1 p-3 rounded-md mb-10 cursor-pointer">
                <Image
                  src={'/arrow-forward.svg'}
                  alt="arrow icon"
                  width={15}
                  height={15}
                  className="rotate-[180deg]"
                />
                Cancel payment
              </button>

              <button className="bg-[#802000] text-white font-semibold flex items-center gap-1 p-3 rounded-md mb-10 cursor-pointer">
                Continue to payment
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

export default LoginSuccess;
