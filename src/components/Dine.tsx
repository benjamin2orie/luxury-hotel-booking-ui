'use client';
import { useState, useMemo, useEffect } from 'react';
import { Tabs, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface CardData {
  id: number;
  type: string;
  button: string;
  Location: string;
  img: string;
}

export default function DineCarousel() {
  const router = useRouter();
  const [location, setLocation] = useState('All');
  const [slide, setSlide] = useState(0);

  useEffect(() => setSlide(0), [location]);
  const { t } = useTranslation('header');

  // layout constants
  const slidesToShow = 3;
  const cardWidth = 320;
  const gap = 20;
  const peek = 100; // how much of the next card is visible
  const stepSize = cardWidth + gap;

  const cards: CardData[] = [
    {
      id: 1,
      type: 'Velvet Vista Bistro',
      button: 'Our main headquarters',
      Location: 'London',
      img: '/carousel2.svg',
    },
    {
      id: 2,
      type: 'Azure Ambiance',
      button: 'Scottish operations center',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 3,
      type: 'Harmony Haven',
      button: 'Historical location',
      Location: 'Edinburgh',
      img: '/carousel2.svg',
    },
    {
      id: 4,
      type: 'Azure Ambiance',
      button: 'Innovation center',
      Location: 'London',
      img: '/carousel2.svg',
    },
    {
      id: 5,
      type: 'Harmony Haven',
      button: 'Storage and logistics',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 6,
      type: 'Azure Ambiance',
      button: 'Cultural center',
      Location: 'Edinburgh',
      img: '/carousel2.svg',
    },
    {
      id: 7,
      type: 'Velvet Vista Bistro',
      button: 'Customer-facing store',
      Location: 'Glasgow',
      img: '/carousel2.svg',
    },
    {
      id: 8,
      type: 'Harmony Haven',
      button: 'Manufacturing plant',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 9,
      type: 'Velvet Vista Bistro',
      button: 'Regional headquarters',
      Location: 'Edinburgh',
      img: '/carousel2.svg',
    },
  ];

  const filteredCards = location === 'All' ? cards : cards.filter((c) => c.Location === location);

  // total width of all cards
  const trackWidth = filteredCards.length * stepSize - gap;
  // visible width (3 full + peek)
  const containerWidth = slidesToShow * stepSize - gap + peek;

  const maxSlide = useMemo(() => {
    const hiddenWidth = trackWidth - containerWidth;
    if (hiddenWidth <= 0) return 0;
    return Math.ceil(hiddenWidth / stepSize);
  }, [trackWidth, containerWidth, stepSize]);

  const next = () => setSlide((s) => (s < maxSlide ? s + 1 : s));
  const prev = () => setSlide((s) => (s > 0 ? s - 1 : s));

  return (
    <div className="lg:max-w-[1200px] lg:mx-auto lg:p-12 py-10 lg:py-0">
      <div className="flex lg:flex-row flex-col space-x-10 lg:items-center text-[#404040] pb-10 px-[20px] lg:px-0">
        <h1 className="text-[#1E1E1E] lg:text-[50.3px] text-3xl font-[400]">{t('dine')}</h1>
        <p className="text-[16px] font-[400] lg:w-[60%]">{t('favorite')}</p>
      </div>

      <div className="px-[20px] lg:px-0">
        <Tabs
          activeKey={location}
          items={[
            { key: 'All', label: 'All' },
            { key: 'Glasgow', label: 'Glasgow' },
            { key: 'Edinburgh', label: 'Edinburgh' },
            { key: 'London', label: 'London' },
          ]}
          onChange={setLocation}
          className="borderless-tabs "
        />
      </div>

      <div className="relative flex items-center">
        <button
          onClick={prev}
          disabled={slide === 0}
          className={` !absolute z-20 disabled:cursor-not-allowed disabled:hidden rounded-full
             bg-white shadow-md hover:bg-gray-100 w-10 h-10 flex items-center justify-center cursor-pointer`}
        >
          <LeftOutlined />
        </button>

        <div className="overflow-hidden" style={{ width: containerWidth }}>
          <div
            className="flex transition-transform duration-500"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${slide * stepSize}px)`,
            }}
          >
            {filteredCards.map((card) => (
              <div key={card.id} style={{ flex: `0 0 ${cardWidth}px` }} className="relative">
                <Image
                  alt={card.type}
                  src={card.img}
                  width={cardWidth}
                  height={400}
                  className="object-cover lg:h-[400px] h-[200px] lg:w-[320px] w-full lg:rounded-lg"
                />
                <div className="absolute bottom-0 inset-0 left-0 right-0 bg-black/40 pl-4 lg:pt-[15em] pt-[6em] rounded-lg">
                  <div className="text-white text-lg font-semibold">{card.type}</div>
                  <button
                    onClick={() => router.push('/about')}
                    className="bg-[#EEE] mt-2 px-4 py-2 rounded-sm font-semibold flex items-center gap-2"
                  >
                    Book Now
                    <Image src="/arrow-black.svg" alt="arrow" width={15} height={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={slide === maxSlide}
          className={`!absolute top-1/2 -translate-y-1/2 lg:right-[120px] right-0 z-10 disabled:cursor-not-allowed disabled:hidden cursor-pointer
            rounded-full bg-white shadow-md hover:bg-gray-100 lg:w-10 w-6 lg:h-10 h-6 flex items-center justify-center
             ${maxSlide === 0 ? 'hidden' : ''}`}
        >
          <RightOutlined />
        </button>
      </div>

      {maxSlide > 0 && (
        <div className="text-left mt-10 ml-[2em]">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <Button
              key={i}
              type={i === slide ? 'primary' : 'default'}
              size="small"
              onClick={() => setSlide(i)}
              style={{ margin: 4, borderRadius: '50%', width: 10, height: 10, padding: 0 }}
            ></Button>
          ))}
        </div>
      )}
    </div>
  );
}
