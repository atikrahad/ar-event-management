import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="bg-[#0d1b28] h-screen flex items-center justify-center">
            <div className="space-y-3 flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl">404</h1>
                <p className="text-xl text-white">The page you are looking for dose not exist.</p>
                <p className="text-white">Don't worry go back home and try again.</p>
                <div>
                <Link to="/" className="py-2 px-3 rounded bg-gradient-to-r from-red-500 to-cyan-400">Go home</Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;