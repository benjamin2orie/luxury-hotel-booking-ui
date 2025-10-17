// 'use client';
// import { useState, useEffect } from 'react';

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   Location: string;
// }

// export default function Carousel() {
//   const [filteredLocation, setFilteredLocation] = useState<string>('All');
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const slidesToShow: number = 3;

//   // Sample cards with Location property
//   const cards: Card[] = [
//     { id: 1, title: "London Office", description: "Our main headquarters", Location: "London" },
//     { id: 2, title: "Glasgow Branch", description: "Scottish operations center", Location: "Glasgow" },
//     { id: 3, title: "Edinburgh Site", description: "Historical location", Location: "Edinburgh" },
//     { id: 4, title: "London Tech Hub", description: "Innovation center", Location: "London" },
//     { id: 5, title: "Glasgow Warehouse", description: "Storage and logistics", Location: "Glasgow" },
//     { id: 6, title: "Edinburgh Museum", description: "Cultural center", Location: "Edinburgh" },
//     { id: 7, title: "London Retail", description: "Customer-facing store", Location: "London" },
//     { id: 8, title: "Glasgow Factory", description: "Manufacturing plant", Location: "Glasgow" },
//     { id: 9, title: "Edinburgh Office", description: "Regional headquarters", Location: "Edinburgh" },
//   ];

//   // Filter cards based on location
//   const filteredCards: Card[] = filteredLocation === 'All'
//     ? cards
//     : cards.filter(card => card.Location === filteredLocation);

//   const maxSlide: number = Math.max(0, Math.ceil(filteredCards.length / slidesToShow) - 1);
//   const startIndex: number = currentSlide * slidesToShow;

//   const nextSlide = (): void => {
//     setCurrentSlide(prev => prev < maxSlide ? prev + 1 : 0);
//   };

//   const prevSlide = (): void => {
//     setCurrentSlide(prev => prev > 0 ? prev - 1 : maxSlide);
//   };

//   const goToSlide = (index: number): void => {
//     setCurrentSlide(index);
//   };

//   // Reset to first slide when filter changes
//   useEffect(() => {
//     setCurrentSlide(0);
//   }, [filteredLocation]);

//   // Handle case when filteredCards is empty
//   if (filteredCards.length === 0) {
//     return (
//       <div className="w-full max-w-6xl mx-auto p-6">
//         <div className="flex space-x-6 mb-6">
//            <div
//             onClick={() => { setFilteredLocation("All"); }}
//             className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'All' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//           >
//             All
//           </div>

//           <div
//             onClick={() => { setFilteredLocation("Glasgow"); }}
//             className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'Glasgow' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//           >
//             Glasgow
//           </div>
//           <div
//             onClick={() => { setFilteredLocation("London"); }}
//             className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'London' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//           >
//             London
//           </div>
//           <div
//             onClick={() => { setFilteredLocation("Edinburgh"); }}
//             className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'Edinburgh' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//           >
//             Edinburgh
//           </div>
//         </div>
//         <div className="text-center py-12 text-gray-500">
//           No cards found for the selected location.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       {/* Location Filter Tabs */}
//       <div className="flex space-x-6 mb-6">
//       <div
//           onClick={() => { setFilteredLocation("All"); }}
//           className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'All' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//         >
//           All
//         </div>

//         <div
//           onClick={() => { setFilteredLocation("Glasgow"); }}
//           className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'Glasgow' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//         >
//           Glasgow
//         </div>
//         <div
//           onClick={() => { setFilteredLocation("London"); }}
//           className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'London' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//         >
//           London
//         </div>
//         <div
//           onClick={() => { setFilteredLocation("Edinburgh"); }}
//           className={`inline-block px-4 py-2 cursor-pointer ${filteredLocation === 'Edinburgh' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
//         >
//           Edinburgh
//         </div>
//       </div>

//       {/* Carousel with filtered cards */}
//       <div className="relative">
//         {/* Navigation arrows - Only show if there are more slides */}
//         {filteredCards.length > slidesToShow && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
//               aria-label="Previous slide"
//             >
//               <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
//               aria-label="Next slide"
//             >
//               <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </>
//         )}

