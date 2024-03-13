import React, { useState } from 'react';

// styles
import '../styles/home/home.css';

// components
import Header from '../components/common/header';

const Home = () => {
    const [profile, setProfile] = useState(null);
    return (
        <div className='main'>
            <Header />
        </div>
    )
};

export default Home;