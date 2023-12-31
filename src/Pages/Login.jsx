import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [open, setOpen] = useState('!open')
  const [errer, setError] = useState('')

  const {signInUser, signInwithGoogle} = useContext(Authinfo);

  const navigate = useNavigate()
  const {user} = useContext(Authinfo)

  const handleLoginSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    setError('')
    if(user){
      toast.error('Already loged in', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return 
    }

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      navigate('/')
    })
    .catch(errer => {
      console.log(errer);
      setError("Invalid email/password")
    })

    
  }


  const googleProvider = new GoogleAuthProvider();
  const handleGooglesignUp = () => {

    if(user){
      toast.error('Already loged in', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return 
    }

    signInwithGoogle(googleProvider)
    .then(result => {
      console.log(result.user);
      navigate('/')
    })
    .catch(errer => {
      console.log(errer.message);
    })
  }

  const handleView = open => {
    setOpen(open)
  }
  return (
    <div className="bg-gradient-to-r from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
      <Navber></Navber>
      <div className="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl text-[#ffffffce] font-bold">
                Login now!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

              <form onSubmit={handleLoginSubmit} className="card-body">
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <input
                    type={open? 'password': 'text'}
                    placeholder="password"
                    name="password"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                  <div onClick={()=>handleView(!open)} className="absolute right-2 text-[#ffffff9a] top-1/3">
                    {
                      open? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                    }
                  </div>
                  
                </div>

                <p className="text-red-600">{errer}</p>
                <div className="form-control mt-2">
                  <input
                    type="submit"
                    value="Login"
                    className="input rounded-md bg-gradient-to-r from-red-500 font-bold to-cyan-400 border-none"
                    required
                  />
                </div>
              <div className="flex items-center">
                <div className="border-t border-dotted border-cyan-400 border-b w-full"></div><span className="text-center text-white px-3">or</span> <div className="border-t border-b border-dotted border-cyan-400 w-full"></div>
              </div>
              </form>
                  <button onClick={handleGooglesignUp} className="btn bg-white -mt-6 rounded-md mx-8 font-bold border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    Continue With google
                  </button>
                  <div className="mx-8 text-center py-3 text-blue-500 font-bold"><span className="text-[#ffffffd2] font-medium">New here?</span><Link to="/register"> Register</Link></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default Login;
