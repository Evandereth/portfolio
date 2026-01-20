import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Socials(){
    return(
        <>
        <div className="w-full h-30 p-5 flex flex-col gap-5 justify-center items-center">

            <div className="w-full pb-2 border-b ">
                <h1 className="name text-xl font-bold">
                    Contact Me
                </h1>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-3 text-sm">
                <button className="w-25 h-8 border flex items-center justify-center rounded-sm p-2 hover:bg-black hover:text-white transition duration-500">
                    <a href="https://x.com/0x_evander" className="flex flex-row items-center justify-center gap-1">
                        <FaXTwitter /> <span>X(Twitter)</span>
                    </a>
                </button>
                <button className="w-25 h-8 border flex items-center justify-center rounded-sm text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition duration-500">
                    <a href="https://t.me/EvanderOfficial" className="flex flex-row items-center justify-center gap-1">
                        <FaTelegramPlane/> <span>Telegram</span>
                    </a>
                </button>
                <button className="w-25 h-8 border flex items-center justify-center rounded-sm text-[#5865f2] hover:bg-[#5865f2] hover:text-white transition duration-500">
                    <a href="" className="flex flex-row items-center justify-center gap-1">
                        <FaDiscord /> <span>Discord</span>
                    </a>
                </button>
            </div> 
        </div>
        </>
    )
}