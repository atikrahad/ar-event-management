import { useContext } from "react";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { Authinfo } from "../Sharedcomponent/Authprovider";

const Profile = () => {
  const { user } = useContext(Authinfo);
  console.log(user);

  return (
    <div className="bg-[#0d1b28]">
      <Navber></Navber>
      <div className="max-w-6xl my-5 mx-auto">
        <h1 className="text-3xl text-white py-5">My Profile</h1>

        <div className="overflow-x-auto">
          <table className="table">
            
            
            <tbody className="py-10">
              
              <tr className="border-none">
                
                <td className="text-white text-2xl font-semibold">Name:</td>
                <td className="text-white">{user.displayName}</td>
                
              </tr>
              
              <tr className="border-none">
                
              <td className="text-white text-2xl font-semibold">Email address:</td>
                <td className="text-white">{user.email}</td>
                
              </tr>
              
              <tr>
                
              <td className="text-white text-2xl font-semibold">Country:</td>
              <td className="text-white">Bangladesh</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
