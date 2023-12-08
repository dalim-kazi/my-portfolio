"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation ,Autoplay} from 'swiper/modules';
import Image from 'next/image';
const MyServices = () => {
    const services = [
        {
            id: 1,
            icon: "/images/myServices/web-design.png",
            tittle: "Web Design",
           details:"Consectetur adipisicing elit. Culpa laboriosam veritatis quibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta qui."
        },
        {
           id: 2,
            icon: "/images/myServices/web-development.png",
            tittle: "Web Development",
           details:"Consectetur adipisicing elit. Culpa laboriosam veritatis quibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta qui."
        },
        {
            id: 3,
            icon: "/images/myServices/html.png",
            tittle: "PSO TO HTML",
           details:"Consectetur adipisicing elit. Culpa laboriosam veritatis quibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta qui."
        },
        {
            id: 4,
            icon: "/images/myServices/jQuery.png",
            tittle: "TanStack Query",
           details:"Consectetur adipisicing elit. Culpa laboriosam veritatis     quibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta qui."
              },
        {
            id: 5,
            icon: "/images/myServices/js.png",
            tittle: "Javascript",
           details:"Consectetur adipisicing elit. Culpa laboriosam veritatis quibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta  qui."
      },
       {
        id: 6,
        icon: "/images/myServices/mongodb.png",
        tittle: "Mongodb",
       details:"Consectetur adipisicing elit. Culpa laboriosam veritatisquibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta  qui."
      },
       {
         id: 5,
         icon: "/images/myServices/next.png",
          tittle: "Next.js",
          details:"Consectetur adipisicing elit. Culpa laboriosam veritatisquibusdam, distinctio voluptas voluptatem nihilbeatae accusamus   dicta  qui."
       },
     {
      id: 5,
      icon: "/images/myServices/react.png",
      tittle: "React",
      details:"Consectetur adipisicing elit. Culpa laboriosam veritatisquibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta  qui."
     },
    {
      id: 5,
     icon: "/images/myServices/tailwind.png",
      tittle: "Tailwind",
      details:"Consectetur adipisicing elit. Culpa laboriosam veritatisquibusdam, distinctio voluptas voluptatem nihilbeatae accusamus dicta  qui."
    }  
  ]
  
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

    return (
        <>
        <div className='text-4xl font-extrabold text-center mb-20 mt-20'><span className='text-white'>My</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Services</span></div>
        <Swiper
           onSwiper={setSwiperRef}
           breakpoints={{
             640: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 40,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 50,
             },
           }}
           modules={[Navigation,Autoplay]}
          className="mySwiper mb-20" 
          autoplay={{
            delay: 1000,  
            disableOnInteraction: false,   
          }}
          
        >
          {
            services?.map(item => <SwiperSlide key={item.id}
            >
                <div className="card  bg-[#181818] border border-[#2A0E61] 
                 text-neutral-content">
             <div className="card-body">
            <div className='h-28'>
             <Image src={item?.icon} alt='icon' width={70} height={70}></Image>
              </div>
                <h2 className="card-title">{item?.tittle}</h2>
                  <p>{item?.details}</p>
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-sm btn-primary hover-effect" style={{
                  backgroundColor: '#2A0E61', // Your primary button color
                  color: '#fff', // Text color
                  border: 'none',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease-in-out'
                }}>Accept</button>
                  </div>
              </div>
               </div>
    
            </SwiperSlide>)
          }
      </Swiper>
        </>
    );
};

export default MyServices;