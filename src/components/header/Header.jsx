import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;


const menuStyle = {
    backgroundColor: '#132c52',
    borderRadius: '4px',
    padding: '10px 20px',
};

const menuItemStyle = {
    color: 'white',
    fontSize: '15px',
    padding: '8px 0',
    transition: 'background 0.2s',
};

const menuDestinations = (
    <Menu style={menuStyle}>{[
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
            className='travel-link'
            style={menuItemStyle}
        >
            <Link to={path} style={{ color: 'inherit' }}>{label}</Link>
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
                className='travel-link'
                style={menuItemStyle}
            >

                <Link to={path} style={{ color: 'inherit' }}>{label}</Link>
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
            ['For Agencies & Operators', '/work-with-us/']
        ].map(([label, path]) => (
            <Menu.Item
                key={path}
                className='travel-link'
                style={menuItemStyle}
            >

                <Link to={path} style={{ color: 'inherit' }}>{label}</Link>
            </Menu.Item>
        ))}
    </Menu>
);

const Navbar = () => {
    const [textColor, setTextColor] = useState('#fff');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: '#fff',
                padding: '0 40px',
                height: '70px',
                display: 'flex',
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
                    gap: '30px'
                }}
            >

                {/* Logo */}
                <div className='px-5'>
                    <img src="/frenchside-logo.svg" alt="Logo" style={{ height: 40 }} />
                </div>
                {/* Hamburger Menu (Mobile only) */}
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* Navigation Links */}
                <div
                className={`nav-links ${isMobileMenuOpen? 'active':''}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        fontSize: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <Dropdown
                        overlay={menuDestinations}
                        trigger={['hover']}
                        onVisibleChange={(visible) => setOpenDropdown(visible ? 'destinations' : null)}
                    >
                        <div
                            style={{
                                padding: '8px 12px',
                                borderRadius: '6px',
                                backgroundColor: openDropdown === 'destinations' ? '#132c52' : 'transparent',
                                color: openDropdown === 'destinations' ? 'white' : '#0b2941',
                                transition: 'all 0.2s',
                            }}
                        >
                            <Link
                                to='/destinations'

                            >Destinations</Link>    <DownOutlined />
                        </div>
                    </Dropdown>

                    <Dropdown
                        overlay={menuTravelTypes}
                        trigger={['hover']}
                        onVisibleChange={(visible) => setOpenDropdown(visible ? 'travel-ideas' : null)}
                    >
                        <div
                            style={{
                                padding: '8px 12px',
                                borderRadius: '6px',
                                backgroundColor: openDropdown === 'travel-ideas' ? '#132c52' : 'transparent',
                                color: openDropdown === 'travel-ideas' ? 'white' : '#0b2941',
                                transition: 'all 0.2s',
                            }}
                        >
                            <Link
                                to='/travel-ideas'

                            >Travel Types</Link>    <DownOutlined />
                        </div>
                    </Dropdown>

                    <Dropdown
                        overlay={menuAboutUs}
                        trigger={['hover']}
                        onVisibleChange={(visible) => setOpenDropdown(visible ? 'about' : null)}
                    >
                        <div
                            style={{
                                padding: '8px 12px',
                                borderRadius: '6px',
                                backgroundColor: openDropdown === 'about' ? '#132c52' : 'transparent',
                                color: openDropdown === 'about' ? 'white' : '#0b2941',
                                transition: 'all 0.2s',
                            }}
                        >
                            <Link
                                to='/about'

                            >About Us</Link>    <DownOutlined />
                        </div>
                    </Dropdown>

                    <Link to="/blog/" className="hover:underline travel-inspiration-link">Travel Inspiration</Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <PhoneOutlined />
                        <span style={{ fontWeight: 600 }}>+1 646 809 1975</span>
                    </div>

                    <Button
                        type="primary"
                        onMouseEnter={() => setTextColor('#c2ac57')}
                        onMouseLeave={() => setTextColor('#fff')}
                        style={{
                            backgroundColor: '#132c52',
                            borderRadius: '20px',
                            fontWeight: 500,
                            color: textColor,
                        }}
                    >
                        Customize Your Trip
                    </Button>
                </div>
            </div>
        </Header>
    );
};

export default Navbar;
