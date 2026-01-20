import { FaDiscord, FaEnvelope, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";


export default function Footer(){
    return(
        <>
            <footer className="w-full h-[7em] rounded-3xl  flex flex-col justify-center items-center">
                <div className="border-b w-full">
                    <div className="flex flex-row justify-center items-center space-x-3 py-2">   
                        <a href="https://x.com/0x_evander" className="cursor-pointer">< FaXTwitter /></a>
                        <a href="#" className="cursor-pointer">< FaDiscord /></a>
                        <a href="https://t.me/EvanderOfficial" className="cursor-pointer">< FaTelegram /></a>       
                    </div>
                </div>
                <div className="py-2">
                    &copy; 2026 Built with ❤️ || Evander.
                </div>
            </footer>
        </>
    )
}