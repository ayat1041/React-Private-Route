import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Home</h2>
            <h2>
            {
                user && <span style={{marginInline : "20px"}}>{user.displayName}</span>
            }
            </h2>
        </div>
    );
};

export default Home;