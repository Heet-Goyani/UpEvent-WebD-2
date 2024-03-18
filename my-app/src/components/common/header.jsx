import React, { useState } from 'react';

// styles
import '../../styles/common/header.css';

const Header = () => {
    const link = 'https://lh3.googleusercontent.com/a/ACg8ocJeNOks3NynMczVETRtQorWS8-SWU4XxublttudK3Y1VOI=s432-c-no';
    const [profile, setProfile] = useState(null);
    return (
        <div className='cont'>
            <div className='heading'>
                <p className='p1'>Up</p><p className='p2'>Event</p>
            </div>
            {
                profile ? (
                    <div>
                        <img src={profile} alt='profile' className='profile' />
                    </div>
                ) : (
                    <div className='btnBox'>
                        <button className='btn'
                            onClick={() => {
                                window.location.href = '/login';
                            }}>Login</button>
                        <button className='btn'
                            onClick={() => {
                                window.location.href = '/signup';
                            }}>Signup</button>
                    </div>
                )
            }
        </div>
    );
};

export default Header;
