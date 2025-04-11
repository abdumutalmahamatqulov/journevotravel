import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { reviewers } from '../../data/detail';

export default function TravelIdeas() {
  const images = [
    {
      rasm: "/src/assets/family-trip-normandy-france-cliffs-coast-etretat-shutterstock.jpg",
      title: "Family-friendly Travel",
      url:"family-trip-france"
    }, {

      rasm: "/src/assets/Cover-photo-Group-Travel-3-jpg.webp",
      title: 'Group Travel',
      url:"group-travel"
    }, {

      rasm: "src/assets/van-gogh-carrieres-lumieres-le-baux-provence-jameswrodriguez.jpg",
      title: 'History & Culture',
      url:"history-culture"
    }, {

      rasm: "src/assets/couple-drink-wine-paris-france-shutterstock.jpg",
      title: 'Honeymoons & Romance',
      url:"honeymoons-romance"
    }, {

      rasm: "src/assets/paris-car-self-drive.jpg",
      title: 'Self-Drive Trips & Tours',
      url:"self-drive-trips-tours"
    }, {
      rasm: "src/assets/Val-Thorens_skiing.jpg",
      title: 'Skiing & Adventure',
      url:"skiing-adventure"
    }, {

      rasm: "src/assets/Wellness-spa.jpg",
      title: 'Wellness & Relaxation',
      url:"wellness-relaxation-france"
    }, {

      rasm: "src/assets/vineyard-couple-romance-wine-shutterstock.jpg",
      title: 'Wine & Food',
      url:"wine-food-tours-2"
    }

  ]
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("/eiffel-tour-paris-france-tours.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
        className="relative h-[680px] flex flex-col items-center justify-start  text-center">
        <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
        <div className='flex flex-col items-center justify-start min-h-screen mt-[235px]'>

          <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'>Travel-Types</h1>
          <h3 className='text-2xl md:text-2xl text-center text-[rgba(255,255,255,0.8)] mb-4 max-w-5xl mx-auto leading-relaxed relative z-10'>French Side Travel offers handcrafted travel experiences all over France. <br /> How would you like to travel?
          </h3>
          {/* <!-- callout button --> */}
          <div className=' p-3 w-full max-w-xs relative z-10'>
            <a href="/customize-your-trip" className='inline-block bg-[#e8dcba] text-[#1b3154] py-2 px-12 rounded-full  text-xl transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
            >
              Customize My Trip
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#1F3653] pt-[30px] w-full z-50 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1240px] px-[20px] mx-auto">
          {images.map((text, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={text.rasm}
                alt={`travel-${index}`}
                className="w-full h-64 object-cover"
              />
              <Link
                key={index}
                to={`/travel-ideas/${text.url.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="absolute w-[80%] mx-auto text-center bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 py-2 px-8 rounded-lg text-[#1b3154] whitespace-nowrap"

              >
                { text.title}
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
