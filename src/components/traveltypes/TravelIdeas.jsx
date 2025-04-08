import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TravelIdeas() {
  const images = [
    "/src/assets/family-trip-normandy-france-cliffs-coast-etretat-shutterstock.jpg",
    "/src/assets/Cover-photo-Group-Travel-3-jpg.webp",
    "src/assets/van-gogh-carrieres-lumieres-le-baux-provence-jameswrodriguez.jpg",
    "src/assets/couple-drink-wine-paris-france-shutterstock.jpg",
    "src/assets/paris-car-self-drive.jpg",
    "src/assets/Val-Thorens_skiing.jpg",
    "src/assets/Wellness-spa.jpg",
    "src/assets/vineyard-couple-romance-wine-shutterstock.jpg"
  ]
  const buttonText = [
    'Family-friendly Travel',
    'Group Travel',
    'History & Culture',
    'Honeymoons & Romance',
    'Self-Drive Trips & Tours',
    'Skiing & Adventure',
    'Wellness & Relaxation',
    'Wine & Food'
  ]
  const reviewers = [{
    name: " Meryl Lander ",
    data: "5 October 2024",
    review: "Three of us foodies and modern/contemporary art enthusiasts just spent ten days in France on an absolutely wonderful, vibrant vacation in Paris and Provence put together by French Side Travel."
  },
  {
    name: " Danielle Otterson ",
    data: "2 November 2024",
    review: "Terrific agency to work with!  The trip for our 35th Wedding Anniversary was great!  The hotels selected were lovely, as were the activities and itinerary -- all personalized to our tastes!  Can't thank them enough!"
  },
  {
    name: " Mark Roberts",
    data: "27 September 2024",
    review: "Perfect!  That’s the one word that describes the entire experience.  The communication was excellent from the initial planning phase to trip completion. The planned itinerary was great and the execution was spot-on.  The hotels were all excellent choices in good locations.  All of the drivers were on-time, or early, and our guides provided suggestions beyond the planned itinerary which greatly enhanced our memories.  I could compliment every person I dealt with, but Arnaud, our driver/guide in and around Nice, stood out for his expertise and engaging personality. Well done French Side Travel!!"
  },
  {
    name: " John Landrum ",
    data: "19 September 2024",
    review: "French Side Travel arranged our trip from Paris to Normandy and back to Paris with private cars and guides. Everything went very smoothly, 'not a hitch'. Our guides were extremely knowledgeable and spoke beautiful English. The drivers were equally professional. The trip organization and execution could not have been done better. I will use the firm again with great confidence."
  }, {
    name: " Fred Beschorner ",
    data: "30 October 2024",
    review: "Fabulous experience! Lodging was extremely comfortable and the wine tastings and other adventures were fabulous.  We appreciated the great organization and attention to detail. And the drivers and guides provided a wonderful means to see France. Highly recommend"
  }, {
    name: " hyla vick ",
    data: "5 October 2024",
    review: "We had a great trip with French Side Travel.  We worked with Frank to plan it out based on our specific needs and he hit all of the marks.  The most important part was the execution.  We worked with Christopher that planned the details and provided a detailed itinerary.  We were most happy with our guides Claire and Rachel that we spent our days with.  Claire is so knowledgeable and loved sharing her knowledge of the Loire Valley.  Rachel was a definite foodie like us and we had an amazing time wandering through the Halles Market.  thank you for a wonderful and worry free trip"
  }, {
    name: " Tony Zakhem ",
    data: "4 October 2024",
    review: "We just ended a 10 days trip to the French Riviera and Bordeaux with our close friend, French side travel helped us with the trip, coordinated the entire trip from airport pickup to airport departure, working with Elodie in Aix En Provence was just amazing. She is the bomb. Detailed oriented, attention to our needs, tailored the trip to our needs, all the service providers she picked were wonderful, we sure had a memorable trip with our friends, everything was 5 star experiences. Thank you Elodie and French Side Travel."
  }, {
    name: " J J J Fedora ",
    data: "15 January 2025",
    review: "We just got back from a fabulous week in Chamonix planned and booked by French Side Travel. Their entire team was great to work with! We made a lot of changes early in the planning stage to our itinerary and really appreciated their patience. Everything went as planned and they did a great job!"
  }, {
    name: " Frederick Foote ",
    data: "24 March 2025",
    review: "I had French Side Travel arrange for a 6-day ski trip in the French Alps.  The location they suggested (Courchevel) was so amazing -- the hotel, the town, the resort, the ski guide -- everything was first rate.  Planning next year's trip now."
  }]
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("./src/assets/eiffel-tour-paris-france-tours.jpg")',
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
            <a href="" className='inline-block bg-[#e8dcba] text-[#1b3154] py-2 px-12 rounded-full  text-xl transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
            >
              Customize My Trip
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#1F3653] pt-[30px] w-full z-50 ">
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
        <div className='text-center text-sm mt-4'>
          <strong>Google</strong> rating score: <span className='font-bold'>4.9</span> of 5, based on <span className='font-bold underline cursor-pointer'><a href="https://www.google.com/search?hl=en-UZ&gl=uz&q=French+Side+Travel,+49+Cr+Mirabeau,+13100+Aix-en-Provence,+France&ludocid=532799359941301942&lsig=AB86z5Upvh70KTA4BtNjP-rQs1p5#lrd=0x12c98da84737b347:0x764e231e9db56b6,1">162 reviews</a></span>
        </div>
      </section>
    </main>
  )
}
