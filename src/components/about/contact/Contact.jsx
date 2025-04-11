import { Avatar, Button, Form, Input, Typography } from 'antd';
import 'react-phone-input-2/lib/style.css'; // Bayroqlar va telefon kodlarini stili
import PhoneInput from 'react-phone-input-2';
import Card from 'antd/es/card/Card';
import { DownOutlined, StarFilled, UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { FiPhone } from 'react-icons/fi';
const { Text } = Typography;

const reviews = [
    {
        name: "J J J Fedora",
        date: "January 15, 2025",
        avatar: "https://i.imgur.com/3GvwNBf.jpeg",
        rating: 5,
        message: "We just got back from a fabulous trip organized by French Side Travel!",
    },
    {
        name: "Anna Smith",
        date: "March 10, 2025",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        message: "Truly amazing experience. Everything was arranged perfectly.",
    },
    {
        name: "Michael Brown",
        date: "April 1, 2025",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        message: "Wonderful planning and unforgettable journey!",
    },
    {
        name: "Laura Lee",
        date: "April 8, 2025",
        avatar: "https://i.pravatar.cc/150?img=7",
        rating: 5,
        message: "Highly recommend French Side Travel. Great attention to detail.",
    }
];

function Contact() {
    const [selectedCountry, setSelectedCountry] = useState('UZ');
    const [phoneFormat, setPhoneFormat] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hovered, setHovered] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleExpand = (index) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const phoneFormats = {
        UZ: '+998 93 123 45 67',  // Uzbekistan format
        US: '+1 (555) 123-4567',  // United States format
        IN: '+91 123 456 7890',  // India format
        // Qo‘shimcha davlat formatlari qo‘shish mumkin
    };
    useEffect(() => {
        // Formatni o‘zgartirish
        setPhoneFormat(phoneFormats[selectedCountry]);
    }, [selectedCountry]);

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
      
    };
    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setPhoneNumber('');  
    };
    const handleSubmit = (values) => {
        console.log('Form qiymatlari:', { ...values, number: phoneNumber });

    };

    return (
        <main>
            <section
                style={{
                    backgroundImage: 'url("/champagne-glasses-cheers-paris-eiffel-tower-romantic-shutterstock-paid.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative h-[680px] flex flex-col items-center justify-start  text-center">
                <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
                <div className='flex flex-col items-center justify-start min-h-screen mt-[235px]'>
                    <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'>Contact</h1>
                </div>
            </section>
            <section className='bg-white w-full'>
                <div className='max-w-[720px] mx-auto'>
                    <h3 className='justify-start flex font-[700] text-lg text-[#1b3154] pt-5'>Need some help getting started? Have a question about France?</h3>
                    <div className='flex justify-between gap-[50px] space-y-10'>
                        <div className='text-[#1b3154] w-[45%] space-y-5 mt-8'>
                            <p className='font-[700]'>We would love to hear from you. </p>
                            <div className='flex justify-start gap-2'>

                                <p className='font-[700]'>Contact us:</p>
                                <p className='flex justify-start gap-1'>
                                    {/* <FiPhone className='text-[#1b3154] text-lg' /> */}
                                    <img src="/phone-call.png" alt="" className='w-5 h-5' />
                                    <a href="" className='underline opacity-80 text-[#1b3154]'>+1 646 809 1975</a>
                                </p>
                            </div>
                            <p className='opacity-80 text-[#1b3154]'>We are available Monday to Saturday from 9:30am to 6:30pm Paris time (Central European Time/Central European Summer Time)</p>
                            <div style={{ textDecoration: 'none' }}>
                                <Card
                                    style={{
                                        width: 300,
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                        overflow: 'hidden',
                                        padding: 0
                                    }}
                                >
                                    {/* Header */}
                                    <div style={{ paddingTop: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                                        <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 0 }}>
                                            <span style={{ color: '#4285F4' }}>G</span>
                                            <span style={{ color: '#EA4335' }}>o</span>
                                            <span style={{ color: '#FBBC05' }}>o</span>
                                            <span style={{ color: '#4285F4' }}>g</span>
                                            <span style={{ color: '#34A853' }}>l</span>
                                            <span style={{ color: '#EA4335' }}>e</span>
                                        </Text>
                                        <div style={{ margin: '10px 0' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <StarFilled key={i} style={{ color: '#fadb14', fontSize: '18px', margin: '0 2px' }} />
                                            ))}
                                        </div>
                                    </div>
                                    {/* Reviewlar soni va toggle */}
                                    <div
                                        onClick={() => setShowReviews(!showReviews)}
                                        style={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 6,
                                            fontWeight: 600,
                                            marginTop: 4
                                        }}
                                    >

                                        <Text style={{ fontSize: '12px' }}>{reviews.length} reviews</Text>
                                        {showReviews ? <UpOutlined/> : <DownOutlined />}
                                    </div>
                                    {/* Reviews - smooth scroll */}
                                    <div
                                        style={{
                                            maxHeight: showReviews ? 300 : 0,
                                            overflowY: 'auto',
                                            transition: 'max-height 0.5s ease-in-out',
                                            borderTop: showReviews ? '1px solid #f0f0f0' : 'none',
                                            padding: showReviews ? '10px 16px' : '0 16px',
                                            textAlign: 'left',
                                            position: 'relative'
                                        }}
                                    >
                                        {showReviews && (
                                            <div
                                                style={{
                                                    position: 'sticky',
                                                    top: 10,
                                                    right: 10,
                                                    cursor: 'pointer', // Change cursor to pointer on hover
                                                    fontSize: 18,
                                                    color: 'black',
                                                    fontWeight: 700, // Make 'X' bold
                                                    zIndex: 1,
                                                    userSelect: 'none', // Prevent text selection
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 24, // Initial width of 'X'
                                                    height: 24, // Initial height of 'X'
                                                    borderRadius: '50%', // Initial circular shape
                                                    transition: 'all 0.3s ease', 
                                                    backgroundColor:'white',
                                                    left:'auto'
                                                }}
                                                onClick={() => setShowReviews(false)} // Function to hide reviews
                                                onMouseEnter={(e)=>{
                                                    e.target.style.transform='scale(1.2)';
                                                }}
                                                onMouseLeave={(e)=>{
                                                    e.target.style.transform='scale(1)';
                                                }}
                                            >
                                                X
                                            </div>
                                        )}
                                        <div style={{ 
                                            paddingTop: showReviews ? '50px' : '0'
                                            
                                            }}
                                            >

                                            {reviews?.map((review, index) => {
                                                const isExpanded = expandedIndexes.includes(index);
                                                return (
                                                    <div key={index} style={{ marginBottom: 16 }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                                <Avatar src={review.avatar} size={32} />
                                                                <div>
                                                                    <Text strong>{review.name}</Text><br />
                                                                    <Text type="secondary" style={{ fontSize: 12 }}>{review.date}</Text>
                                                                </div>
                                                            </div>
                                                            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" width="18" />
                                                        </div>
                                                        <div style={{ marginTop: 6 }}>
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <StarFilled key={i} style={{ color: '#fadb14', fontSize: '16px', margin: '0 1px' }} />
                                                            ))}
                                                        </div>
                                                        <div style={{ marginTop: 6 }}>
                                                            <Text style={{
                                                                display: 'block',
                                                                whiteSpace: isExpanded ? 'normal' : 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            }}
                                                            >

                                                                {review.message}
                                                            </Text>
                                                            <Text
                                                                onClick={() => toggleExpand(index)}
                                                                style={{ color: '#1890ff', cursor: 'pointer', fontSize: 12 }}
                                                            >
                                                                {isExpanded ? 'Hide' : 'Read more'}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className='w-[55%] space-y-5 mt-8'>
                            <p className='opacity-80 text-[#1b3154]'>Fill out this form to email us your questions or travel requests. We will get right back to you.</p>
                            <div className='max-w-[720px] mx-auto'>
                                <Form layout='vertical' onFinish={handleSubmit}>
                                    <div className='mb-20'>
                                        <fieldset style={{ border: '1px solid #d9d9d9', padding: '20px 20px 0 20px', borderRadius: 8 }}>
                                            <div style={{ padding: '0', fontWeight: 500 }}>Name</div>
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                <Form.Item
                                                    style={{ flex: 1 }}
                                                    name="firstName"
                                                    rules={[{ required: true, message: 'Please enter your first name' }]}
                                                >
                                                    <Input placeholder="First name" />
                                                    <div style={{ marginTop: 4, fontSize: 12 }} className='text-gray-500 opacity-100'>First</div>
                                                </Form.Item>
                                                <Form.Item
                                                    style={{ flex: 1 }}
                                                    name="lastName"
                                                    rules={[{ required: true, message: 'Please enter your last name' }]}
                                                >
                                                    <Input placeholder="Last name" />
                                                    <div style={{ marginTop: 4, fontSize: 12 }} className='text-gray-500 opacity-100'>Last</div>
                                                </Form.Item>
                                            </div>
                                            <div style={{ padding: '0', fontWeight: 500 }}>Email</div>
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                <Form.Item
                                                    style={{ flex: 1 }}
                                                    name="email"
                                                    rules={[
                                                        { required: true, message: 'Please enter your email' },
                                                        { type: 'email', message: 'Enter a valid email address' }
                                                    ]}
                                                >
                                                    <Input placeholder="Email" />
                                                </Form.Item>
                                            </div>
                                            <div style={{ padding: '0', fontWeight: 500 }}>Phone</div>
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                <Form.Item
                                                    style={{ flex: 1 }}
                                                    name="number"
                                                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                        <PhoneInput
                                                            country={selectedCountry.toLowerCase()}
                                                            value={phoneNumber}
                                                            onChange={handlePhoneChange}
                                                            containerStyle={{ width: '100%' }}
                                                            inputStyle={{ width: '100%' }}
                                                            placeholder={phoneFormat}
                                                            onCountryChange={handleCountryChange}
                                                            disableDropdown={false}
                                                            disableCountryCode={false}
                                                            inputClass='input-animation'
                                                        />
                                                    </div>
                                                </Form.Item>
                                            </div>
                                            <div style={{ padding: '0', fontWeight: 500 }}>Your message</div>
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                <Form.Item
                                                    style={{ flex: 1 }}
                                                    name="text"
                                                    rules={[{ required: true, message: 'Please enter your message' }]}
                                                >
                                                    <TextArea style={{ height: '300px', resize: 'none', textAlign: 'left', paddingTop: '5px' }} />
                                                </Form.Item>
                                            </div>
                                            <div style={{ display: 'flex', gap: 12, }}>
                                                <Form.Item>
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        style={{
                                                            width: '100%',
                                                            fontSize: '20px',
                                                            height: "45px",
                                                            borderRadius: '50px',
                                                            backgroundColor: hovered ? '#c2ac57' : '#1b3150', // sariq yoki ko‘k fon
                                                            color: '#fff',
                                                            border: '3px solid blue',
                                                            padding: '10px 25px',
                                                            transition: 'all 0.3s ease',
                                                        }}
                                                        onMouseEnter={() => setHovered(true)}
                                                        onMouseLeave={() => setHovered(false)}
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div></div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default Contact