import pfp from "../img/pfp.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Profile(){
    return(
        <>
        <div className="flex justify-between items-end gap-2 px-1 py-2 bg-white rounded-2xl">
            <div className="w-40 h-40">
                <img className="w-full h-full object-cover rounded-full" src={pfp} alt="brand picture" />
            </div>

            <div className=" w-[50%] h-40 flex flex-col justify-center items-end pr-3 border-l border-dotted rounded-xl">
                
                <h1 className="font-bold text-right text-3xl border-b pb-1">
                    KOLs MANAGER
                </h1>
                <h2 className="text-2xl font-semibold  pb-1 mt-2 mb-3">
                    Evander
                </h2>

                <div className="icons w-full flex flex-row justify-end items-center gap-3">
                    <button className="w-8 h-6 border flex items-center justify-center rounded-sm">
                        <a href="https://x.com/0x_evander">
                            <FaXTwitter />
                        </a>
                    </button>

                    <button className="w-8 h-6 border flex items-center justify-center rounded-sm">
                        <a href="https://t.me/EvanderOfficial">
                            <FaTelegramPlane className="text-[#0088cc]"/>
                        </a>
                    </button>

                    <button className="w-8 h-6 border flex items-center justify-center rounded-sm">
                        <a href="">
                            <FaDiscord className="text-[#5865f2]"/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
            
        </>
    )
}