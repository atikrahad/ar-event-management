
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import Selectcard from "../Components/Selectcard";
import { getStored } from "../Utilitis/lcstored";
import { useContext, useEffect, useState } from "react";
import { Authinfo } from "../Sharedcomponent/Authprovider";


const Selectedevent = () => {
    const [selected, setSelected] = useState([])
    
    
    const {data} = useContext(Authinfo);
    console.log(data);
    useEffect(()=>{
        const getId = getStored()
        const newArr = []
        for(let item of getId){
            const finded = data.find(data => data.id === item)
            if(finded){
                newArr.unshift(finded)
            }
        }
        setSelected(newArr)
    },[data])

    return (
        <div className="bg-[#0d1b28]">
            <Navber></Navber>
            <div className="min-h-[50vh]">
                    {
                        selected.length === 0 && <div className="flex flex-col h-full justify-center items-center">
                        <h1 className="text-3xl text-[#ffffffc7] font-semibold my-20">You have not selected any event</h1>

                    </div>
                    }

                    <div className="max-w-6xl py-10 gap-5 mx-auto grid md:grid-cols-2 grid-cols-1">

                        {
                            selected.map(data => <Selectcard key={data.id} data={data}></Selectcard>)
                        }

                    </div>
            </div>
            <Footer></Footer> 
        </div>
    );
};

export default Selectedevent;