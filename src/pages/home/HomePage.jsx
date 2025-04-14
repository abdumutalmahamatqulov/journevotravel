import { reviewers } from "../../data/detail";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
const HomePage = () => {
    return (
        <main>
            <section>
                <div>
                    <video id="splash" width="100%" height="100%" preload="none" loop muted playsInline autoPlay>
                        <source src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2024/11/fs-splash-full.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="bg-white">
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
            </section>
            <section>
                <div id="frenchside-why-frenchside" class="frenchside-block page tailor-made-trips-to-france">
                    <h2 class="title">Why French Side Travel?</h2>
                    <div class="reason-column one">
                        <div class="icon">
                            <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/award-winning.png" data-lazy-src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/award-winning.png" data-ll-status="loaded" class="entered lazyloaded" />
                            <noscript>
                                <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/award-winning.png" />
                            </noscript>
                        </div>
                        <h4 class="headline">An Award-Winning Agency</h4>
                        <div class="description">Recognized as a Top Travel Advisor for France</div>
                    </div><div class="reason-column two"><div class="icon">
                        <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/local-icon.png" data-lazy-src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/local-icon.png" data-ll-status="loaded" class="entered lazyloaded" />
                        <noscript>
                            <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/local-icon.png" />
                        </noscript>
                    </div>
                        <h4 class="headline">Hands-on Local Knowledge</h4>
                        <div class="description">Our travel designers live and work in France</div>
                    </div><div class="reason-column three">
                        <div class="icon">
                            <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/wine-real-france-icon.png" data-lazy-src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/wine-real-france-icon.png" data-ll-status="loaded" class="entered lazyloaded" />
                            <noscript>
                                <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/wine-real-france-icon.png" />
                            </noscript>
                        </div>
                        <h4 class="headline">Immersion in the Real France</h4>
                        <div class="description">Enjoy unique and authentic experience throughout the whole country</div>
                    </div>
                    <div class="reason-column four">
                        <div class="icon">
                            <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/24-7-support-assistance-icon.png" data-lazy-src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/24-7-support-assistance-icon.png" data-ll-status="loaded" class="entered lazyloaded" />
                            <noscript>
                                <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/24-7-support-assistance-icon.png" />
                            </noscript>
                        </div>
                        <h4 class="headline">24/7 Support &amp; Assistance</h4>
                        <div class="description">We are there for you with a 24/7 English-spoken emergency line</div>
                    </div><div class="reason-column five">
                        <div class="icon">
                            <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/peace-of-mind-icon.png" data-lazy-src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/peace-of-mind-icon.png" data-ll-status="loaded" class="entered lazyloaded" />
                            <noscript>
                                <img width="100" height="100" decoding="async" src="https://6e131064.delivery.rocketcdn.me/wp-content/uploads/2022/08/peace-of-mind-icon.png" />
                            </noscript>
                        </div>
                        <h4 class="headline">Travel With Peace of Mind</h4>
                        <div class="description">Our team puts your safety and comfort first</div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage;