import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const Authinfo = createContext()
const Authprovider = ({children}) => {
    const [data, setData] = useState([]);
    const [client, setClient] = useState([]);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [bookedevent, setBookedevent] = useState([])

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

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInwithGoogle = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (curentUser)=>{
            setUser(curentUser);
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    },[])

    const logOut = ()=> {
        setLoading(true)
        return signOut(auth)
    }

    console.log(user);
    const Info = {
        data,
        client,
        createUser,
        signInUser,
        signInwithGoogle,
        user,
        logOut,
        loading,
        setBookedevent,
        bookedevent
    }
    return (
        <Authinfo.Provider value={Info}>
            {
                children
            }
            
        </Authinfo.Provider>
    );
};
Authprovider.propTypes = {
    children: PropTypes.node
}
export default Authprovider;