import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { DownOutlined, MenuOutlined, CloseOutlined, PhoneOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const CONTACT_PHONE = '+1 646 809 1975';

const destinations = [
  ['Alsace', '/destinations/alsace/'],
  ['Basque Country', '/destinations/basque-country/'],
  ['Bordeaux', '/destinations/bordeaux-tours-trips/'],
  ['Burgundy', '/destinations/burgundy-tours-trips/'],
  ['Champagne', '/destinations/champagne-tours-trips/'],
  ['Corsica', '/destinations/corsica-tours-trips/'],
  ['French Alps', '/destinations/french-alps-ski-tours-trips/'],
  ['Loire Valley', '/destinations/loire-valley-tours/'],
];

const travelTypes = [
  ['Family-Friendly Travel', '/travel/family'],
  ['Group Travel', '/travel/group'],
  ['History & Culture', '/travel/history'],
  ['Honeymoons & Romance', '/travel/romance'],
  ['Self-Drive Trips & Tours', '/travel/self-drive'],
  ['Skiing & Adventure', '/travel/adventure'],
  ['Wellness & Relaxation', '/travel/wellness'],
  ['Wine & Food', '/travel/food'],
];

const aboutUs = [
  ['About Us', '/about'],
  ['Client Testimonials', '/client-testimonials-1/'],
  ['Our Travel Designers', '/travel-designers/'],
  ['FAQ', '/faq/'],
  ['Contact', '/contact/'],
  ['For Agencies & Operators', '/work-with-us/'],
];

const generateMenu = (items) =>
  useMemo(
    () => (
      <Menu className="bg-[#1B3154] py-[3px] px-5 rounded-none mt-0">
        {items.map(([label, path]) => (
          <Menu.Item
            key={path}
            className="w-[230px] text-white text-[15px] py-2 transition-colors hover:bg-transparent hover:!text-[#c2ac57]"
          >
            <Link to={path} className="text-inherit" aria-label={`Navigate to ${label}`}>
              {label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    ),
    [items]
  );

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const renderNavItem = (label, path, key) => (
    <div
      className={`px-1 leading-snug transition-all cursor-pointer ${
        activeDropdown === key ? 'bg-[#1B3154] text-white' : 'text-[#1B3154]'
      }`}
      onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown(key)}
      onClick={() => isMobileMenuOpen && setActiveDropdown(activeDropdown === key ? null : key)}
      role="button"
      aria-expanded={activeDropdown === key}
      aria-haspopup="true"
    >
      <Link
        to={path}
        className={`${activeDropdown === key ? 'text-white' : 'text-[#1B3154]'}`}
        aria-label={`${label} dropdown`}
      >
        {label} <DownOutlined />
      </Link>
    </div>
  );

  const renderAccordionItem = (label, items, key) => (
    <div className="w-full">
      <button
        className={`w-full text-left px-[10px] py-[8px] text-[#1B3154] text-lg flex justify-between items-center ${
          activeDropdown === key ? 'bg-[#1B3154] text-white' : ''
        }`}
        onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
        aria-expanded={activeDropdown === key}
        aria-controls={`accordion-${key}`}
      >
        {label}
        <DownOutlined
          className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`accordion-${key}`}
        className={`overflow-hidden transition-all duration-300 ${
          activeDropdown === key ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="bg-[#1B3154] py-2 px-5">
          {items.map(([subLabel, subPath]) => (
            <Link
              key={subPath}
              to={subPath}
              className="block w-full text-white text-[15px] py-2 transition-colors hover:text-[#c2ac57]"
              aria-label={`Navigate to ${subLabel}`}
            >
              {subLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white px-[30px] h-[90px] flex items-center shadow-sm">
      <div className="max-w-[1240px] mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/frenchside-logo.svg" alt="French Side Travel Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[30px]">
          <Dropdown
            overlay={generateMenu(destinations)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'destinations' : null)}
            className="px-[10px] py-[8px]"
          >
            {renderNavItem('Destinations', '/destinations', 'destinations')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(travelTypes)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'travel-types' : null)}
            className="px-[10px] py-[8px]"
          >
            {renderNavItem('Travel Types', '/travel-ideas', 'travel-types')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(aboutUs)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'about' : null)}
            className="px-[10px] py-[8px]"
          >
            {renderNavItem('About Us', '/about', 'about')}
          </Dropdown>

          <Link to="/blog/" className="text-[#1B3154] px-1">
            Travel Inspiration
          </Link>

          <div className="flex items-center gap-1">
            {/* <PhoneOutlined className="text-[#1B3154]" /> */}
            <img src="public/call-button-art.svg" alt="" />
            <span className="font-bold text-[#1B3154]">{CONTACT_PHONE}</span>
          </div>

          <button
            className="bg-[#1B3154] text-white font-medium px-4 py-2 rounded-lg hover:text-[#c2ac57] transition-colors"
          >
            Customize Your Trip
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1B3154] text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden absolute top-[90px] left-0 right-0 bg-white px-5 py-4 space-y-3 max-h-[80vh] overflow-y-auto shadow-lg ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {renderAccordionItem('Destinations', destinations, 'destinations')}
        {renderAccordionItem('Travel Types', travelTypes, 'travel-types')}
        {renderAccordionItem('About Us', aboutUs, 'about')}

        <Link to="/blog/" className="block text-[#1B3154] my-2 text-lg">
          Travel Inspiration
        </Link>

        <div className="flex items-center gap-2 mb-3">
          {/* <PhoneOutlined className="text-[#1B3154]" /> */}
          <img src="public/call-button-art.svg" alt="" />
          <span className="font-bold text-[#1B3154] text-lg">{CONTACT_PHONE}</span>
        </div>

        <button
          className="bg-[#1B3154] text-white font-medium w-full py-3 rounded-[16px] hover:text-[#c2ac57] transition-colors cursor-pointer text-lg"
        >
          Customize Your Trip
        </button>
      </div>
    </header>
  );
};

export default Navbar;