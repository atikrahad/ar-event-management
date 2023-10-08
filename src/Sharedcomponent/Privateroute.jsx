import { useContext } from "react";
import { Authinfo } from "./Authprovider";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authinfo);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh] bg-[#0d1b28]">
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-10 "></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-11"></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-12"></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-[60px]"></span>
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Privateroute;
