'use client';
import { useState, useMemo, useEffect } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Comments {
  id: number;
  comment: string;
  name: string;
}

export default function Testimonial() {
  //   const [location, setLocation] = useState('All');
  const [slide, setSlide] = useState(0);

  useEffect(() => setSlide(0), []);

  // layout constants
  const slidesToShow = 1;
  const cardWidth = 800;
  const gap = 0;
  const peek = 0; // how much of the next card is visible
  const stepSize = cardWidth + gap;

  const tesimony: Comments[] = [
    {
      id: 1,
      comment:
        'Glasgows Haus is a haven of tranquility in the midst of the city buzz. From the elegant spa to the top-notch dining, every aspect reflects a commitment to excellence. Highly recommend for a refined stay!',
      name: '- Vanessa',
    },
    {
      id: 2,
      comment:
        'Edinburgh Haus is a haven of tranquility in the midst of the city buzz. From the elegant spa to the top-notch dining, every aspect reflects a commitment to excellence. Highly recommend for a refined stay!',
      name: '- Karl',
    },
    {
      id: 3,
      comment:
        'Glasgows Haus is a haven of tranquility in the midst of the city buzz. From the elegant spa to the top-notch dining, every aspect reflects a commitment to excellence. Highly recommend for a refined stay!',
      name: '- Gayle',
    },
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
    <div className="max-w-[1200px] lg:mx-auto pt-12 flex flex-col lg:px-0 px-[30px]">
      <div className="pb-10 lg:pl-[4em]">
        <h1 className="text-[#1E1E1E] lg:text-[30.3px] text-[20px] font-[400]">From Our Guests</h1>
      </div>

      <div className="lg:relative flex items-center lg:justify-end justify-start lg:px-20 ">
        <button
          onClick={prev}
          disabled={slide === 0}
          className={` !absolute z-20 disabled:cursor-not-allowed lg:left-100 left-0 disabled:hidden rounded-full
             bg-gray-100 shadow-md hover:bg-gray-100 lg:w-10 w-8 lg:h-10 h-8 flex items-center justify-center cursor-pointer`}
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
              <div
                key={card.id}
                style={{ flex: `0 0 ${cardWidth}px` }}
                className="lg:relative lg:pl-30 w-full"
              >
                <div className=" w-[40%] lg:w-full ">
                  <div className="text-[#404040] text-md font-semibold lg:px-20 px-3">
                    <p>
                      {card.comment}
                      <span className="pl-3 text-[#802000]">{card.name}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={slide === maxSlide}
          className={`!absolute -translate-y-1/2 lg:right-[80px] right-[10px] z-10 disabled:cursor-not-allowed disabled:hidden cursor-pointer
            rounded-full bg-gray-100 shadow-md hover:bg-gray-100 lg:w-10 w-8 lg:h-10 h-8 flex items-center justify-center
             ${maxSlide === 0 ? 'hidden' : ''}`}
        >
          <RightOutlined />
        </button>
      </div>

      {maxSlide > 0 && (
        <div className="text-center mt-10 mr-[6.5em]">
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
