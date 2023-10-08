import { useContext } from "react";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import Event from "../Components/Event";

const Services = () => {
    const {data} = useContext(Authinfo)
    return (
        <div className="bg-gradient-to-r from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
            <Navber></Navber>
                <h1 className="text-center text-2xl lg:text-5xl font-bold py-5 text-[#ffffffd7]">We do nine types of events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-5 gap-5 max-w-6xl mx-auto">
                {
                    data.map(data => <Event key={data.id} data={data}></Event>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;