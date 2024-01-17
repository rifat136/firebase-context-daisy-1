import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const{signIn, googleSignIn}=useContext(AuthContext);

     const handleLogin= event=>{

        event.preventDefault();

        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })

     }

     const handleGoogleLogin=()=>{
      googleSignIn()
      .then(result=>{
        const loggedUser= result.user;
        console.log(loggedUser);
      })

      .catch(error=>{
        console.log(error.message);
      })
     }


    return (
        <div>
              <div className="hero min-h-screen bg-slate-100">
             <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-nowrap">
      <h2 className="text-5xl font-extrabold">Login now!</h2>  
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <Link to='/register'>
      <button className="btn btn-xs mb-5 ">New to pandabook? Register</button>
      </Link>

      <div>
      
      <button onClick={handleGoogleLogin} className="btn btn-outline btn-success ms-4 mb-2">Google</button>
      </div>

    </div>

  </div>
</div>
        </div>
    );
};

export default Login;