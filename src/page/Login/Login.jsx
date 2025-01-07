import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { saveUser } from "../../api/auth";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { loginWithGoogle, loginWithEmail } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    loginWithEmail(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        saveUser(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged in succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="md:flex items-center justify-between pt-14">
      <div className="w-full h-[100vh]">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/cJFZXNs/pexels-hatice-baran-14252564-1.jpg"
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="text-5xl font-semibold text-center">Please Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="email"
              className="input input-bordered rounded-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 7,
                maxLength: 20,
              })}
              placeholder="password"
              className="input input-bordered rounded-none"
            />
            <p
              className="absolute right-3 top-[52px]"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <AiFillEyeInvisible className="text-xl" />
              ) : (
                <AiFillEye className="text-xl" />
              )}
            </p>

            {errors.password?.type === "minLength" && (
              <span className="text-red-500 text-sm">
                Password must be at least 7 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500 text-sm">
                Password must be less than 20 characters
              </span>
            )}
            {errors.password?.type === "required" && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <input
              className="btn bg-base-300 rounded-none"
              type="submit"
              value="Login"
            />
            {/* Disable the button if passwords don't disabled={!passwordMatch} match */}
          </div>
          {error && <p className="text-red-700">{error}</p>}
          <Link to="/sing-up">
            <p className="text-sm text-blue-700 underline">
              are you new here? Signup
            </p>
          </Link>
          <div className="divider">OR</div>
        </form>

        <div className="text-center mb-5">
          <button
            onClick={handleGoogle}
            className="btn bg-base-300 rounded-none w-5/6"
          >
            Sign In with <FcGoogle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