//         {/* Carousel container with filtered cards */}
//         <div className="overflow-hidden">
//           <div className="flex justify-center space-x-6">
//             {filteredCards
//               .slice(startIndex, startIndex + slidesToShow)
//               .map((card: Card) => (
//                 <div
//                   key={card.id}
//                   className="flex-shrink-0 w-80 h-72 rounded-xl p-6 shadow-lg bg-white transform transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="h-full flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
//                       <p className="text-gray-600 mb-2">{card.description}</p>
//                       <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                         {card.Location}
//                       </span>
//                     </div>
//                     <button className="self-start mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-blue-600 transition-colors">
//                       Learn more
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Slide indicators - Only show if there are multiple slides */}
//       {maxSlide > 0 && (
//         <div className="flex mt-8 ml-[3em] space-x-2">
//           {Array.from({ length: maxSlide + 1 }).map((_, index: number) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';
// import { Card, Tabs, Button, Space } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const { Meta } = Card;

// interface CardData {
//   id: number;
//   type: string;
//   button: string;
//   Location: string;
//   img: string;
// }

// export default function Carousel() {

//   const router = useRouter();
//   const [location, setLocation] = useState('All');
//   const [slide, setSlide] = useState(0);
//   const slidesToShow = 3;

//   const cards: CardData[] = [
//     { id: 1, type: "Single", button: "Our main headquarters", Location: "London", img: "/carousel2.svg" },
//     { id: 2, type: "Double", button: "Scottish operations center", Location: "Glasgow", img:"/carousel1.svg" },
//     { id: 3, type: "Double", button: "Historical location", Location: "Edinburgh", img:"/carousel2.svg" },
//     { id: 4, type: "Suite", button: "Innovation center", Location: "London", img:"/carousel2.svg" },
//     { id: 5, type: "Executive", button: "Storage and logistics", Location: "Glasgow", img:"/carousel1.svg" },
//     { id: 6, type: "Double", button: "Cultural center", Location: "Edinburgh", img:"/carousel2.svg" },
//     { id: 7, type: "Suite", button: "Customer-facing store", Location: "Glasgow", img:"/carousel2.svg" },
//     { id: 8, type: "Executive", button: "Manufacturing plant", Location: "Glasgow", img:"/carousel1.svg" },
//     { id: 9, type: "Double", button: "Regional headquarters", Location: "Edinburgh", img:"/carousel2.svg" },
//   ];

//   const filteredCards = location === 'All' ? cards : cards.filter(card => card.Location === location);
//   const maxSlide = Math.max(0, Math.ceil(filteredCards.length / slidesToShow) - 1);
//   const visibleCards = filteredCards.slice(slide * slidesToShow, (slide * slidesToShow) + slidesToShow);

//   useEffect(() => setSlide(0), [location]);

//   return (
//     <div  className='max-w-[1200px] my-0 mx-auto p-24'>

//         <div className='flex space-x-10 items-center text-[#404040] pb-10'>
//             <h1 className='text-[#1E1E1E] text-[50.3px] font-[400]'>Stay</h1>
//             <p className='text-[16px] font-[400] w-[60%]'>
//               Indulge in refined comfort at Haus—where each stay is a seamless
//                fusion of lavish amenities and urban sophistication, promising
//                a haven of tranquility in the heart of three vibrant cities.
//             </p>
//         </div>
//       <Tabs
//         activeKey={location}
//         items={[
//           { key: 'All', label: 'All' },
//           { key: 'Glasgow', label: 'Glasgow' },
//           { key: 'Edinburgh', label: 'Edinburgh' },
//           { key: 'London', label: 'London' },

//         ]}
//         onChange={setLocation}
//         className='borderless-tabs'
//       />

//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
//         {filteredCards.length > slidesToShow && (
//           <Button shape="circle" icon={<LeftOutlined />} onClick={() => setSlide(s => s > 0 ? s - 1 : maxSlide)} />
//         )}

