import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord, FaChess, FaVideo, FaWalking } from "react-icons/fa";

export default function Interest(){
    return(
        <>
        <div className="w-full h-30 p-4 flex flex-col gap-5 justify-center items-center">
            <div className="w-full pb-2 border-b ">
                <h1 className="name text-xl font-bold">
                    For Fun
                </h1>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-3 text-sm">
                <button className="w-30 h-8 gap-2 border flex items-center justify-center rounded-sm p-2 ">
                        <FaVideo /> <span>Documentary</span>
                </button>
                <button className="w-25 h-8 gap-2 border flex items-center justify-center rounded-sm text-[#0088cc]">
        
                    <FaChess/> <span>Chess</span>
                </button>
                <button className="w-25 h-8 border flex gap-2 items-center justify-center rounded-sm text-green-500">
                    <FaWalking /> <span>Walking</span>
                </button>
            </div> 
        </div>
        </>
    )
}