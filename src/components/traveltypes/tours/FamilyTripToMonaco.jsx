import React, { useEffect, useState } from 'react'
import { itineraries } from '../../../data/detail'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function FamilyTripToMonaco() {
    const [activeDay, setActiveDay] = useState(itineraries[0]?.dayNumber || 1);

    itineraries.forEach(item => {
        console.log("Day number:", item.dayNumber);
    });
    const hotels = [
        {
            title: 'Hotel Monte-Carlo Bay',
            image: '/Hotel-Monte-Carlo-Bay.webp',
        },
        {
            title: 'Meridien Beach Plaza',
            image: '/Meridien-Beach-Plaza.png',
        },
    ];

    return (
        <main>
            <section
                style={{
                    backgroundImage: 'url("/Monaco-Feature.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 25%',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative h-[68vh] flex flex-col items-center justify-start  text-center">
                <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
                <div className='flex flex-col items-center justify-start min-h-screen mt-[200px]'>

                    <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'
                        style={{ fontFamily: 'Mate, serif' }}>A Family Trip to Monaco</h1>
                    <h3 className=' text-center text-[rgba(255,255,255,0.91)] max-w-5xl mx-auto leading-relaxed relative z-10'>
                        <span style={{ fontFamily: 'Montserrat,sans-serif !important', fontSize: '21.6px' }}>4 Days</span>
                        &nbsp; | &nbsp;
                        <span>
                            <a href="/travel-ideas/family-trip-france" style={{ fontFamily: 'Montserrat,sans-serif !important', fontSize: '21.6px' }}>Family-friendly Travel</a>
                        </span>
                    </h3>
                </div>
            </section>
            <section className='bg-[#f9f5f0] relative overflow-hidden w-full'>
                <div className='absolute   left-1/2 transform -translate-x-1/2 bg-[#1b3154] w-[120%] -top-1 h-[70px] rounded-b-[50%] z-10'></div>
                <div className='max-w-[1240px] mx-auto '
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Montserrat,sans-serif !important',
                        fontSize: '16px',
                        color: '#333',
                        padding: '80px 0 40px',
                        margin: '0 auto',
                        backgroundColor: '#f9f5f0',
                    }}>

                    <h3
                        style={{
                            fontFamily: 'Montserrat,sans-serif !important',
                            textAlign: 'center',
                            fontSize: '25.6px',
                            fontWeight: 400,
                            color: '#1b3154',
                            margin: '0 2px',
                        }}
                    >
                        Family Retreat to the Serene Principality of Monaco
                    </h3>
                    <h3
                        style={{
                            display: 'inline-block',
                            justifyContent: 'center',
                            fontFamily: 'Montserrat,sans-serif !important',
                            textAlign: 'center',
                            fontSize: '18.75px',
                            margin: '18.72px 0',
                            padding: '9.35px 28.08px',
                            color: '#1b3154',
                            fontWeight: 700,
                            border: '1px solid #1b3154',
                        }}
                    >
                        Premium | $1,599 pp
                    </h3>

                    <div
                        className='family-trip-discription'
                    >
                        Embark on a luxurious 4-day journey to Monaco with your family. Stay at a chic 4-star hotel with a 2 Michelin-star restaurant, various water sports activities, and a private beach. Immerse yourselves in the beauty of the Mediterranean while painting your own travel book in watercolors, creating memories for you and your family. Visit one of Monaco's incredible museums for an enriching experience. Our favorites include the Prince of Monaco's historic car collection and the Oceanographic Museum, where your family can participate in an escape room activity!
                    </div>
                </div>
            </section>
            <section className='bg-[#fff] w-full'>
                <div className='tour-body'>
                    <div className='tour-body-center flex-col lg:flex-row justify-center flex'>
                        <div className='w-full lg:w-[65%]'>
                            {/* Tab */}
                            <div className='flex gap-3 justify-start ml-8'>
                                <Swiper
                                    spaceBetween={4}
                                    slidesPerView="auto"
                                    freeMode={true}
                                    className="w-full"
                                >
                                    {itineraries.map((item) => (
                                        <SwiperSlide
                                            key={item.dayNumber}
                                            className="!w-auto"
                                        >
                                            <div
                                                // key={item.dayNumber}
                                                onClick={() => setActiveDay(item.dayNumber)}
                                                className={`cursor-pointer flex flex-col items-center border justify-center px-4 rounded-md transition-all duration-200 ${activeDay === item.dayNumber
                                                    ? 'bg-[#1b3154]'
                                                    : 'bg-[#1b3154]'
                                                    }`}
                                            >
                                                <div
                                                    className={`slick-active ${activeDay === item.dayNumber ? ' bg-[#1b3154]' : 'bg-gray-100'}`}
                                                >

                                                    <label
                                                        className={`day ${activeDay === item.dayNumber
                                                            ? 'text-[#c2ac57]'
                                                            : 'text-white'
                                                            }`}
                                                    >
                                                        Day
                                                    </label>
                                                    <span
                                                        className={`number ${activeDay === item.dayNumber
                                                            ? 'text-[#c2ac57]'
                                                            : 'text-white'
                                                            }`}
                                                    >{item.dayNumber}
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {/* Content */}
                            {itineraries.filter((item) => item.dayNumber === activeDay)
                                .map((item) => (
                                    <div
                                        className='itinerary-items-stage'>
                                        <h2></h2>
                                        <div>
                                            <div>
                                                <h3 className='title'>
                                                    {item.title}
                                                </h3>
                                                <div>
                                                    {item?.copies.map((copy, index) => (
                                                        <div className='copy'>
                                                            <p className='strong'>
                                                                <strong>
                                                                    {copy.transfer}
                                                                </strong>
                                                            </p>
                                                            <p className='description'>
                                                                {copy.description}
                                                            </p>
                                                            <p>
                                                                <img className='w' src={copy.image} alt={`Day ${item?.dayNumber}-${index + 1}`} />
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className='title'>About this trip</h3>
                                                <div className='copy'>
                                                    <ul className='ul2 ul1'>
                                                        <li style={{ listStyleType: 'none' }}>
                                                            <ul className='ul2'>
                                                                {item?.aboutTrip?.map((info, i) => (

                                                                    <li key={i} className='li1'>{info}</li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <h3 style={{ textAlign: 'center' }}>
                                                        <strong>Customize this itinerary:</strong>
                                                    </h3>
                                                    <p className='description'>
                                                        Every French Side Travel trip is custom-built for your unique needs and interests. Above is an example of what’s possible. If this isn’t exactly what you’re looking for,
                                                        <a href="/customize-your-trip/" className='underline'>&nbsp;contact us today</a>
                                                        . Put together your dream trip with our travel experts. Handpick the accommodations, guides, activities, and meals that are right for you.
                                                    </p>
                                                    <p className='description'>
                                                        <em>{item.note}</em>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className='title'>Map</h3>
                                                <div className='copy'>
                                                    <p className='map'>
                                                        <iframe
                                                            src={item?.map?.iframe}
                                                            width="100%"
                                                            height="300px"
                                                            frameborder="0"
                                                            allowfullscreen="allowfullscreen"
                                                            title={`Map Day ${item?.dayNumber}`}
                                                        ></iframe>
                                                    </p>
                                                    <p className='mx-0 my-4'>
                                                        <a
                                                            href={item.map.fullscreenLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            See full screen
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className='w-full lg:w-[35%]  m-6 lg:mt-0 lg:ml-12 mx-auto'>
                            <div className='sidebar_copy'>
                                <h4></h4>
                                <div>
                                    <h4 className=''>Speak to a Local Travel Designer</h4>
                                    <img src="/Mark-new-travel-designer-photo.png" alt="" className='mx-auto block' />
                                    <a href="/customize-your-trip/" className='sidebar-button_cta'>Inquire Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='tour-cta'>
                        <span className='blue_button_cta'>
                            <a href="/customize-your-trip/">Customize My Trip</a>
                        </span>
                    </div>
                    <p className='w-full'><br /></p>
                </div>
            </section>
            <section className='relative w-full bg-[#e8dcba]'>
                <div className='max-w-[1240px] mx-auto'>
                    <div className='bg-[#e8dcba]'>

                        <div className="absolute top-0 left-0 w-full h-[80px] rounded-b-[70%] bg-white z-[1]"></div>
                    </div>
                    <div id="tour-hotels">
                        <h2 className="titles">
                            <br />
                            Our Favorite Hotels
                        </h2>
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="max-w-[50%] mx-auto rounded-xl pb-6"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {hotels.map((hotel, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative h-[400px] min-h-[300px] bg-cover bg-center rounded-xl"
                                        style={{ backgroundImage: `url(${hotel.image})` }}
                                    >
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-white/85 w-[90%] sm:w-[80%] md:w-[70%] xl:w-[80%]
             px-4 py-2 rounded-lg text-[#1b3154] 
             text-sm sm:text-base md:text-lg font-medium 
             text-center break-words"
                                        >
                                            {hotel.title}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <p className='bg-white'></p>
                </div>
            </section>
        </main>
    )
}

export default FamilyTripToMonaco