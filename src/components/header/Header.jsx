import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { DownOutlined, MenuOutlined, CloseOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
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
      <Menu className="bg-[#1B3154] py-[3px] px-5 rounded-none mt-0 border-0 min-w-[200px]">
        {items.map(([label, path]) => (
          <Menu.Item
            key={path}
            className="text-white text-[15px] py-2 transition-colors hover:bg-transparent hover:!text-[#c2ac57] border-0"
          >
            <Link to={path} className="text-inherit block" aria-label={`Navigate to ${label}`}>
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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderNavItem = (label, path, key) => (
    <div
      className={`px-2 leading-snug transition-all cursor-pointer ${
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
        className={`${activeDropdown === key ? 'text-white' : 'text-[#1B3154]'} hover:text-[#c2ac57] whitespace-nowrap`}
        aria-label={`${label} dropdown`}
      >
        {label} <DownOutlined className="text-xs ml-1" />
      </Link>
    </div>
  );

  const renderAccordionItem = (label, items, key) => (
    <div className="w-full border-b border-gray-200 last:border-b-0">
      <button
        className={`w-full text-left px-4 py-4 text-[#1B3154] text-lg flex justify-between items-center ${
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
              onClick={closeMobileMenu}
            >
              {subLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white px-4 lg:px-[30px] h-[70px] flex items-center shadow-sm">
      <div className="w-full max-w-[1250px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img 
            src="/frenchside-logo.svg" 
            alt="French Side Travel Logo" 
            className="h-8 lg:h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-[30px]">
          <Dropdown
            overlay={generateMenu(destinations)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'destinations' : null)}
            overlayClassName="dropdown-overlay"
            className='py-[5px] px-[5px]'
          >
            {renderNavItem('Destinations', '/destinations', 'destinations')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(travelTypes)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'travel-types' : null)}
            className='py-[5px] px-[5px]'
            overlayClassName="dropdown-overlay"
          >
            {renderNavItem('Travel Types', '/travel-ideas', 'travel-types')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(aboutUs)}
            trigger={['hover']}
            onOpenChange={(visible) => setActiveDropdown(visible ? 'about' : null)}
            className='py-[5px] px-[5px]'
            overlayClassName="dropdown-overlay"
          >
            {renderNavItem('About Us', '/about', 'about')}
          </Dropdown>

          <Link 
            to="/blog/" 
            className="text-[#1B3154] px-2 hover:text-[#c2ac57] transition-colors whitespace-nowrap"
            onClick={closeMobileMenu}
          >
            Travel Inspiration
          </Link>

          {/* Phone Section with Modal */}
          <div 
            className="relative flex items-center gap-2 ml-2"
            onMouseEnter={() => setModalVisible(true)}
            onMouseLeave={() => setModalVisible(false)}
          >
            <img src="public/call-button-art.svg" alt="Phone Icon" />
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
              className="font-bold text-[#1B3154] whitespace-nowrap text-sm xl:text-base hover:text-[#c2ac57]"
            >
              {CONTACT_PHONE}
            </a>

            {/* Modal */}
            {isModalVisible && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-[300px] z-50 border border-gray-200">
                <div className="flex items-center gap-2">
                  <PhoneOutlined className="text-green-600" />
                  <p className="text-gray-700 text-sm">
                    We are available Monday to Saturday from 9:30am to 6:30pm Paris time.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MailOutlined className="text-gray-600" />
                  <Link 
                    to="/contact/" 
                    className="text-gray-700 text-sm hover:text-[#c2ac57]"
                    onClick={closeMobileMenu}
                  >
                    Or contact us anytime here
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/customize-your-trip" 
            className="bg-[#1B3154] py-[5px] text-white font-medium px-[5px] rounded-[16px] xl:px-4 xl:py-2 hover:text-[#c2ac57] transition-colors whitespace-nowrap text-sm xl:text-base"
          >
            Customize Your Trip
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#1B3154] text-2xl p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 right-0 bg-white px-0 py-2 space-y-0 max-h-[calc(100vh-70px)] overflow-y-auto shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {renderAccordionItem('Destinations', destinations, 'destinations')}
        {renderAccordionItem('Travel Types', travelTypes, 'travel-types')}
        {renderAccordionItem('About Us', aboutUs, 'about')}

        <Link 
          to="/blog/" 
          className="block text-[#1B3154] px-4 py-4 text-lg border-b border-gray-200"
          onClick={closeMobileMenu}
        >
          Travel Inspiration
        </Link>

        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
          <img src="public/call-button-art.svg" alt="Phone Icon" />
          <a 
            href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
            className="font-bold text-[#1B3154] text-lg"
          >
            {CONTACT_PHONE}
          </a>
        </div>

        <Link
          to="/customize-your-trip"
          className="block bg-[#1B3154] text-white font-medium w-full py-3 px-4 text-center hover:text-[#c2ac57] transition-colors cursor-pointer text-lg"
          onClick={closeMobileMenu}
        >
          Customize Your Trip
        </Link>
      </div>
    </header>
  );
};

export default Navbar;