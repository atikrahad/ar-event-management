import { createContext, useEffect, useState } from "react";

export const Authinfo = createContext()
const Authprovider = ({children}) => {
    const [data, setData] = useState([]);
    const [client, setClient] = useState([]);

    useEffect(()=>{
        fetch('Event.json')
        .then(res => res.json())
        .then(datas => setData(datas))
    },[])
    useEffect(()=>{
        fetch('clientRevew.json')
        .then(res => res.json())
        .then(datas => setClient(datas))
    },[])
    const Info = {
        data,
        client
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