// import { useState, useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { DownOutlined, MenuOutlined, CloseOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
// import { Menu, Dropdown } from 'antd';

// const CONTACT_PHONE = '+1 646 809 1975';

// const destinations = [
//   ['Alsace', '/destinations/alsace/'],
//   ['Basque Country', '/destinations/basque-country/'],
//   ['Bordeaux', '/destinations/bordeaux-tours-trips/'],
//   ['Burgundy', '/destinations/burgundy-tours-trips/'],
//   ['Champagne', '/destinations/champagne-tours-trips/'],
//   ['Corsica', '/destinations/corsica-tours-trips/'],
//   ['French Alps', '/destinations/french-alps-ski-tours-trips/'],
//   ['Loire Valley', '/destinations/loire-valley-tours/'],
// ];

// const travelTypes = [
//   ['Family-Friendly Travel', '/travel/family'],
//   ['Group Travel', '/travel/group'],
//   ['History & Culture', '/travel/history'],
//   ['Honeymoons & Romance', '/travel/romance'],
//   ['Self-Drive Trips & Tours', '/travel/self-drive'],
//   ['Skiing & Adventure', '/travel/adventure'],
//   ['Wellness & Relaxation', '/travel/wellness'],
//   ['Wine & Food', '/travel/food'],
// ];

// const aboutUs = [
//   ['About Us', '/about'],
//   ['Client Testimonials', '/client-testimonials-1/'],
//   ['Our Travel Designers', '/travel-designers/'],
//   ['FAQ', '/faq/'],
//   ['Contact', '/contact/'],
//   ['For Agencies & Operators', '/work-with-us/'],
// ];

