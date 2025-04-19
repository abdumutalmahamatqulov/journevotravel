import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FiPhone } from 'react-icons/fi';

const { Header } = Layout;

const menuStyle = {
  backgroundColor: '#132c52',
  padding: '3px 20px',
  borderRadius: 0, // No border-radius as per previous request
  marginTop: 0, // Ensure no gap between link and dropdown
};

const menuItemStyle = {
    width: 230,
  color: 'white',
  fontSize: '15px',
  padding: '8px 0',
  transition: 'background 0.2s, color 0.2s', // Smooth transition for hover
};

const menuDestinations = (
  <Menu style={menuStyle}>
    {[
      ['Alsace', '/destinations/alsace/'],
      ['Basque Country', '/destinations/basque-country/'],
      ['Bordeaux', '/destinations/bordeaux-tours-trips/'],
      ['Burgundy', '/destinations/burgundy-tours-trips/'],
      ['Champagne', '/destinations/champagne-tours-trips/'],
      ['Corsica', '/destinations/corsica-tours-trips/'],
      ['French Alps', '/destinations/french-alps-ski-tours-trips/'],
      ['Loire Valley', '/destinations/loire-valley-tours/'],
    ].map(([label, path]) => (
      <Menu.Item
        key={path}
        className="travel-link"
        style={menuItemStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c2ac57')} // Yellow on hover
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')} // Back to white
      >
        <Link to={path} style={{ color: 'inherit' }}>
          {label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

const menuTravelTypes = (
  <Menu style={menuStyle}>
    {[
      ['Family-Friendly Travel', '/travel/family'],
      ['Group Travel', '/travel/group'],
      ['History & Culture', '/travel/history'],
      ['Honeymoons & Romance', '/travel/romance'],
      ['Self-Drive Trips & Tours', '/travel/self-drive'],
      ['Skiing & Adventure', '/travel/adventure'],
      ['Wellness & Relaxation', '/travel/wellness'],
      ['Wine & Food', '/travel/food'],
    ].map(([label, path]) => (
      <Menu.Item
        key={path}
        className="travel-link"
        style={menuItemStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c2ac57')} // Yellow on hover
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')} // Back to white
      >
        <Link to={path} style={{ color: 'inherit' }}>
          {label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

const menuAboutUs = (
  <Menu style={menuStyle}>
    {[
      ['About Us', '/about'],
      ['Client Testimonials', '/client-testimonials-1/'],
      ['Our Travel Designers', '/travel-designers/'],
      ['FAQ', '/faq/'],
      ['Contact', '/contact/'],
      ['For Agencies & Operators', '/work-with-us/'],
    ].map(([label, path]) => (
      <Menu.Item
        key={path}
        className="travel-link"
        style={menuItemStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c2ac57')} // Yellow on hover
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')} // Back to white
      >
        <Link to={path} style={{ color: 'inherit' }}>
          {label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

const Navbar = () => {
  const [textColor, setTextColor] = useState('#fff');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered parent item
  const [isDropdownVisible, setDropdownVisible] = useState(null); // Track dropdown visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          gap: '30px',
        }}
      >
        {/* Logo */}
        <div className="px-5">
          <Link to="/">
            <img src="/frenchside-logo.svg" alt="Logo" style={{ height: 40 }} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '35px',
            fontSize: '16px',
            flexWrap: 'wrap',
          }}
          className="nav-links"
        >
          <Dropdown
            overlay={menuDestinations}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'destinations' : null)}
            onMouseEnter={() => setHoveredItem('destinations')}
            onMouseLeave={() => setHoveredItem(null)}
            overlayStyle={{ marginTop: 0 }} // Ensure no gap
            className="nav-item text-[#1B3154]"
          >
            <div
              style={{
                padding: '5px', // Consistent padding
                lineHeight: '1.2',
                backgroundColor: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? '#132c52' : 'transparent',
                color: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? 'white' : '#1B3154',
                transition: 'all 0.2s',
              }}
            >
              <Link to="/destinations" style={{ color: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? 'white' : '#1B3154' }}>
                Destinations
              </Link>{' '}
              <DownOutlined  />
            </div>
          </Dropdown>

          <Dropdown
            overlay={menuTravelTypes}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'travel-ideas' : null)}
            onMouseEnter={() => setHoveredItem('travel-ideas')}
            onMouseLeave={() => setHoveredItem(null)}
            overlayStyle={{ marginTop: 0 }} // Ensure no gap
            className="nav-item"
          >
            <div
              style={{
                padding: '5px', // Consistent padding
                lineHeight: '1.2',
                backgroundColor: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? '#132c52' : 'transparent',
                color: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? 'white' : '#1B3154',
                transition: 'all 0.2s',
              }}
            >
              <Link to="/travel-ideas" style={{ color: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? 'white' : '#1B3154' }}>
                Travel Types
              </Link>{' '}
              <DownOutlined />
            </div>
          </Dropdown>

          <Dropdown
            overlay={menuAboutUs}
            trigger={['hover']}
            onVisibleChange={(visible) => setDropdownVisible(visible ? 'about' : null)}
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
            overlayStyle={{ marginTop: 0 }} // Ensure no gap
            className="nav-item"
          >
            <div
              style={{
                padding: '5px', // Consistent padding
                lineHeight: '1.2',
                backgroundColor: hoveredItem === 'about' || isDropdownVisible === 'about' ? '#132c52' : 'transparent',
                color: hoveredItem === 'about' || isDropdownVisible === 'about' ? 'white' : '#1B3154',
                transition: 'all 0.2s',
              }}
            >
              <Link to="/about" style={{ color: hoveredItem === 'about' || isDropdownVisible === 'about' ? 'white' : '#1B3154' }}>
                About Us
              </Link>{' '}
              <DownOutlined />
            </div>
          </Dropdown>

          <Link
            to="/blog/"
            className="hover:underline travel-inspiration-link nav-item"
            style={{ color: '#1B3154', lineHeight: '1.2', padding: '5px' }} // Consistent padding
          >
            Travel Inspiration
          </Link>

          <div className="nav-item" style={{ lineHeight: '1.2', padding: '5px' }}>
            <PhoneOutlined />
            <span style={{ fontWeight: 700, color: '#1B3154' }}>+1 646 809 1975</span>
          </div>

          <Button
            type="primary"
            onMouseEnter={() => setTextColor('#c2ac57')}
            onMouseLeave={() => setTextColor('#fff')}
            style={{
              backgroundColor: '#132c52',
              fontWeight: 500,
              color: textColor,
              lineHeight: '1.2',
              padding: '5px 15px', // Consistent padding (adjusted for button)
            }}
            className="trav-link"
          >
            Customize Your Trip
          </Button>
        </div>
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseOutlined style={{ fontSize: 24, color: '#132c52' }} />
          ) : (
            <MenuOutlined style={{ fontSize: 24, color: '#132c52' }} />
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          style={{
            background: '#fff',
            width: '100%',
            maxHeight: isMobileMenuOpen ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              gap: '30px',
              fontSize: '16px',
              flexWrap: 'wrap',
            }}
            className="nav-links"
          >
            <Dropdown
              overlay={menuDestinations}
              trigger={['hover']}
              onVisibleChange={(visible) => setDropdownVisible(visible ? 'destinations' : null)}
              onMouseEnter={() => setHoveredItem('destinations')}
              onMouseLeave={() => setHoveredItem(null)}
              overlayStyle={{ marginTop: 0 }} // Ensure no gap
            >
              <div
                style={{
                  padding: '5px', // Consistent padding
                  lineHeight: '1.2',
                  backgroundColor: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? '#132c52' : 'transparent',
                  color: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? 'white' : '#1B3154',
                  transition: 'all 0.2s',
                }}
              >
                <Link to="/destinations" style={{ color: hoveredItem === 'destinations' || isDropdownVisible === 'destinations' ? 'white' : '#1B3154' }}>
                  Destinations
                </Link>{' '}
                <DownOutlined />
              </div>
            </Dropdown>

            <Dropdown
              overlay={menuTravelTypes}
              trigger={['hover']}
              onVisibleChange={(visible) => setDropdownVisible(visible ? 'travel-ideas' : null)}
              onMouseEnter={() => setHoveredItem('travel-ideas')}
              onMouseLeave={() => setHoveredItem(null)}
              overlayStyle={{ marginTop: 0 }} // Ensure no gap
            >
              <div
                style={{
                  padding: '5px', // Consistent padding
                  lineHeight: '1.2',
                  backgroundColor: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? '#132c52' : 'transparent',
                  color: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? 'white' : '#1B3154',
                  transition: 'all 0.2s',
                }}
              >
                <Link to="/travel-ideas" style={{ color: hoveredItem === 'travel-ideas' || isDropdownVisible === 'travel-ideas' ? 'white' : '#1B3154' }}>
                  Travel Types
                </Link>{' '}
                <DownOutlined />
              </div>
            </Dropdown>

            <Dropdown
              overlay={menuAboutUs}
              trigger={['hover']}
              onVisibleChange={(visible) => setDropdownVisible(visible ? 'about' : null)}
              onMouseEnter={() => setHoveredItem('about')}
              onMouseLeave={() => setHoveredItem(null)}
              overlayStyle={{ marginTop: 0 }} // Ensure no gap
            >
              <div
                style={{
                  padding: '5px', // Consistent padding
                  lineHeight: '1.2',
                  backgroundColor: hoveredItem === 'about' || isDropdownVisible === 'about' ? '#132c52' : 'transparent',
                  color: hoveredItem === 'about' || isDropdownVisible === 'about' ? 'white' : '#1B3154',
                  transition: 'all 0.2s',
                }}
              >
                <Link to="/about" style={{ color: hoveredItem === 'about' || isDropdownVisible === 'about' ? 'white' : '#1B3154' }}>
                  About Us
                </Link>{' '}
                <DownOutlined />
              </div>
            </Dropdown>

            <Link
              to="/blog/"
              className="hover:underline travel-inspiration-link nav-item"
              style={{ color: '#1B3154', lineHeight: '1.2', padding: '5px' }} // Consistent padding
            >
              Travel Inspiration
            </Link>

            <div style={{ lineHeight: '1.2', padding: '5px' }}>
              <FiPhone />
              <span style={{ fontWeight: 600, color: '#1B3154' }}>+1 646 809 1975</span>
            </div>
            <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
              <Button
                type="primary"
                onMouseEnter={() => setTextColor('#c2ac57')}
                onMouseLeave={() => setTextColor('#fff')}
                style={{
                  backgroundColor: '#132c52',
                  fontWeight: 500,
                  color: textColor,
                  padding: '5px 15px', // Consistent padding (adjusted for button)
                  lineHeight: '1.2',
                }}
              >
                Customize Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </Header>
  );
};

export default Navbar;