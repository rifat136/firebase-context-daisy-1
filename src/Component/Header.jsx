import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    
    const{user,logOut}= useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=> console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content w-screen">
             
             <button className="btn btn-ghost text-xl">pandabook</button>
             <div className='ms-44'>
                  <Link  className="btn btn-ghost text-xl" to="/" >Home</Link>
                  
                  {/* //conditional user na thakle dekhabe na */}
                  {user && <Link  className="btn btn-ghost text-xl" to="/profile" >Profile</Link>}

                  <Link  className="btn btn-ghost text-xl" to="/order" >Order</Link>
                  <Link  className="btn btn-ghost text-xl" to="/login">Login</Link>
                  <Link  className="btn btn-ghost text-xl" to="/register">Register</Link>
             </div>

             <div className='ms-10'>
             {
               
                  user? <> <span>{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-xs bg-pink-700">Sign out</button>
                </>: 
                <Link to="/login">Sign In</Link>
             }
             </div>
            </div>
        </div>
    );
};

export default Header;