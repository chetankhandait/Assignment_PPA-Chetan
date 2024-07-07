'use client'
import React, { useState } from 'react';

const TuttoiralSection = () => {

  return (
    <header className="bg-white dark: ">
      

      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="w-full  ">
            <div className="flex flex-col items-start gap-2 lg:gap-8   ">
              <h1 className="text-4xl text-left font-semibold text-brandTextcolor dark:  lg:text-4xl">
              How to design your site footer like we did
              </h1>

              <p className="mt-3  text-subColor dark: ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>

              <button className=" px-8 py-3.5 bg-brandColor  rounded-md text-white">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="./pana.png"
              alt="Catalogue-pana.svg"
              width={441.53}
              height={433.4}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TuttoiralSection;
