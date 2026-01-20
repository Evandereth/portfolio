import { FaGlobeEurope } from "react-icons/fa"
import pfp from "../img/pfp.jpg"

export default function Profile(){
    return(
        <>
        <div className=" w-full h-full flex justify-around items-end gap-2 px-1 py-2">
            <div className="w-40 h-40">
                <img className="w-full h-full object-cover rounded-2xl" src={pfp} alt="brand picture" />
            </div>

            <div className=" w-[50%] h-40 flex flex-col justify-between items-end border-l border-dotted rounded-xl">
                
                <h2 className="name w-full font-semibold text-right text-xl border-b pb-1 mt-2">
                    Evander
                </h2>
                <h1 className="name text-2xl text-right font-bold">
                    KOLs <br/> MANAGER
                </h1>

                <div className="w-full">
                    <p className="name flex flex-row justify-center items-center gap-3 bg-black/90 text-white text-center w-full py-1 rounded-xl backdrop-blur-md cursor-pointer">
                        <span><FaGlobeEurope className="animate-globe"/></span>
                        Since 2023
                    </p>
                </div>
            </div>
        </div>
            
        </>
    )
}