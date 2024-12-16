import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import chaniaSummerFest from '../photos/chania-summer-festival.jpg'
import cretanDietFest from '../photos/cretan-diet-festival.jpg'
import discoverBeaches from '../photos/discover-our-beaches.jpg'
import groupCooking from '../photos/group-cooking.jpg'
import inn from '../photos/inn.jpg'
import pottery from '../photos/pottery.png'
import tripAxos from '../photos/trip-axos-village.jpg'

export const Slider = () => {

    const slides = [
        {
          url: chaniaSummerFest,
          text: "Chania's Summer Festival takes place between July and September each year and is packed full of attractions. Live performances of the dance, musical and theatrical variety can be enjoyed daily and often attract well-known performers."
        },
        {
          url: cretanDietFest,
          text: (
            <>
            <span className="text-red-400">19.00 – 23.00</span>: Local Food Trade Show <br />
            <span className="text-blue-400">19:15 – 20:30</span>: Young explorers of Flavours, Flagrances and Colours. By Maria Tsouknaki & Flora Asoumanaki <br />
            <span className="text-green-500">20:45 – 21:15</span>: Arkadi traditional Cretan music and dance school With Konstantinos Markakis music band
          </>
          ),
        },
        {
          url: discoverBeaches,
          text: "Explore the hidden gems of Crete's stunning beaches your next adventure awaits!"
        },
        {
          url: groupCooking,
          text: "Join our Cretan group cooking experience, where charming local grandmothers share the secrets of traditional recipes passed down for generations!"
        },
        {
          url: inn,
          text:"Experience the heart of Cretan hospitality stay in a traditional inn where timeless charm meets modern comfort."
        },
        {
          url: pottery,
          text:"Unleash your creativity with a hands-on pottery-making workshop, guided by skilled Cretan artisans and inspired by ancient traditions!"
        },
        {
          url: tripAxos,
          text:"Embark on a breathtaking hiking adventure through the charming village of Axos, where nature and tradition blend seamlessly!"
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
    ></div>
    {/* Text on top of the image */}
      <div className="absolute top-20 left-15 bg-black/25 text-white px-2 py-1 rounded max-w-[400px]">
          <h2 className="text-4xl font-bold">{slides[currentIndex].text}</h2>
      </div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
);
}
