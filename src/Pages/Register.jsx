import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const {createUser} = useContext(Authinfo)
  const [open, setOpen] = useState('!open')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleReigsterSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log(name, email, password);


    setError('')
    if(password.length < 6){
      return setError('Password should be at least 6 characters')
    }
    else if(!/[A-Z]/.test(password)){
      return setError('Password should be a Capital latter')
    }
    // eslint-disable-next-line no-useless-escape
    else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
      return setError('Password should be a special character')
    }

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Account created', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/')
      updateProfile(auth.currentUser, {
        displayName: `${name}`,
        
      })
      .then(()=>{

      })
      .catch(error => {
        console.log(error.message);
      })
    })
    .catch(errer => {
      const errorMessage = errer.code.split('/');
      const message = errorMessage.slice(1, errorMessage.length)
      setError(message.join())
    })

  }
  const handlePassView = open => {
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
                Register Now!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

              <form onSubmit={handleReigsterSubmit} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                </div>
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
                  <div onClick={()=>handlePassView(!open)} className="absolute right-2 text-[#ffffff9a] top-1/3">
                    {
                      open? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                    }
                  </div>
                  
                </div>
                
                <p className="text-red-500">{error}</p>
                <div className="form-control mt-2">
                  <input
                    type="submit"
                    value="Register"
                    className="input rounded-md bg-gradient-to-r from-red-500 font-bold to-cyan-400 border-none"
                    required
                  />
                </div>
              
              </form>
                  <div className="mx-8 text-center pb-3 -mt-5 text-blue-500 font-bold"><span className="text-[#ffffffd2] font-medium">Already have account?</span><Link to="/login"> Login</Link></div>
            </div>
          </div>
        </div>


            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
      
    );
};

export default Register;