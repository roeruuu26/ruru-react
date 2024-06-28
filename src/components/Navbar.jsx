import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { SiValorant } from "react-icons/si";

import logo from "../assets/ruruLogo.png";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/roel-vargas-0b378322a/"><FaLinkedin/></a> 
                <a href="https://github.com/roeruuu26"><FaGithub /> </a>
                <a href="https://www.instagram.com/roeruuu/"><FaInstagram/></a>
                <a href="https://www.facebook.com/roeruuu/"><FaFacebook/></a>
                <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-js-onboarding--jso-ui"><SiIndeed/></a>
                <div className="relative group">
                    <SiValorant/>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full whitespace-nowrap bg-black text-white text-sm p-1 rounded hidden group-hover:block">
                        DoubleLift
                    </span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