//         <Space size="large">
//           {visibleCards.map(card => (
//             // <Card key={card.id} style={{ width: 300 }} hoverable>
//             <div key={card.id} className="relative">
//                 <Image
//                   alt="example"
//                     src={card.img}
//                     width={300}
//                     height={600}
//                     className="object-cover h-[400px] w-[300px] rounded-lg object-center"
//                />
//                <div className='absolute bottom-0 rounded-lg flex flex-col gap-10 left-0 right-0 pt-60 pl-4 z-50 bg-black/20 inset-0'>
//                 <div className='text-[#F9F9F9] text-[25px] text-[500]'>{card.type}</div>
//                 <button
//                  onClick={() => router.push("/about")}
//                  className='bg-[#EEE] flex items-center h-10 w-30 rounded-sm cursor-pointer justify-center gap-2 font-[600]'
//                  >
//                     Book Now
//                     <Image src={'/arrow-black.svg'} alt='arrow right icon' width={15} height={15} className='h-150'/>
//                 </button>
//                    {/* <Meta title={card.title} description={`${card.description} | ${card.Location}`} /> */}
//               </div>
//               </div>
//             // </Card>
//           ))}
//         </Space>

//         {filteredCards.length > slidesToShow && (
//           <Button shape="circle" icon={<RightOutlined />} onClick={() => setSlide(s => s < maxSlide ? s + 1 : 0)} />
//         )}
//       </div>

//       {maxSlide > 0 && (
//         <div className='text-left mt-10 ml-[3em]'>
//           {Array.from({ length: maxSlide + 1 }).map((_, i) => (
//             <Button
//               key={i}
//               type={i === slide ? 'primary' : 'default'}
//               size="small"
//               onClick={() => setSlide(i)}
//               style={{ margin: 4, borderRadius: '50%', width: 10, height: 10, padding: 0 }}
//             >

//             </Button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

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

export default function Carousel() {
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
      type: 'Single',
      button: 'Our main headquarters',
      Location: 'London',
      img: '/carousel2.svg',
    },
    {
      id: 2,
      type: 'Double',
      button: 'Scottish operations center',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 3,
      type: 'Executive',
      button: 'Historical location',
      Location: 'Edinburgh',
      img: '/carousel2.svg',
    },
    {
      id: 4,
      type: 'Suite',
      button: 'Innovation center',
      Location: 'London',
      img: '/carousel2.svg',
    },
    {
      id: 5,
      type: 'Executive',
      button: 'Storage and logistics',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 6,
      type: 'Double',
      button: 'Cultural center',
      Location: 'Edinburgh',
      img: '/carousel2.svg',
    },
    {
      id: 7,
      type: 'Suite',
      button: 'Customer-facing store',
      Location: 'Glasgow',
      img: '/carousel2.svg',
    },
    {
      id: 8,
      type: 'Executive',
      button: 'Manufacturing plant',
      Location: 'Glasgow',
      img: '/carousel1.svg',
    },
    {
      id: 9,
      type: 'Double',
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
    <div className="max-w-[1200px] lg:mx-auto lg:p-12 py-10 lg:py-o">
      <div className="flex lg:flex-row flex-col space-x-10 lg:items-center text-[#404040] pb-10 px-[20px] lg:px-0">
        <h1 className="text-[#1E1E1E] lg:text-[50.3px] text-3xl font-[400]">{t('stay')}</h1>
        <p className="text-[16px] font-[400] lg:w-[60%]">{t('content')}</p>
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
          className="borderless-tabs"
        />
      </div>

      <div className="relative flex items-center">
        <button
          onClick={prev}
          disabled={slide === 0}
          className={` !absolute z-20 disabled:cursor-not-allowed disabled:hidden rounded-full
             bg-white shadow-md hover:bg-gray-100 lg:w-10 w-6 lg:h-10 h-6 flex items-center justify-center cursor-pointer`}
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
                  className="object-cover lg:h-[400px] h-[200px] lg:w-[320px] w-[100%] lg:rounded-lg"
                />
                <div className="absolute bottom-0 inset-0 left-0 right-0 bg-black/40 lg:pl-4 pl-8 lg:pt-[15em] pt-[5em] rounded-lg">
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
