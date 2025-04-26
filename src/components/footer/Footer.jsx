import { useSelector } from "react-redux";
import React, { useState } from "react";
import { translations } from "../../data";
import Link from "antd/es/typography/Link";

const Footer = () => {
    const county = ["Alsace", "Basque Country", "Bordeaux", "Burgundy", "Champagne", "Corsica", "French Alps", "French Riviera", "Loire Valley", "Lyon", "Monaco", "Normandy", "Paris", "Provence", "Southern France", "South West France"];
    const place = ["Family-Friendly", "Group Travel", "History & Culture", "Honeymoons & Romance", "Self-drive Tours", "Skiing & Adventure", "Wellness & Relaxation", "Wine & Food"];
    const career = ["Client Testimonials", "Meet Your Next Travel Designer", "FAQ", "For Agencies & Operators", "Careers"];
    const language = useSelector((state) => state?.language.language);
    const [hovered, setHovered] = useState(false);
    const linkStyle = {
        color: 'white',
        fontSize: '18px',
        transition: 'color 0.3s ease',
    };

    const linkHoverStyle = {
        ...linkStyle,
        color: '#c2ac57',
    };
    return (
        <footer className="bg-[#1F3653] text-white font-sans w-full">
            <div className="max-w-[1240px] py-8 mx-auto text-base">
                <div className=" justify-center flex flex-col lg:flex-row px-[25.975px] gap-[80px] font-sans text-base">
                    {/* Subscription Section */}
                    <div className="">
                        <h1 className="text-[32px] font-bold mt-[15px] leading-tight md:justify-start">{translations[language]?.title || translations?.en?.title}</h1>
                        <p className="text-gray-300 mb-4 text-[16px] md:justify-start flex justify-center">{translations[language]?.des || translations?.en?.des}</p>
                        <div className="text-base font-serif pb-[11.5px] flex flex-col justify-between">
                            <div className="flex w-full">
                                <input type="text" placeholder="firt name" className="p-2 mb-2 mr-[7.675px]  w-full rounded text-black text-lg bg-white" />
                                <input type="text" placeholder="last name" className="p-2 mb-2 rounded w-full text-black text-lg bg-white" />
                            </div>
                            <input
                                type="email"
                                placeholder="email address"
                                className="p-2 mb-2  mx-auto w-full rounded text-black text-lg bg-white"
                            />
                            <div className="mx-auto xl:ml-0 flex justify-start">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    className="bg-neutral-400 hover:bg-[#AAAAAA] text-white w-full px-[26px] py-[6px] rounded transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[700px] mx-auto gap-8 md:flex-row hidden sm:flex">
                        {/* Destinations */}
                        <div className="md:col-span-1 whitespace-nowrap gap-2">
                            <h3 className="font-serif text-xl mb-4 flex justify-center md:justify-start">Destinations</h3>
                            <ul className="text-gray-300 text-[16px] ">
                                {county?.map((item) => (
                                    <li key={item}><a href="" className="hover:text-[#c2ac57] transition-all duration-300 justify-center flex md:justify-start">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Types of Trips */}
                        <div className="md:col-span-1 whitespace-nowrap gap-2">
                            <h3 className="font-serif text-xl mb-4 flex justify-center md:justify-start">Types of Trips</h3>
                            <ul className="text-gray-300 text-[16px]">
                                {place?.map((item) => (
                                    <li key={item}><a href="" className="hover:text-[#c2ac57] transition-all duration-300 flex justify-center md:justify-start">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* About Us */}
                        <div className="md:col-span-1 whitespace-nowrap gap-2">
                            <h3 className="font-serif text-xl mb-4 flex justify-center md:justify-start">About Us</h3>
                            <ul className="text-gray-300 text-[16px]">
                                {career?.map((item) => (
                                    <li key={item}><a href="" className="hover:text-[#c2ac57] transition-all duration-300 flex justify-center md:justify-start">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-center gap-10 mt-6 font-sans">
                    <a href="https://www.facebook.com/FrenchSideTravel/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-16 h-12 text-white" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCAlPXB2DuWXX49Fx2pEUppQ" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="w-16 h-12 text-white" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                    <a href="https://www.instagram.com/frenchsidetravel/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-16 h-12 text-white" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                </div>
                {/* Notice */}
                <div className="flex justify-center mt-12 mb-4">
                    <Link
                        target="_blank"
                        style={hovered ? linkHoverStyle : linkStyle}
                        onMouseEnter={() => setHovered(true)} // hover bo'lsa
                        onMouseLeave={() => setHovered(false)} // hoverdan chiqsa
                    >
                        Legal Notice
                    </Link>
                </div>
            </div>
            <div className="bg-[#fbf3dc] py-6 w-full mx-auto ">
                <div className=" justify-center flex max-w-[1240px] mx-auto items-center">

                    <p className=" text-[#666] max-w-4xl">This site is protected by reCAPTCHA and the  Google &nbsp;
                        <a href="https://policies.google.com/privacy" className="underline">Privacy Policy
                        </a>&nbsp;  and &nbsp;
                        <a href="https://policies.google.com/terms" className="underline">Terms of Service
                        </a>&nbsp; apply.
                    </p>

                </div>
            </div>
        </footer>
    )
}
export default Footer;