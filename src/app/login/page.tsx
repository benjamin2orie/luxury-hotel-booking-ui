'use client';
import React, { useState } from 'react';
import { LoginProps, FanProps } from '@/types/types';
import Header from '@/components/Header';
import Language from '@/components/Language';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { IoEyeOffOutline } from 'react-icons/io5';
import { FiEye } from 'react-icons/fi';
import { MdOutlineBed } from 'react-icons/md';
import { MdOutlineBedtime } from 'react-icons/md';
import { MdOutlineLunchDining } from 'react-icons/md';
import { CiWifiOn } from 'react-icons/ci';
import { IoSunnyOutline } from 'react-icons/io5';
import { MdOutlineIron } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { PiFlowerLotusLight } from 'react-icons/pi';

const FanObject: FanProps[] = [
  { id: 1, icon: <MdOutlineLunchDining />, name: 'Daily Breakfast' },
  { id: 2, icon: <IoSunnyOutline />, name: 'Early Check-in' },
  { id: 3, icon: <CiWifiOn />, name: 'Streaming WiFi' },
  { id: 4, icon: <MdOutlineBedtime />, name: 'Late Check-out' },
  { id: 5, icon: <MdOutlineBed />, name: 'Room Upgrade' },
  { id: 6, icon: <MdOutlineIron />, name: 'Laundry Services' },
  { id: 7, icon: <PiFlowerLotusLight />, name: 'Dining or Spa credit' },
  { id: 8, icon: <BiLike />, name: 'Celebratory Treat' },
];

const page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginProps>({
    name: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isFormComplete = !formData.name || !formData.password || !formData.rememberMe;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials or server error');
      }

      const result = await response.json();
      console.log(result);
      setSuccess(true);
    } catch (err) {
      setError('faild');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="sticky top-0 z-50">
        <Language />
        <Header />
      </header>
      <main className=" h-full overflow-y-auto flex-1">
        <div className="flex lg:flex-row flex-col">
          <Image
            src={'/carousel2.svg'}
            alt="image"
            width={800}
            height={800}
            className="lg:w-[50%] w-[100%] lg:inline-flex hidden object-cover"
          />

          <div className="lg:w-[50%] w-[100%] flex flex-col lg:px-[6em] px-[20px] lg:gap-10 lg:pt-[5em]">
            <div className="py-6 text-[#404040] font-semibold">
              <h3 className="text-3xl lg:pb-2 text-[#151515]">I’m a Fan</h3>
              <p className="lg:pt-10 pt-5">
                Sign in to explore your exclusive “Fans of Haus” benefits or book your next
                adventure.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
                <div className="w-full">
                  {/* <label htmlFor="name" className="block font-medium">Name</label> */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                    required
                  />
                </div>

                <div className="relative flex w-full">
                  <div className="w-full">
                    {/* <label htmlFor="password" className="block font-medium">Password</label> */}
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border border-gray-200 pl-3 pr-15 py-2 rounded outline-none"
                      required
                    />
                  </div>
                  <button
                    className="absolute right-3 cursor-pointer top-3 border-none outline-none"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FiEye /> : <IoEyeOffOutline />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="w-5 h-5 border border-[#C8803C] rounded cursor-pointer flex items-center justify-center
                    peer-checked:bg-[#C8803C]"
                  >
                    {/* Optional checkmark */}
                    {formData.rememberMe && <span className="text-white text-sm font-bold">✓</span>}
                  </label>
                  <span className="ml-2">Remember me</span>
                </div>
                <p className="text-[#C8803C] underline">forgot password</p>
              </div>

              <button
                type="submit"
                disabled={loading || isFormComplete}
                className={`w-full text-white py-2 rounded cursor-pointer disabled:cursor-not-allowed ${isFormComplete ? 'bg-[#7A7A7A]' : 'bg-black'}`}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">Login successful!</p>}
            </form>

            <div className='pt-10'>
              <h2 className="text-[#151515] text-3xl text-semibold">Become a Fan</h2>
              <p className="text-[#404040] font-semibold lg:pt-10 pt-3">
                Join Fans of Haus to receive exclusive incentives on each stay as well as
                recognition from Haus network of partners. When you make a reservation online, you
                can select from two extra bonuses
              </p>
              <div className="grid grid-cols-2 py-[4em] gap-5">
                {FanObject.map((item) => (
                  <div key={item.id} className="flex items-center text-[#AD783C] gap-1">
                    {item.icon}
                    <p className="text-[#404040] text-[13px] lg:text-[16px]">{item.name}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#802000] text-white font-semibold flex items-center gap-1 p-3 rounded-md mb-10 cursor-pointer">
                Join Now
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

export default page;
