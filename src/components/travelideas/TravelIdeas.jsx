import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { reviewers } from '../../data/detail';

function TravelIdeas() {
  const [expanded, setExpanded] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [bgPosition, setBgPosition] = useState('center 32%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBgPosition('center 22%');
      } else {
        setBgPosition('center 82%');
      }
    };
    
    // Dastlabki holatni tekshiradi
    handleResize();
  
    // Ekran o'zgarganda tinglaydi
    window.addEventListener('resize', handleResize);
  
    // Component unmount bo'lganda listenerni olib tashlaydi
    return () => window.removeEventListener('resize', console.log(window.innerWidth)
    )
  }, []); // Bo'sh dependency array - faqat component mount va unmount paytida ishlaydi
  
  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const images = [
    {
      rasm: "/family-trip-normandy-france-cliffs-coast-etretat-shutterstock.jpg",
      title: "Family-friendly Travel",
      url: "family-trip-france"
    }, {

      rasm: "/Cover-photo-Group-Travel-3-jpg.webp",
      title: 'Group Travel',
      url: "group-travel"
    }, {

      rasm: "/van-gogh-carrieres-lumieres-le-baux-provence-jameswrodriguez.jpg",
      title: 'History & Culture',
      url: "history-culture"
    }, {

      rasm: "/couple-drink-wine-paris-france-shutterstock.jpg",
      title: 'Honeymoons & Romance',
      url: "honeymoons-romance"
    }, {

      rasm: "/paris-car-self-drive.jpg",
      title: 'Self-Drive Trips & Tours',
      url: "self-drive-trips-tours"
    }, {
      rasm: "/Val-Thorens_skiing.jpg",
      title: 'Skiing & Adventure',
      url: "skiing-adventure"
    }, {

      rasm: "/Wellness-spa.jpg",
      title: 'Wellness & Relaxation',
      url: "wellness-relaxation-france"
    }, {

      rasm: "/vineyard-couple-romance-wine-shutterstock.jpg",
      title: 'Wine & Food',
      url: "wine-food-tours-2"
    }

  ]
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("/eiffel-tour-paris-france-tours.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: bgPosition,
          backgroundRepeat: 'no-repeat',
        }}
        className="relative h-[70vh] flex flex-col items-center justify-start text-center"
      >
        <div className="absolute opacity  bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
        <div className='flex flex-col items-center justify-start min-h-screen mt-[170px]'>

          <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'>Travel-Types</h1>
          <h3 className='text-xl md:text-2xl text-center text-[rgba(255,255,255,0.8)] mb-4 max-w-5xl mx-auto  relative z-10 font-sans'>French Side Travel offers handcrafted travel experiences all over France. <br /> How would you like to travel?
          </h3>
          {/* <!-- callout button --> */}
          <div className=' p-3 w-full max-w-xs relative z-10 font-sans'>
            <a href="/customize-your-trip" className='font-sans inline-block bg-[#e8dcba] text-[#1b3154] py-2 px-12 rounded-full  text-lg transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
            >
              Customize My Trip
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#1F3653] pt-[60px] w-full z-50 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-[1240px] px-[60px] mx-auto">
          {images.map((text, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={text.rasm}
                alt={`travel-${index}`}
                className="w-full h-44 object-cover"
              />
              <Link
                key={index}
                to={`/travel-ideas/${text.url.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="absolute w-[80%] mx-auto text-center bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 py-2 px-8 rounded-lg text-[#1b3154] whitespace-nowrap"

              >
                {text.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-white w-full relative'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <div className='py-5'>
            <h2 className='items-center justify-center flex text-[#1b3154] text-2xl font-serif'>
              What Our Clients Are Saying
            </h2>
          </div>
          <div className='relative px-10 overflow-visible pb-4'>
            {/* Custom arrows */}
            <button
              ref={prevRef}
              className="absolute top-1/2 left-2 sm:left-[10px] z-10 text-[#c2ac57] -translate-y-1/2 text-2xl"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="absolute top-1/2 right-2 sm:right-[10px] z-10 text-[#c2ac57] -translate-y-1/2 text-2xl"
            >
              <FaChevronRight />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {reviewers?.map((item, index) => (
                <SwiperSlide key={index} className="w-[400px]">
                  <div className='text-center px-6 py-8'>
                    <h3 className='text-lg font-semibold text-[#1b3154]'>{item.name}</h3>
                    <p className='text-sm text-gray-500 mb-2'>{item.data}</p>
                    <div className='flex justify-center items-center mb-3'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className='text-[#c2ac57] mr-1' />
                      ))}
                      <FaCheckCircle className='text-blue-600 ml-2' />
                    </div>
                    <div className='max-w-xl mx-auto font-sans'>
                      <p
                        className={`text-[15px] leading-relaxed text-[#1b3154] 
                        ${expanded[index] ? '' : 'line-clamp-3'
                          }`}
                      >
                        {item.review}
                      </p>
                      {item.review && item.review.length > 155 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className='font-sans mt-2 text-[13.5px] text-[#1b3150] hover:text-[#1b3150] transition'
                        >
                          {expanded[index] ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>

              )
              )}
            </Swiper>
            <div className="flex justify-center">
              <span className="nowrap"><strong>Google</strong> rating score: </span>
              <span className="nowrap"><strong>4.9</strong>of 5,</span>
              <span className="">
                based on
                <strong className="underline">
                  <a href="https://admin.trustindex.io/widget/logClick?pub_widget_id=ee2a1a21987a5749535687a253c" target="_blank" rel="noopener">163 reviews</a>
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default TravelIdeas;