// const generateMenu = (items) =>
//   useMemo(
//     () => (
//       <Menu className="bg-[#1B3154] py-[3px] px-5 rounded-none mt-0 border-0 min-w-[200px]">
//         {items.map(([label, path]) => (
//           <Menu.Item
//             key={path}
//             className="text-white text-[15px] py-2 transition-colors hover:bg-transparent hover:!text-[#c2ac57] border-0"
//           >
//             <Link to={path} className="text-inherit block" aria-label={`Navigate to ${label}`}>
//               {label}
//             </Link>
//           </Menu.Item>
//         ))}
//       </Menu>
//     ),
//     [items]
//   );

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//     if (!isMobileMenuOpen) {
//       setActiveDropdown(null);
//     }
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const renderNavItem = (label, path, key) => (
//     <div
//       className={`px-2 leading-snug transition-all cursor-pointer ${
//         activeDropdown === key ? 'bg-[#1B3154] text-white' : 'text-[#1B3154]'
//       }`}
//       onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown(key)}
//       onClick={() => isMobileMenuOpen && setActiveDropdown(activeDropdown === key ? null : key)}
//       role="button"
//       aria-expanded={activeDropdown === key}
//       aria-haspopup="true"
//     >
//       <Link
//         to={path}
//         className={`${activeDropdown === key ? 'text-white' : 'text-[#1B3154]'} hover:text-[#c2ac57] whitespace-nowrap`}
//         aria-label={`${label} dropdown`}
//       >
//         {label} <DownOutlined className="text-xs ml-1" />
//       </Link>
//     </div>
//   );

//   const renderAccordionItem = (label, items, key) => (
//     <div className="w-full border-b border-gray-200 last:border-b-0">
//       <button
//         className={`w-full text-left px-4 py-4 text-[#1B3154] text-lg flex justify-between items-center ${
//           activeDropdown === key ? 'bg-[#1B3154] text-white' : ''
//         }`}
//         onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
//         aria-expanded={activeDropdown === key}
//         aria-controls={`accordion-${key}`}
//       >
//         {label}
//         <DownOutlined
//           className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
//         />
//       </button>
//       <div
//         id={`accordion-${key}`}
//         className={`overflow-hidden transition-all duration-300 ${
//           activeDropdown === key ? 'max-h-[500px]' : 'max-h-0'
//         }`}
//       >
//         <div className="bg-black py-2 px-5">
//           {items.map(([subLabel, subPath]) => (
//             <Link
//               key={subPath}
//               to={subPath}
//               className="block w-full text-black text-[15px] py-2 transition-colors hover:text-[#c2ac57]"
//               aria-label={`Navigate to ${subLabel}`}
//               onClick={closeMobileMenu}
//             >
//               {subLabel}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <header className="sticky top-0 z-[1000] w-full bg-white px-4 lg:px-[30px] h-[70px] flex items-center shadow-sm">
//       <div className="w-full max-w-[1250px] mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" onClick={closeMobileMenu}>
//           <img 
//             src="/frenchside-logo.svg" 
//             alt="French Side Travel Logo" 
//             className="h-8 lg:h-10" 
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-3 xl:gap-[30px]">
//           <Dropdown
//             overlay={generateMenu(destinations)}
//             trigger={['hover']}
//             onOpenChange={(visible) => setActiveDropdown(visible ? 'destinations' : null)}
//             overlayClassName="dropdown-overlay"
//             className='py-[5px] px-[5px]'
//           >
//             {renderNavItem('Destinations', '/destinations', 'destinations')}
//           </Dropdown>

//           <Dropdown
//             overlay={generateMenu(travelTypes)}
//             trigger={['hover']}
//             onOpenChange={(visible) => setActiveDropdown(visible ? 'travel-types' : null)}
//             className='py-[5px] px-[5px]'
//             overlayClassName="dropdown-overlay"
//           >
//             {renderNavItem('Travel Types', '/travel-ideas', 'travel-types')}
//           </Dropdown>

//           <Dropdown
//             overlay={generateMenu(aboutUs)}
//             trigger={['hover']}
//             onOpenChange={(visible) => setActiveDropdown(visible ? 'about' : null)}
//             className='py-[5px] px-[5px]'
//             overlayClassName="dropdown-overlay"
//           >
//             {renderNavItem('About Us', '/about', 'about')}
//           </Dropdown>

//           <Link 
//             to="/blog/" 
//             className="text-[#1B3154] px-2 hover:text-[#c2ac57] transition-colors whitespace-nowrap"
//             onClick={closeMobileMenu}
//           >
//             Travel Inspiration
//           </Link>

//           {/* Phone Section with Modal */}
//           <div 
//             className="relative flex items-center gap-2 ml-2"
//             onMouseEnter={() => setModalVisible(true)}
//             onMouseLeave={() => setModalVisible(false)}
//           >
//             <img src="public/call-button-art.svg" alt="Phone Icon" />
//             <a 
//               href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
//               className="font-bold text-[#1B3154] whitespace-nowrap text-sm xl:text-base hover:text-[#c2ac57]"
//             >
//               {CONTACT_PHONE}
//             </a>

//             {/* Modal */}
//             {isModalVisible && (
//               <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-[300px] z-50 border border-gray-200">
//                 <div className="flex items-center gap-2">
//                   <PhoneOutlined className="text-green-600" />
//                   <p className="text-gray-700 text-sm">
//                     We are available Monday to Saturday from 9:30am to 6:30pm Paris time.
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 mt-2">
//                   <MailOutlined className="text-gray-600" />
//                   <Link 
//                     to="/contact/" 
//                     className="text-gray-700 text-sm hover:text-[#c2ac57]"
//                     onClick={closeMobileMenu}
//                   >
//                     Or contact us anytime here
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link 
//             to="/customize-your-trip" 
//             className="bg-[#1B3154] py-[5px] text-white font-medium px-[5px] rounded-[16px] xl:px-4 xl:py-2 hover:text-[#c2ac57] transition-colors whitespace-nowrap text-sm xl:text-base"
//           >
//             Customize Your Trip
//           </Link>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden text-[#1B3154] text-2xl p-2"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//           aria-expanded={isMobileMenuOpen}
//         >
//           {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
//         </button>
//       </div>

//       {/* Mobile Menu Content */}
//       <div
//         className={`lg:hidden fixed top-[70px] left-0 right-0 bg-white px-0 py-2 space-y-0 max-h-[calc(100vh-70px)] overflow-y-auto shadow-lg transition-all duration-300 ${
//           isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//       >
//         {renderAccordionItem('Destinations', destinations, 'destinations')}
//         {renderAccordionItem('Travel Types', travelTypes, 'travel-types')}
//         {renderAccordionItem('About Us', aboutUs, 'about')}

//         <Link 
//           to="/blog/" 
//           className="block text-[#1B3154] px-4 py-4 text-lg border-b border-gray-200"
//           onClick={closeMobileMenu}
//         >
//           Travel Inspiration
//         </Link>

//         <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
//           <img src="public/call-button-art.svg" alt="Phone Icon" />
//           <a 
//             href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
//             className="font-bold text-[#1B3154] text-lg"
//           >
//             {CONTACT_PHONE}
//           </a>
//         </div>

//         <Link
//           to="/customize-your-trip"
//           className="block bg-[#1B3154] text-white font-medium w-full py-3 px-4 text-center hover:text-[#c2ac57] transition-colors cursor-pointer text-lg"
//           onClick={closeMobileMenu}
//         >
//           Customize Your Trip
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (section) => {
    if (accordionOpen === section) {
      setAccordionOpen(null);
    } else {
      setAccordionOpen(section);
    }
  };

  return (
    <div className='w-full bg-white fixed top-0 z-50 shadow-md'>
      <div className='container h-[90px] mx-auto flex justify-between items-center px-4'>

        {/* Logo */}
        <div className='w-[170px] h-[70px]'>
          <Link to={"/"}>
            <img src="/frenchside-logo.svg" alt="logo-nav" className="w-full h-full" />
          </Link>
        </div>

        {/* Desktop Menu - Hidden below 1024px */}
        <ul className='hidden lg:flex gap-[25px] relative items-center'>

          {/* Destinations */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('destinations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink to={"/"} className={`gap-[5px] py-[7px] px-[7px] flex items-center ${openDropdown === 'destinations' ? 'bg-[#1B3154] text-white' : 'hover:bg-[#1B3154] hover:text-white'}`}>
              Destinations <SlArrowDown className='text-[10px]' />
            </NavLink>

            {openDropdown === 'destinations' && (
              <div className='absolute top-[35px] left-0  bg-[#1B3154] shadow-lg w-[230px] p-4'>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Europe</p>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Asia</p>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>America</p>
              </div>
            )}
          </div>

          {/* Travel Types */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('travel')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink to={"/"} className={`gap-[5px] py-[7px] px-[7px] flex items-center ${openDropdown === 'travel' ? 'bg-[#1B3154] text-white' : 'hover:bg-[#1B3154] hover:text-white'}`}>
              Travel Types <SlArrowDown className='text-[10px]' />
            </NavLink>

            {openDropdown === 'travel' && (
              <div className='absolute top-[35px] left-0 bg-[#1B3154] shadow-lg w-[230px] p-4'>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Luxury Travel</p>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Adventure Travel</p>
              </div>
            )}
          </div>

          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink to={"/"} className={`gap-[5px] py-[7px] px-[7px] flex items-center ${openDropdown === 'about' ? 'bg-[#1B3154] text-white' : 'hover:bg-[#1B3154] hover:text-white'}`}>
              About Us <SlArrowDown className='text-[10px]' />
            </NavLink>

            {openDropdown === 'about' && (
              <div className='absolute top-[35px] left-0 bg-[#1B3154] shadow-lg w-[230px] p-4'>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Our Story</p>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Meet the Team</p>
              </div>
            )}
          </div>

          {/* Travel Inspiration */}
          <NavLink to={"/"} className='gap-[5px] py-[7px] px-[7px] flex items-center hover:bg-[#1B3154] hover:text-white'>
            Travel Inspiration
          </NavLink>

          {/* Phone Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('phone')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className='flex gap-[10px] items-center cursor-pointer'>
              <img src="/phone-call.png" alt="" className='w-[20px] h-[20px]' />
              <li className='font-bold list-none'>+1 646 809 1975</li>
            </div>

            {openDropdown === 'phone' && (
              <div className='absolute top-[35px] left-[-30px] bg-[#1B3154] shadow-lg w-[260px] p-4'>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Support: support@example.com</p>
                <p className='text-white hover:text-[#CCBC7D] cursor-pointer'>Booking Info: booking@example.com</p>
              </div>
            )}
          </div>

          {/* Button */}
          <button className='bg-[#1B3154] py-[6px] px-[20px] rounded-3xl text-white'>
            Customize Your Trip
          </button>
        </ul>

        {/* Mobile Menu Icon - Shows below 1024px */}
        <div className='lg:hidden flex items-center'>
          <FaBars size={24} className="cursor-pointer" onClick={() => setMobileMenu(true)} />
        </div>

        {/* Mobile FullScreen Menu */}
        {mobileMenu && (
          <div className='fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto'>
            <div className='flex justify-between items-center mb-8'>
              <img src="/frenchside-logo.svg" alt="logo-nav" className="w-[150px] h-auto" />
              <FaTimes size={24} className="cursor-pointer" onClick={() => setMobileMenu(false)} />
            </div>

            {/* Accordion Menu */}
            <div className='flex flex-col gap-4'>

              {/* Destinations */}
              <div>
                <div 
                  className='flex justify-between items-center font-bold cursor-pointer py-2' 
                  onClick={() => toggleAccordion('destinations')}
                >
                  Destinations 
                  <SlArrowDown 
                    className={`transition-transform duration-300 ease-in-out ${accordionOpen === 'destinations' ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === 'destinations' ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className='pl-4 py-2 flex flex-col gap-2'>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Europe</p>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Asia</p>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>America</p>
                  </div>
                </div>
              </div>

              {/* Travel Types */}
              <div>
                <div 
                  className='flex justify-between items-center font-bold cursor-pointer py-2' 
                  onClick={() => toggleAccordion('travel')}
                >
                  Travel Types 
                  <SlArrowDown 
                    className={`transition-transform duration-300 ease-in-out ${accordionOpen === 'travel' ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === 'travel' ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className='pl-4 py-2 flex flex-col gap-2'>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Luxury Travel</p>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Adventure Travel</p>
                  </div>
                </div>
              </div>

              {/* About Us */}
              <div>
                <div 
                  className='flex justify-between items-center font-bold cursor-pointer py-2' 
                  onClick={() => toggleAccordion('about')}
                >
                  About Us 
                  <SlArrowDown 
                    className={`transition-transform duration-300 ease-in-out ${accordionOpen === 'about' ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === 'about' ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className='pl-4 py-2 flex flex-col gap-2'>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Our Story</p>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Meet the Team</p>
                  </div>
                </div>
              </div>

              {/* Travel Inspiration */}
              <NavLink 
                to={"/"} 
                className='font-bold py-2'
                onClick={() => setMobileMenu(false)}
              >
                Travel Inspiration
              </NavLink>

              {/* Phone */}
              <div>
                <div 
                  className='flex justify-between items-center font-bold cursor-pointer py-2' 
                  onClick={() => toggleAccordion('phone')}
                >
                  <div className='flex items-center gap-2'>
                    <img src="/phone-call.png" alt="" className='w-[20px] h-[20px]' />
                    +1 646 809 1975
                  </div>
                  <SlArrowDown 
                    className={`transition-transform duration-300 ease-in-out ${accordionOpen === 'phone' ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === 'phone' ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className='pl-4 py-2 flex flex-col gap-2'>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Support: support@example.com</p>
                    <p className='text-gray-700 hover:text-[#1B3154] cursor-pointer'>Booking: booking@example.com</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button 
                className='mt-6 bg-[#1B3154] py-[10px] px-[20px] rounded-3xl text-white w-full'
                onClick={() => setMobileMenu(false)}
              >
                Customize Your Trip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;

