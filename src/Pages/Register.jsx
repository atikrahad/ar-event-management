import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";


const Register = () => {
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
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="name"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="password"
                    className="input rounded-md text-[#ffffffda]  bg-transparent border-b-2 border-cyan-600"
                    required
                  />
                  
                </div>
                <div className="form-control">
                  <input
                    type="file"
                    placeholder="email"
                    className="rounded-md text-[#ffffffb6]"
                    required
                  />
                </div>
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
        </div>
    );
};

export default Register;