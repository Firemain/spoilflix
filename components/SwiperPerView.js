"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from './display/MovieCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Pagination } from 'swiper/modules';
import "./styles.css";

export default function SwiperPerView({ movies, title }) {
  const swiperRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (direction === 'left') {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  // Helper function to group movies into chunks of 4
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  // Group movies into chunks of 4
  const movieChunks = chunkArray(movies, 6);

  return (
    <div className="relative w-full group mt-6">
      <h2 className="cursor-pointer text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="relative w-full group">
        {/* Left Chevron */}
        <div className="absolute top-0 bottom-0 left-2 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 bg-gray-800 bg-opacity-50 rounded-full"
            onClick={() => handleClick('left')}
          >
            <ChevronLeftIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          ref={swiperRef}
        >
          {movieChunks.map((chunk, index) => (
            <SwiperSlide key={index} className="flex-shrink-0 h-auto">
              <div className="flex flex-row space-x-2 h-auto">
                {chunk.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Chevron */}
        <div className="absolute top-0 bottom-0 right-2 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 bg-purple-950 bg-opacity-50 rounded-full"
            onClick={() => handleClick('right')}
          >
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
