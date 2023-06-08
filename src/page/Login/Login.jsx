import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { saveUSer } from '../../api/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = useState(false);
    const { loginWithGoogle} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, control, reset, watch } = useForm();
    const onSubmit = (data) => {
        if (data.password == data.confirm-password) {
          console.log('sdfds')
          setPasswordMatch(true)
        }
        console.log(data);
        reset();
      };

      
  const handleGoogle=()=>{
    loginWithGoogle()
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)
      saveUSer(loggedUser)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'logged in successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(errors=>{
      console.log(errors)
    })
  }

    
    return (
        <div className='md:flex items-center justify-between mt-20'>
        <div className='w-full h-[100vh]'>
        <img className='w-full h-full object-cover' src="https://i.ibb.co/SR4R2td/pexels-ju-soar-s-16849536.jpg" alt="" />
      </div>
      <div className='w-full'>
      <h1 className='text-5xl font-semibold text-center'>Please Login</h1>
             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered rounded-none" />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
       

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={show ? "text" : "password"} {...register("password", {
              required: true,
              minLength: 7,
              maxLength: 20,
            })} placeholder="password" className="input input-bordered rounded-none" />
            <p className='absolute right-3 top-[52px]' onClick={() => { setShow(!show) }}>{show ? <AiFillEyeInvisible className='text-xl' /> : <AiFillEye className='text-xl' />}</p>

            {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 7 characters</span>}
            {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm">Password must be less than 20 characters</span>}
            {errors.password?.type === 'required' && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <Link to='/sing-up'><p className='text-sm text-blue-700 underline'>are you new here? Signup</p></Link>
          <div className="divider">OR</div>
        </form>

        <div className='text-center mb-5'>
          <button onClick={handleGoogle} className="btn bg-base-300 rounded-none w-5/6">Sign In with <FcGoogle className='text-2xl' /></button>
        </div>
      </div>

        </div>
    );
};

export default Login;