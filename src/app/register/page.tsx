'use client';
import React, { useState } from 'react';
import { RegisterProps } from '@/types/types';
import Header from '@/components/Header';
import Language from '@/components/Language';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { IoEyeOffOutline } from 'react-icons/io5';
import { FiEye } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [formData, setFormData] = useState<RegisterProps>({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    emailConfirmation: '',
    country: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    servicePolicy: false,
    policyAgreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelect = () => setIsOpen((prev) => !prev);
  const handleCountrySelect = () => setIsCountry((prev) => !prev);

  const handleSelectInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log('Selected:', e.target.value);
    setIsOpen(false);
    setIsCountry(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormComplete = !formData.firstname || !formData.password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const passwordNotMatch = formData.password !== formData.confirmPassword;
    if (passwordNotMatch) {
      alert('Password does not match');
      return;
    }

    if (formData.email !== formData.emailConfirmation) {
      alert('email does not match');
      return;
    }

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
      console.log(result)
      setSuccess(true);
    } catch (err) {
      setError('faild');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const passwordNotMatch = formData.password !== formData.confirmPassword;

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="sticky top-0 z-50">
        <Language />
        <Header />
      </header>
      <main className=" h-full overflow-y-auto flex-1">
        <div className="flexs flex-cols">
          <div className="relative">
            <Image
              src={'/carousel2.svg'}
              alt="image"
              width={800}
              height={800}
              className="object-cover lg:w-full lg:h-[500px] h-[300px]"
            />
            <div className="absolute top-0 inset-0 bg-black/50 lg:pt-[20em] pt-[10em] lg:pl-[10em] pl-[20px] text-white">
              <h3 className="font-semibold text-[30px]">Fans of Haus</h3>
              <p>A unique program for our most esteemed guests</p>
            </div>
          </div>

          <div className="flex flex-col lg:px-[10em] px-[20px] lg:gap-5 lg:pt-[5em] pt-[2em]">
            <div className="py-6 text-[#404040] font-semibold">
              <h3 className="lg:text-3xl pb-2 text-[#151515]">Become a Fan of Haus</h3>
              <p className="lg:pt-10 pt-3 text-[#C80000] text-[12px]">*All fields are required</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 lg:w-[70%] w-[100%] pb-20"
            >
              <div className="flex flex-col gap-10">
                <div className="w-full">
                  <div className="relative flex" onClick={handleSelect}>
                    <select
                      name="title"
                      id="title"
                      value={formData.title}
                      onChange={handleSelectInput}
                      // onFocus={()=> setIsOpen(true)}
                      // onBlur={() => setIsOpen(false)}
                      className="w-full appearance-none outline-none cursor-pointer border border-gray-200 h-[40px] px-3 rounded"
                    >
                      <option value="">mr</option>
                      <option value="mrs">mrs</option>
                    </select>

                    <IoChevronDown
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>

                  <div className="flex pt-10 lg:gap-10 gap-5">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                    required
                  />

                  <input
                    type="email"
                    name="emailConfirmation"
                    id="emailConfirmation"
                    placeholder="email confirmation"
                    value={formData.emailConfirmation}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                    required
                  />
                </div>
                <div className="flex gap-10">
                  <div className="relative w-full" onClick={handleCountrySelect}>
                    <select
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleSelectInput}
                      className="w-full appearance-none outline-none cursor-pointer border border-gray-200 h-[40px] px-3 rounded"
                    >
                      <option value="">UK</option>
                      <option value="Nigeria">Nigera</option>
                    </select>
                    <IoChevronDown
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none ${isCountry ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>

                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 rounded outline-none"
                    required
                  />
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
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

                  <div className="relative flex w-full">
                    <div className="w-full">
                      {/* <label htmlFor="password" className="block font-medium">Password</label> */}
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full border ${passwordNotMatch ? 'border-red-500' : 'border-gray-200'} pl-3 pr-15 py-2 rounded outline-none`}
                        required
                      />
                    </div>
                    <button
                      className="absolute right-3 cursor-pointer top-3 border-none outline-none"
                      type="button"
                      onClick={() => setShowConfirmPassword((prevs) => !prevs)}
                    >
                      {showConfirmPassword ? <FiEye /> : <IoEyeOffOutline />}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[#151515] text-2xl font-semibold pb-10">
                  Stay connected to Haus
                </h2>
                <p>
                  Get exclusive information about events and deals that are only available to
                  members, as well as well chosen suggestions from your favorite Haus hotel,
                  eateries, and spas.
                </p>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="servicePolicy"
                  id="servicePolicy"
                  checked={formData.servicePolicy}
                  onChange={handleChange}
                  className="peer hidden"
                />
                <label
                  htmlFor="servicePolicy"
                  className="border border-[#C8803C] lg:w-10 w-20 lg:h-6 h-5 rounded cursor-pointer flex items-center justify-center
                    peer-checked:bg-[#C8803C]"
                >
                  {/* Optional checkmark */}
                  {formData.servicePolicy && (
                    <span className="text-white text-sm font-bold">✓</span>
                  )}
                </label>
                <span className="ml-2 text-[#404040]">
                  Haus would like to use direct mail and email to inform you about news and special
                  offers on Haus-related goods and services. Unsubscribing is possible at any
                  moment. You authorize such usage.
                </span>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="policyAgreement"
                  id="policyAgreement"
                  checked={formData.policyAgreement}
                  onChange={handleChange}
                  className="peer hidden"
                />

                <label
                  htmlFor="policyAgreement"
                  className="border border-[#C8803C] w-7 lg:h-6 h-5 rounded cursor-pointer flex items-center justify-center
                    peer-checked:bg-[#C8803C]"
                >
                  {/* Optional checkmark */}
                  {formData.policyAgreement && (
                    <span className="text-white text-sm font-bold">✓</span>
                  )}
                </label>
                <span className="ml-2 text-[#404040]">
                  By clicking “Join Now” you agree to{' '}
                  <span className="underline cursor-pointer">Haus Privacy Policy and Terms.</span>
                </span>
              </div>
              <button
                type="submit"
                disabled={loading || isFormComplete}
                className={`w-full text-white py-2 rounded cursor-pointer disabled:cursor-not-allowed ${isFormComplete ? 'bg-[#7A7A7A]' : 'bg-[#802000]'}`}
              >
                {loading ? (
                  'Please wait...'
                ) : (
                  <span className="flex gap-2 items-center justify-center">
                    Join Now{' '}
                    <Image src={'/arrow-forward.svg'} alt="arrow icon" width={15} height={15} />
                  </span>
                )}
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">Login successful!</p>}
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Page;
