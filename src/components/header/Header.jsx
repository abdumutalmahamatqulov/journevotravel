import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, PhoneOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Header } = Layout;

const menuStyle = {
  backgroundColor: '#132c52',
  padding: '3px 20px',
  borderRadius: 0,
  marginTop: 0,
};

const menuItemStyle = {
  width: 230,
  color: 'white',
  fontSize: '15px',
  padding: '8px 0',
  transition: 'background 0.2s, color 0.2s',
};

const generateMenu = (items) => (
  <Menu style={menuStyle}>
    {items.map(([label, path]) => (
      <Menu.Item
        key={path}
        style={menuItemStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c2ac57')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
      >
        <Link to={path} style={{ color: 'inherit' }}>{label}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

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

const Navbar = () => {
  const [textColor, setTextColor] = useState('#fff');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const renderNavItem = (label, path, key) => (
    <div
      style={{
        padding: '5px',
        lineHeight: '1.2',
        backgroundColor: hoveredItem === key || isDropdownVisible === key ? '#132c52' : 'transparent',
        color: hoveredItem === key || isDropdownVisible === key ? 'white' : '#1B3154',
        transition: 'all 0.2s',
      }}
      onMouseEnter={() => setHoveredItem(key)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Link to={path} style={{ color: hoveredItem === key || isDropdownVisible === key ? 'white' : '#1B3154' }}>
        {label}
      </Link>{' '}
      <DownOutlined />
    </div>
  );

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: '#fff',
        padding: '0 30px',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <img src="/frenchside-logo.svg" alt="Logo" style={{ height: 40 }} />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <Dropdown
            overlay={generateMenu(destinations)}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'destinations' : null)}
          >
            {renderNavItem('Destinations', '/destinations', 'destinations')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(travelTypes)}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'travel-types' : null)}
          >
            {renderNavItem('Travel Types', '/travel-ideas', 'travel-types')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(aboutUs)}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'about' : null)}
          >
            {renderNavItem('About Us', '/about', 'about')}
          </Dropdown>

          <Link to="/blog/" style={{ color: '#1B3154', padding: '5px' }}>Travel Inspiration</Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src="public/call-button-art.svg" alt="" />
            <span style={{ fontWeight: 700, color: '#1B3154' }}>+1 646 809 1975</span>
          </div>

          <Button
            type="primary"
            onMouseEnter={() => setTextColor('#c2ac57')}
            onMouseLeave={() => setTextColor('#fff')}
            style={{
              backgroundColor: '#132c52',
              color: textColor,
              fontWeight: 500,
              padding: '5px 15px',
            }}
          >
            Customize Your Trip
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseOutlined style={{ fontSize: 24, color: '#132c52' }} />
          ) : (
            <MenuOutlined style={{ fontSize: 24, color: '#132c52' }} />
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div
          style={{
            background: '#fff',
            width: '100%',
            transition: 'max-height 0.3s ease-in-out',
            padding: '20px',
          }}
        >
          <Dropdown
            overlay={generateMenu(destinations)}
            trigger={['click']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'destinations' : null)}
          >
            {renderNavItem('Destinations', '/destinations', 'destinations')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(travelTypes)}
            trigger={['click']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'travel-types' : null)}
          >
            {renderNavItem('Travel Types', '/travel-ideas', 'travel-types')}
          </Dropdown>

          <Dropdown
            overlay={generateMenu(aboutUs)}
            trigger={['click']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'about' : null)}
          >
            {renderNavItem('About Us', '/about', 'about')}
          </Dropdown>

          <Link to="/blog/" style={{ display: 'block', color: '#1B3154', margin: '10px 0' }}>Travel Inspiration</Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="public/call-button-art.svg" alt="" />
            <span style={{ fontWeight: 700, color: '#1B3154' }}>+1 646 809 1975</span>
          </div>

          <Button
            type="primary"
            block
            style={{
              backgroundColor: '#132c52',
              color: '#fff',
              fontWeight: 500,
              borderRadius: 10
            }}
          className='rounded-2xl'>
            Customize Your Trip
          </Button>
        </div>
      )}
    </Header>
  );
};

export default Navbar;