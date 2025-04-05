import { useSelector } from "react-redux";
import React from "react";
import { translations } from "../../data";

const Footer = () => {
    const county = ["Alsace", "Basque Country", "Bordeaux", "Burgundy", "Champagne", "Corsica", "French Alps", "French Riviera", "Loire Valley", "Lyon", "Monaco", "Normandy", "Paris", "Provence", "Southern France", "South West France"];
    const place = ["Family-Friendly", "Group Travel", "History & Culture", "Honeymoons & Romance", "Self-drive Tours", "Skiing & Adventure", "Wellness & Relaxation", "Wine & Food"];
    const career = ["Client Testimonials", "Meet Your Next Travel Designer", "FAQ", "For Agencies & Operators", "Careers"];
    const language = useSelector((state) => state?.language.language);
    return (
        <footer className="bg-[#1F3653] text-white py-12 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
                {/* Subscription Section */}
                <div className="md:col-span-1 w-full max-w-xl">
                    <h1 className="text-3xl font-bold mb-3 leading-tight">{translations[language]?.title || translations?.en?.title}</h1>
                    <p className="text-gray-300 mb-5 text-lg">{translations[language]?.des || translations?.en?.des}</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder="firt name" className="p-2 rounded w-1/2 text-black text-xl bg-white" />
                        <input type="text" placeholder="last name" className="p-2 rounded w-1/2 text-black text-xl bg-white" />
                    </div>
                    <input type="text" placeholder="email address" className="p-3 mt-3 w-full max-w-full rounded text-black text-xl bg-white" />
                    <button className="bg-gray-400 text-white px-8 py-3 text-xl rounded mt-4 font-semibold">
                        Subscribe
                    </button>
                </div>
                {/* Subscription va Destinations orasidagi masofa */}
                <div className="hidden md:block md:col-span-0 md:gap-12" style={{ width: '3rem' }}></div>
                {/* Destinations */}
                <div className="md:col-span-1">
                    <h3 className="font-bold text-2xl mb-4">Destinations</h3>
                    <ul className="text-gray-300 text-lg">
                        {county?.map((item) => (
                            <li key={item}><a href="">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Types of Trips */}
                <div className="md:col-span-1">
                    <h3 className="font-bold text-2xl mb-4">Types of Trips</h3>
                    <ul className="text-gray-300 text-lg">
                        {place?.map((item) => (
                            <li key={item}><a href="">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* About Us */}
                <div className="md:col-span-1">
                    <h3 className="font-bold text-2xl mb-4">About Us</h3>
                    <ul className="text-gray-300 text-lg">
                        {career?.map((item) => (
                            <li key={item}><a href="">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-12 mt-12">
                <a href="https://www.facebook.com/FrenchSideTravel/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-20 h-14 text-white" style={{filter:'brightness(0) invert(1)'}} />
                </a>
                <a href="https://www.youtube.com/channel/UCAlPXB2DuWXX49Fx2pEUppQ" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="w-20 h-14 text-white" style={{filter:'brightness(0) invert(1)'}}/>
                </a>
                <a href="https://www.instagram.com/frenchsidetravel/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-20 h-14 text-white" style={{filter:'brightness(0) invert(1)'}}/>
                </a>
            </div>
        </footer>
    )
}
export default Footer;