import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Link from 'antd/es/typography/Link';

const { Header } = Layout;
const menuStyle = {
    backgroundColor: '#132c52', // blue
    color: 'white',
    borderRadius: '4px',
  };

const menuDestinations = (
    <Menu>
        <Menu.Item><a href="/dest/paris">Paris</a></Menu.Item>
        <Menu.Item><a href="/dest/nice">Nice</a></Menu.Item>
        <Menu.Item><a href="/dest/provence">Provence</a></Menu.Item>
    </Menu>
);

const menuTravelTypes = (
    <Menu >
        <Menu.Item><Link href="/travel/family">Family Trips</Link></Menu.Item>
        <Menu.Item><a href="/travel/group">Group Travel</a></Menu.Item>
        <Menu.Item><a href="/travel/luxury">Luxury Travel</a></Menu.Item>
    </Menu>
);

const menuAboutUs = (
    <Menu >
        <Menu.Item><a href="/about/team">About Us</a></Menu.Item>
        <Menu.Item><a href="/about/mission">Client Testimonials</a></Menu.Item>
        <Menu.Item><Link to="/contact">Contact</Link></Menu.Item>
    </Menu>
);

const Navbar = () => {
    const [textColor, setTextColor] = useState('#fff');
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
            {/* Logo */}
            <div>
                <img src="/frenchside-logo.svg" alt="Logo" style={{ height: 40 }} />
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', color: '#0b2941', fontSize: '16px'}}>
                <Dropdown overlay={menuDestinations} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()} className="hover:underline">
                        Destinations <DownOutlined />
                    </a>
                </Dropdown>

                <Dropdown overlay={menuTravelTypes} trigger={['hover']}>
                    <Link to='/travel-ideas' className="hover:underline">
                        Travel Types <DownOutlined />
                    </Link>
                </Dropdown>

                <Dropdown overlay={menuAboutUs} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()} className="hover:underline">
                        About Us <DownOutlined />
                    </a>
                </Dropdown>

                <a href="/inspiration" className="hover:underline">Travel Inspiration</a>

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
        </Header>
    );
};

export default Navbar;
