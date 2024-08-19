import logo from "../assets/logo.png";
import { MdConnectedTv,MdHomeFilled,MdOutlineExplore,MdOutlinePlaylistPlay,MdOutlineSearch   } from "react-icons/md";



function Navbar() {
    return(
       <div className="bg-black text-white flex items-center justify-between px-4 pt-2">
       <div className=" ">
            <img src={logo} alt="" className="w-32" />
        </div>
        <div className="">
            <ul className="flex items-center gap-6 lg-gap-8">
                <li>
                    <MdHomeFilled className="navbtn" />
                    <p className="hidden lg:flex text-[22px] font-bold">Home</p>
                </li>
                <li>
                <MdOutlineExplore className="navbtn"/>
                <p className="hidden lg:flex text-[22px] font-bold">Explorar</p>
                </li>
                <li>
                <MdOutlinePlaylistPlay className="navbtn"/>
                <p className="hidden lg:flex text-[22px] font-bold">Biblioteca</p>
                </li>
                <li>
                <MdOutlineSearch  className="navbtn"/>
                <p className="hidden lg:flex text-[22px] font-bold">Buscar</p>
                </li>
                <li>
                <MdConnectedTv className="navbtn"/>
                <p className="hidden lg:flex text-[22px] font-bold">Transmitir</p>
                </li>

            </ul>
        
        
        </div>
        <div className="bg-white py-1.5 px-3 rounded-[1.5rem]">
            <button className="text-black font-bold">
                Acceder
            </button>
        </div>
        
        
        
        </div>
    );
}

export default Navbar;
  
