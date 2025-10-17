import Header from '@/components/Header';
import Language from '@/components/Language';
import Hero from '@/components/Hero';
import Carousel from '@/components/Stay';
import DineCarousel from '@/components/Dine';
import Heromain from '@/components/Heromain';
import SpaCarousel from '@/components/Spa';
import TourCarousel from '@/components/Tour';
import Facility from '@/components/Facility';
import Testimonial from '@/components/Testimonial';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div className="lg:min-h-screen ">
      <Language />
      <Header />
      <main className=" relative lg:h-[500px] h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat animate-fade"
          style={{ backgroundImage: "url('/carousel1.svg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-delay"
          style={{ backgroundImage: "url('/carousel2.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Luxury Hotels</h1>
        </div>
      </main>
      <Hero />
      <Carousel />
      <Heromain />
      <DineCarousel />
      <SpaCarousel />
      <TourCarousel />
      <Facility />
      <Testimonial />
      <Gallery />
    </div>
  );
}
