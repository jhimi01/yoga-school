import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [show, setShow] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false); // Updated initial state to false
  const [errortext, setErrortectext] = useState('');
  const { register, formState: { errors }, handleSubmit, control, reset, watch } = useForm();

  const password = watch('password');

  const { signupEmail, loginWithGoogle, updateUserProfile } = useContext(AuthContext);

  // useEffect(() => {
  //   setPasswordMatch(password === watch('confirm-password'));
  // }, [password, watch]);
  
  const onSubmit = (data) => {
    if (data.password === data["confirm-password"]) {
      // Passwords match, proceed with registration
      console.log(data);
      setErrortectext('');
      setPasswordMatch(false);
      // Call your registration or signup function here
      reset()
    } else {
      // Passwords do not match
      setErrortectext('Passwords do not match');
      setPasswordMatch(true);
      reset()
    }

  };

  const handleGoogle=()=>{
    loginWithGoogle()
    .then(result => {
      const userloogem = result.user
      console.log(userloogem)
    })
    .catch(errors=>{
      console.log(errors)
    })
  }


  return (
    <div className='md:flex items-start justify-center'>
      <div className='w-full h-[100vh] mt-20'>
        <img className='w-full h-full object-cover' src="https://i.ibb.co/tCnwMJp/pexels-valeria-ushakova-3094215.jpg" alt="" />
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

          {/* confirm password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
  type={show ? 'text' : 'password'}
  {...register('confirm-password', {
    required: true,
    minLength: 7,
    maxLength: 20,
    validate: (value) => value === password, // Add validation function
  })}
  placeholder="confirm password"
  className="input input-bordered rounded-none"
/>

            <p className='absolute right-3 top-[52px]' onClick={() => { setShow(!show) }}>{show ? <AiFillEyeInvisible className='text-xl' /> : <AiFillEye className='text-xl' />}</p>

            {errors['confirm-password']?.type === 'required' && (
  <span className="text-red-500 text-sm">This field is required</span>
)}
{errors['confirm-password']?.type === 'minLength' && (
  <span className="text-red-500 text-sm">Password must be at least 7 characters</span>
)}
{errors['confirm-password']?.type === 'maxLength' && (
  <span className="text-red-500 text-sm">Password must be less than 20 characters</span>
)}
{errors['confirm-password']?.type === 'validate' && (
  <span className="text-red-500 text-sm">Passwords do not match</span>
)}


{/* now make if the button will be disable initially after confirm password is correct make the button the button able to click  */}



            {/* {!passwordMatch && <span className="text-red-500 text-sm">{errortext}</span>} */}
            {/* {!passwordMatch ? <span className="text-red-500 text-sm">Passwords do not match</span> : ''} */}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          {/* submit button */}
          <div className="form-control mt-6">
            <input className="btn bg-base-300 rounded-none" type="submit" value='signup'  disabled={passwordMatch} /> {/* Disable the button if passwords don't disabled={!passwordMatch} match */}
          </div>
          <Link to='/login'><p className='text-sm text-blue-700 underline'>Already have an account? Login.</p></Link>
          <div className="divider">OR</div>
        </form>


        <div className='text-center mb-5'>
          <button onClick={handleGoogle} className="btn bg-base-300 rounded-none w-5/6">Sign In with <FcGoogle className='text-2xl' /></button>
        </div>
      </div>
    </div>
  );
};

export default Register;
