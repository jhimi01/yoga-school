import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [show, setShow] = useState(false)
    const { register, formState: { errors }, handleSubmit, control, reset} = useForm()
    const { signupEmail, loginWithGoogle, updateUserProfile } = useContext(AuthContext)
   
    const onSubmit=(data)=>{
      console.log(data)
        reset()
    }
  
    return (
        <div className='md:flex items-center justify-between'>
            <div className='w-full h-[100vh]'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/h9mM4CV/pexels-hatice-baran-14252564.jpg" alt="" />
            </div>

            <div className='w-full mt-20'>
            <h1 className='text-5xl font-semibold text-center'>Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered rounded-none" />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered rounded-none" />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="form-control">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <input {...register("photo", { required: true })} type="url" placeholder="photo URL" className="input input-bordered rounded-none" />
  {errors.photo && <span className="text-red-500 text-sm">This field is required</span>}
</div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={show? "text" : "password"} {...register("password", { 
                required: true,
                minLength: 7,
                maxLength: 20,
                 })} placeholder="password" className="input input-bordered rounded-none" />
                 <p className='absolute right-3 top-[52px]' onClick={()=>{setShow(!show)}}>{show? <AiFillEyeInvisible className='text-xl'/> : <AiFillEye className='text-xl'/> }</p>

              {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 7 characters</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm">Password must be less than 20 characters</span>}
              {errors.password?.type === 'required' && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* confirm password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type={show? "text" : "password"} {...register("confirm-password", { 
                required: true,
                minLength: 7,
                maxLength: 20,
                 })} placeholder="condirm password" className="input input-bordered rounded-none" />
                 <p className='absolute right-3 top-[52px]' onClick={()=>{setShow(!show)}}>{show? <AiFillEyeInvisible className='text-xl'/> : <AiFillEye className='text-xl'/> }</p>
{/* 
             {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 7 characters</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm">Password must be less than 20 characters</span>}
              {errors.password?.type === 'required' && <span className="text-red-500 text-sm">This field is required</span>}  */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-base-300 rounded-none" type="submit" value='signup' />
              
            </div>
            <Link to='/login'><p className='text-sm text-blue-700 underline'>Already have an account?Login.</p></Link>
          <div className="divider">OR</div>
          </form>
          <div className='text-center mb-5'>
            <button className="btn bg-base-300 rounded-none w-5/6">Sign In with <FcGoogle className='text-2xl'/></button>
          </div>
          </div>
        </div>
    );
};

export default Register;