import React from 'react'
import { buttonText, reviewers } from '../../../../data/detail'
import { Autoplay, Navigation } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import { FaCheckCircle, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

function GroupTravel() {
    const images=[
        "/Multigen-Family-Cover-photo-2-494x280.webp",
        "/group-boat-friends-people-yatch-494x280.webp",
        "/Untitled-design-12-494x280.webp",
        "/theme-park-494x280.webp",
        "/fragrance-making-lavender-perfume-494x280.webp",
        "/porto-ajacchio-france-corsica-shutterstock-494x280.jpg"
    ]
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("/Cover-photo-Group-Travel.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
        className="relative h-[680px] flex flex-col items-center justify-start  text-center">
        <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
        <div className='flex flex-col items-center justify-start min-h-screen mt-[235px]'>

          <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'>Group-Travel</h1>
          <h3 className='text-2xl md:text-2xl text-center text-[rgba(255,255,255,0.8)] mb-4 max-w-5xl mx-auto leading-relaxed relative z-10'>Browse our group tours for inspiration or contact us straight away for a tailor-made itinerary by a local travel designer.
          </h3>
          {/* <!-- callout button --> */}
          <div className=' p-3 w-full max-w-xs relative z-10'>
            <a href="" className='inline-block bg-[#e8dcba] text-[#1b3154] py-2 px-12 rounded-full  text-xl transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
            >
              Customize My Trip
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#1F3653] pt-[30px] w-full z-50 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1240px] px-[20px] mx-auto">
          {images.map((rasm, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={rasm}
                alt={`travel-${index}`}
                className="w-full h-64 object-cover"
              />

              <Link
                to={"/"}
                className="absolute w-[80%] mx-auto text-center bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 py-2 px-8 rounded-lg text-[#1b3154] whitespace-nowrap"

              >
                {buttonText[index]}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-white pt-12 w-full relative'>
        <div>
          <h2 className='items-center justify-center flex text-[#1b3154] text-2xl font-bold'>
            What Our Clients Are Saying
          </h2>
        </div>
        <div className='w-full max-w-3xl relative mx-auto'>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            {reviewers?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='text-center px-6 py-8'>
                  <h3 className='text-lg font-semibold text-[#1b3154]'>{item.name}</h3>
                  <p className='text-sm text-gray-500 mb-2'>{item.data}</p>
                  <div className='flex justify-center items-center mb-3'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className='text-[#c2ac57] mr-1' />
                    ))}
                    <FaCheckCircle className='text-blue-600 ml-2' />
                  </div>
                  <p className='text-[15px] leading-relaxed text-[#1b3154] max-w-xl mx-auto'>
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>

            )
            )}
          </Swiper>
        </div>
        <div className='text-center text-sm'>
          <strong>Google</strong> rating score: <span className='font-bold'>4.9</span> of 5, based on <span className='font-bold underline cursor-pointer'><a href="https://www.google.com/search?hl=en-UZ&gl=uz&q=French+Side+Travel,+49+Cr+Mirabeau,+13100+Aix-en-Provence,+France&ludocid=532799359941301942&lsig=AB86z5Upvh70KTA4BtNjP-rQs1p5#lrd=0x12c98da84737b347:0x764e231e9db56b6,1">162 reviews</a></span>
        </div>
      </section>
    </main>
  )
}

export default GroupTravel