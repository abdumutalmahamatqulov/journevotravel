import { images, reviewers } from "../../data/detail";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaCheckCircle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import React, { useEffect, useRef, useState } from "react";
import { BsMicMute, BsMic } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/navigation';
const HomePage = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [expanded, setExpanded] = useState({});
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true; // default holatda ovoz yo'q
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMuted = !videoRef.current.muted;
            videoRef.current.muted = newMuted;
            setIsMuted(newMuted);
        }

    }
    return (
        <main>
            <section className="h-[68vh]">
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover "
                        preload="none"
                        loop
                        muted
                        playsInline
                        autoPlay
                    >
                        <source src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2024/11/fs-splash-full.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute top-[40%] w-full flex flex-col items-center justify-center text-white drop-shadow-lg">
                        <h1 className="text-3xl md:text-5xl mb-4 text-center text-shadow-lg">
                            Handcrafted Private Journeys in France
                        </h1>
                        <button
                            onClick={toggleMute}
                            className="bg-white/10 text-white px-4 py-2 rounded-lg text-xl"
                        >
                            {isMuted ? <BsMicMute /> : <BsMic />}
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-white text-[#1b3154] text-[16px] font-[Montserrat] p-[40px]">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="m-[26.56px] text-[32px] font-semibold leading-[1.2em] text-center text-[#1b3154] font-[Mate]">France Luxury Travel Experts</h2>
                    <div className="box-border">
                        <h3 className="text-[#1b3154] text-[1em] font-medium justify-center grid">Unique Luxury Travel Experiences in France</h3>
                        <div className="mx-auto max-w-[720px] text-[1em] font-light m-4">
                            <p class="block my-[1em] mx-0 [unicode-bidi:isolate]">Planning your dream trip to France? French Side Travel crafts
                                <em className="italic font-[16px]">custom luxury experiences</em><br />
                                for discerning travelers. Family vacations, honeymoons, wine-tasting, or Corsican adventures – discover it all with us. We pride ourselves on our extensive hands-on knowledge, a network of fantastic service providers, dedication to customer service, and keen attention to detail.
                            </p>
                            <p class=" my-[1em] mx-0 [unicode-bidi:isolate] justify-center grid">Named Top Travel Advisor | France Specialist on Travel + Leisure’s 2025 A-List.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[1.5em] px-20">
                        <a
                            href=""
                            className="box-border bg-[#1b3154] rounded-[32px] text-white px-[1.8em] py-[0.5em] no-underline"
                        >
                            Speak to an Expert
                        </a>
                    </div>

                </div>
            </section>
            <section className="bg-white">
                <div className='w-full max-w-3xl relative mx-auto pb-4'>
                    {/* Custom arrows */}
                    <button
                        ref={prevRef}
                        className="absolute top-[60%] left-[-100px] z-10 text-[#1b3154] text-xl"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute top-[60%] right-[-100px] z-10 text-[#1b3154] text-xl"
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
                                    <div className='max-w-xl mx-auto'>
                                        <p
                                            className={`text-[15px] leading-relaxed text-[#1b3154] ${expanded[index] ? '' : 'line-clamp-3'
                                                }`}
                                        >
                                            {item.review}
                                        </p>
                                        {item.review.length > 150 && (
                                            <button
                                                onClick={() => toggleExpand(index)}
                                                className='mt-2 text-sm text-blue-600 underline hover:text-blue-800 transition'
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
            </section>
            {/* Why French Side Travel? */}
            {/* <div className=" absolute top-0 left-0 w-full">
                <svg
                    className="w-full h-[100px] rotate-180"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,213.3C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" // yuqoridagi path bilan bir xil bo‘lsa ham bo‘ladi
                    ></path>
                </svg>
            </div> */}
            <section className="bg-[#1b3154] py-16 text-white relative pt-[100px] overflow-hidden">
                <div className="max-w-[1200px] mx-auto py-20 px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-[Mate]">
                        Why French Side Travel?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-center ">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center pl-0 px-[10px]">
                            <div className="w-[214px] h-14 justify-center flex">

                                <img
                                    src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/award-winning.png"
                                    alt="Award Winning"
                                    width={100}
                                    height={100}
                                    className=" w-[52px] h-[52px]"
                                />
                            </div>
                            <h4 className="text-[1.125em] font-[500] leading-[1.375em] my-[0.25em] mb-[0.5em] uppercase">
                                An Award-Winning Agency
                            </h4>

                            <p className="font-light text-[1.125em] leading-[1.375em] h-[74.25px]">
                                Recognized as a Top Travel Advisor for France
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center px-[10px]">
                            <div className="w-[214px] h-14 justify-center flex">

                                <img
                                    src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/local-icon.png"
                                    alt="Local Knowledge"
                                    width={100}
                                    height={100}
                                    className=" w-[52px] h-[52px]"
                                />
                            </div>
                            <h4 className="text-[1.125em] font-[500] leading-[1.375em] my-[0.25em] mb-[0.5em] uppercase">Hands-on Local Knowledge</h4>
                            <p className="font-light text-[1.125em] leading-[1.375em] h-[74.25px]">Our travel designers live and work in France</p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center px-[10px]">
                            <div className="w-[214px] h-14 justify-center flex">

                                <img
                                    src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/wine-real-france-icon.png"
                                    alt="Real France"
                                    width={100}
                                    height={100}
                                    className=" w-[52px] h-[52px]"
                                />
                            </div>
                            <h4 className="text-[1.125em] font-[500] leading-[1.375em] my-[0.25em] mb-[0.5em] uppercase">Immersion in the Real France</h4>
                            <p className="font-light text-[1.125em] leading-[1.375em] h-[74.25px]">
                                Enjoy unique and authentic experience throughout the whole country
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center px-[10px]">
                            <div className="w-[214px] h-14 justify-center flex">

                                <img
                                    src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/24-7-support-assistance-icon.png"
                                    alt="24/7 Support"
                                    width={100}
                                    height={100}
                                    className=" w-[52px] h-[52px]"
                                />
                            </div>
                            <h4 className="text-[1.125em] font-[500] leading-[1.375em] my-[0.25em] mb-[0.5em] uppercase">24/7 Support &amp; Assistance</h4>
                            <p className="font-light text-[1.125em] leading-[1.375em] h-[74.25px]">
                                We are there for you with a 24/7 English-spoken emergency line
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col items-center">
                            <div className="w-[214px] h-14 justify-center flex">

                                <img
                                    src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/peace-of-mind-icon.png"
                                    alt="Peace of Mind"
                                    width={100}
                                    height={100}
                                    className=" w-[52px] h-[52px]"
                                />
                            </div>
                            <h4 className="text-[1.125em] font-[500] leading-[1.375em] my-[0.25em] mb-[0.5em] uppercase">Travel With Peace of Mind</h4>
                            <p className="font-light text-[1.125em] leading-[1.375em] h-[74.25px]">
                                Our team puts your safety and comfort first
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* Our Best Tour Selection */}
            <section className="bg-white pt-[3em] pb-[3em] h-[607.5px]">
                <div className="max-w-[1300px] mx-auto h-full">
                    <div className="flex justify-center w-full">

                        <h2 className="text-[#1b3154] font-[500]  my-[26.56px] text-[32px]">Our Best Tour Selection</h2>
                    </div>
                    <div className="relative overflow-visible">
                        {/* Custom arrows */}
                        <button
                            ref={prevRef}
                            className="absolute top-[50%] left-[-50px] z-10 text-[#1b3154] text-xl"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            ref={nextRef}
                            className="absolute top-[50%] right-[-50px] z-10 text-[#1b3154] text-xl"
                        >
                            <FaChevronRight />
                        </button>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            spaceBetween={5}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                        >
                            {images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full h-auto p-[12px] relative bg-white rounded-lg shadow-sm hover:shadow-2xl'>
                                        <img
                                            src={item.rasm}
                                            alt={item.title}
                                            className='mx-auto w-full  h-[360px]  rounded-lg object-cover'
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-b-lg h-[2em] w-[85%]">

                                            <h3 className="bg-white/70 rounded-t-[4px] table h-[2em] mx-auto p-[0.25em] w-[80%] text-center">
                                                {item.title}
                                            </h3>

                                            <span className="bg-[#04232d] text-white rounded-b-[4px] text-[10px] mx-auto px-2 py-[0.35em] w-[80%] flex justify-center">
                                                {item.priceline}
                                            </span>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                            )}
                        </Swiper>
                    </div>
                </div>

            </section>
            <section class="py-12 bg-[#1b3154]">
                <div class="max-w-[1240px] mx-auto px-4 py-10 rounded-xl">
                    <div class="text-center space-y-6">
                        <h1 class="text-3xl md:text-4xl font-semibold text-white px-4">
                            Ready to Start Planning Your Trip to France?
                        </h1>
                        <p class="mx-auto max-w-3xl text-white text-lg md:text-xl leading-relaxed">
                            Speak to a France specialist to start planning your tailor-made vacation. With so much to see and do, planning a trip to France isn't easy. French Side Travel's experts are here to help. Our travel designers have the knowledge to help you create the trip you've been longing for!
                        </p>
                        <div class="flex justify-center gap-4 mt-8">
                            <a
                                href="https://frenchsidetravel.com/customize-your-trip/"
                                class="bg-[#f9f5f0] text-[#1b3154] px-8 py-3 rounded-full font-medium hover:bg-[#e8e0d6] transform transition-all duration-300 hover:-translate-y-1"
                            >
                                Inquire Today
                            </a>
                        </div>
                    </div>

                    <div class="mt-16 flex justify-center gap-8 flex-wrap px-4">
                        <img
                            src="/Florence-new-travel-designer-photo.png"
                            alt="Travel Designer Florence"
                            class="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <img
                            src="/Matt-Travel-Desinger.png"
                            alt="Travel Designer Matt"
                            class="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <img
                            src="/Severine-Travel-Desinger.png"
                            alt="Travel Designer Severine"
                            class="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div class="text-center mt-10">
                        <a
                            href="/travel-designers"
                            class="inline-block bg-white text-[#1b3154] px-8 py-3 rounded-full font-medium hover:bg-[#f9f5f0] transform transition-all duration-300 hover:-translate-y-1"
                        >
                            Meet Our Travel Designers
                        </a>
                    </div>
                </div>
            </section>


        </main>
    )
}
export default HomePage;