import { createContext, useEffect, useState } from "react";

export const Authinfo = createContext()
const Authprovider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('Event.json')
        .then(res => res.json())
        .then(datas => setData(datas))
    },[])
    const Info = {
        data
    }
    return (
        <Authinfo.Provider value={Info}>
            {
                children
            }
            
        </Authinfo.Provider>
    );
};

export default Authprovider;