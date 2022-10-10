import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTelegram,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
  BsInstagram,
  BsWhatsapp
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black h-auto w-full flex flex-col justify-center p-11 text-gray-300 tracking-widest">
      <div className="flex border-b-2 border-gray-600 flex-wrap">
        <div className=" basis-1/3 pb-5">
          <h1 className="font-bold text-xl pb-2">Connect with Us</h1>
          <ul className=" text-gray-300 flex gap-2">
            <a target="__blank" href="https://t.me/Feva_strings">
              <BsTelegram
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://www.facebook.com/feven132tad">
              <BsFacebook
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="mailto:feven@setadess.com">
              <SiGmail
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://youtube.com/channel/UCro4G-tXDqOtZY7S-sPCdMQ">
              <BsYoutube
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://vm.tiktok.com/ZMF2HP38o/">
              <FaTiktok
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://twitter.com/Diva1234Tad?t=8jI-ZkVvLaPgjZKxYn5iQw&s=09">
              <BsTwitter
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://wa.me/qr/26OAU4YRL7UFJ1">
              <BsWhatsapp
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
            <a target="__blank" href="https://www.instagram.com/p/ChSt44LIE3r/?igshid=YmMyMTA2M2Y=">
              <BsInstagram
                size={20}
                className="hover:text-gray-300 text-gray-400"
              />
            </a>
          </ul>
        </div>
        <div className=" basis-1/3 pb-5">
          <h1 className=" font-bold text-xl pb-2">Contact Us</h1>
          <h1 className="text-gray-300">
            PHONE : <span className="text-lg tracking-widest">0933654654</span>
          </h1>
          <h1 className="text-gray-300">
            EMAIL :{" "}
            <span className="text-lg tracking-widest" >feven@setadess.com</span>
          </h1>
        </div>
        <div className="basis-1/3 pb-2">
          <h1 className=" font-bold text-xl pb-1">More</h1>
          <Link to="/about_us" className="uppercase text-gray-300 hover:text-gray-400">
            About Us
          </Link>
        </div>
      </div>
      {/* <hr /> */}
      <h1 className="pt-5">Setadess@2022. All right reserved.</h1>
    </div>
  );
};

export default Footer;
