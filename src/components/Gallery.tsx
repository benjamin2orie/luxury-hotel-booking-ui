'use client';
import { useState, useMemo, useEffect } from 'react';
import { Tabs, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';

interface Comments {
  id: number;
  img: string;
  alt: string;
}

export default function Gallery() {
  const [slide, setSlide] = useState(0);

  useEffect(() => setSlide(0), []);

  // layout constants
  const slidesToShow = 3;
  const cardWidth = 530;
  const gap = 0;
  const peek = 100; // how much of the next card is visible
  const stepSize = cardWidth + gap;

  const tesimony: Comments[] = [
    { id: 1, img: '/carousel2.svg', alt: 'image gallery' },
    { id: 2, img: '/carousel1.svg', alt: 'image gallery' },
    { id: 3, img: '/carousel2.svg', alt: 'image gallery' },
    { id: 4, img: '/carousel1.svg', alt: 'image gallery' },
    { id: 5, img: '/carousel2.svg', alt: 'image gallery' },
    { id: 6, img: '/carousel1.svg', alt: 'image gallery' },
  ];

  //   const testimonialdCards = location === 'All' ? tesimony : tesimony.filter(c => c.name === location);

  // total width of all cards
  const trackWidth = tesimony.length * stepSize - gap;
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
    <div className="max-w-[100%] lg:pt-12">
      <h1 className="text-[#1E1E1E] lg:text-[30.3px] text-[20px] lg:pl-[8em] pl-[20px] font-[400]">
        Gallery
      </h1>
      {maxSlide > 0 && (
        <div className="text-center m-5">
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

      <div className="relative flex items-center">
        <button
          onClick={prev}
          disabled={slide === 0}
          className={` !absolute z-20 disabled:cursor-not-allowed left-5 disabled:hidden rounded-full
             bg-gray-100 shadow-md hover:bg-gray-100 lg:w-10 w-6 lg:h-10 h-6 flex items-center justify-center cursor-pointer`}
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
            {tesimony.map((card) => (
              <div key={card.id} style={{ flex: `0 0 ${cardWidth}px` }} className="relative">
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={cardWidth}
                  height={400}
                  className={`object-cover lg:h-[400px] h-[200px] w-[530px]`}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={slide === maxSlide}
          className={`!absolute -translate-y-1/2 right-[10px] z-10 disabled:cursor-not-allowed disabled:hidden cursor-pointer
            rounded-full bg-gray-100 shadow-md hover:bg-gray-100 lg:w-10 w-6 lg:h-10 h-6 flex items-center justify-center
             ${maxSlide === 0 ? 'hidden' : ''}`}
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
}
