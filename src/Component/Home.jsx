import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
 
const user= useContext(AuthContext)

    return (
        <div>
            <h2>hey man</h2>
        </div>
    );
};

export default Home;