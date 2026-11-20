import React, { useRef } from 'react';
import firstPicture from '../assets/firstPicture.svg';
import secondPicture from '../assets/secondPicture.png';
import thirdPicture from '../assets/thirdPicture.png';
import fourthPicture from '../assets/fourthPicture.png';
import fifthPicture from '../assets/fifthPicture.png';
import sixthPicture from '../assets/sixthPicture.png';

const PictureSwipe = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.65;
    el.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full bg-black py-8 select-none">
      {/* Chapga tugma */}
      <button
        type="button"
        onClick={() => handleScroll('prev')}
        className="btn btn-circle btn-ghost bg-black/50 hover:bg-black/80 text-white border-none absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20"
        aria-label="Oldingi rasm"
      >
        ❮
      </button>

      {/* O'ngga tugma */}
      <button
        type="button"
        onClick={() => handleScroll('next')}
        className="btn btn-circle btn-ghost bg-black/50 hover:bg-black/80 text-white border-none absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20"
        aria-label="Keyingi rasm"
      >
        ❯
      </button>

      {/* daisyUI Carousel */}
      <div
        ref={carouselRef}
        className="carousel carousel-center w-full space-x-4 sm:space-x-6 px-6 sm:px-16 scroll-smooth"
      >
        {/* 1-rasm */}
        <div className="carousel-item relative w-[78%] xl:w-[70%] sm:w-[55%] md:w-[36%] h-[440px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={firstPicture}
            alt="First picture"
            className="w-full h-full object-cover block xl:hidden"
            draggable={false}
          />
            <img
            src={fourthPicture}
            alt="Fourth picture"
            className="w-full h-full object-cover hidden xl:block"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/85" />
          <div className="absolute top-6 inset-x-4 text-center text-white">
            <p className="text-xs sm:text-sm font-medium text-gray-200">
              New Episodes Fridays
            </p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1 uppercase">
              PALM ROYALE
            </h2>
          </div>
          <div className="absolute bottom-6 inset-x-4 flex flex-col items-center text-center text-white">
            <p className="text-sm sm:text-base font-bold">Comedy</p>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5 mb-4">
              All that glitters isn’t gold.
            </p>
            <button
              type="button"
              className="btn bg-white hover:bg-gray-200 text-black border-none rounded-full px-5 min-h-0 h-10 text-xs sm:text-sm font-semibold gap-2"
            >
              <span>Stream now</span>
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[9px]">
                ▶
              </span>
            </button>
          </div>
        </div>

        {/* 2-rasm */}
        <div className="carousel-item relative w-[78%] xl:w-[70%] sm:w-[55%] md:w-[36%] h-[440px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={secondPicture}
            alt="Second picture"
            className="w-full h-full object-cover block xl:hidden"
            draggable={false}
          />
           <img
            src={fifthPicture}
            alt="Second picture"
            className="w-full h-full object-cover hidden xl:block"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/85" />
          <div className="absolute top-6 inset-x-4 text-center text-white">
            <p className="text-xs sm:text-sm font-medium text-gray-200">
              New Episodes Wednesdays
            </p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1 uppercase">
              SLOW HORSES
            </h2>
          </div>
          <div className="absolute bottom-6 inset-x-4 flex flex-col items-center text-center text-white">
            <p className="text-sm sm:text-base font-bold">Thriller</p>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5 mb-4">
              Old sins cast new shadows.
            </p>
            <button
              type="button"
              className="btn bg-white hover:bg-gray-200 text-black border-none rounded-full px-5 min-h-0 h-10 text-xs sm:text-sm font-semibold gap-2"
            >
              <span>Stream now</span>
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[9px]">
                ▶
              </span>
            </button>
          </div>
        </div>

        {/* 3-rasm */}
        <div className="carousel-item relative w-[78%] xl:w-[70%] sm:w-[55%] md:w-[36%] h-[440px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={thirdPicture}
            alt="Third picture"
            className="w-full h-full object-cover block xl:hidden"
            draggable={false}
          />
          <img
            src={sixthPicture}
            alt="Third picture"
            className="w-full h-full object-cover hidden xl:block"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/85" />
          <div className="absolute top-6 inset-x-4 text-center text-white">
            <p className="text-xs sm:text-sm font-medium text-gray-200">
              New Episodes Wednesdays
            </p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1 uppercase">
              BAD MONKEY
            </h2>
          </div>
          <div className="absolute bottom-6 inset-x-4 flex flex-col items-center text-center text-white">
            <p className="text-sm sm:text-base font-bold">Comedy</p>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5 mb-4">
              The shade is real.
            </p>
            <button
              type="button"
              className="btn bg-white hover:bg-gray-200 text-black border-none rounded-full px-5 min-h-0 h-10 text-xs sm:text-sm font-semibold gap-2"
            >
              <span>Stream now</span>
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[9px]">
                ▶
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSwipe;