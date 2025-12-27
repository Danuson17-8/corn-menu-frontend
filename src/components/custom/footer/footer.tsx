import { Link } from "@tanstack/react-router";
import { ArrowBigUp, Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

export const Footer = () => (
    <footer className="bg-black">
        <div className="text-white flex justify-between px-7 md:px-20 lg:px-60 border-b-2 border-white">
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-black bg-white rounded-none rounded-b-2xl w-15 flex justify-center items-center mb-1 cursor-pointer"
            >
                <ArrowBigUp size={40} />
            </button>
            <div className="flex gap-5 my-3">
                <a href="#"><Instagram size={35} /></a>
                <a href="#"><Facebook size={35} /></a>
                <a href="#"><Youtube size={35} /></a>
            </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-7 md:px-20 lg:px-60 items-start text-white space-y-5">
        
            <div className="flex flex-col items-start space-y-3">
                <div className="flex gap-3">
                    <img src="images/corn.png" alt="image ICON" className="h-7" />
                    <p className="text-2xl font-bold">CORN CORNN</p>
                </div>
                <p>Freshly Grilled Corn. Made to Make You Smile.</p>
            </div>

            <div className="flex flex-col items-end lg:items-center space-y-3">
                <p className="text-xl font-bold">Contact</p>
                <Link to="/contact">Contact us</Link>
            </div>

            <div className="col-span-2 lg:col-span-1 flex flex-row lg:flex-col justify-center items-center lg:items-end gap-5">
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <p>Thailand, Chiang Mai</p>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <p>012-345-6789</p>
                </div>
            </div>

        </div>
        <div className="text-xs text-center p-5 text-gray-400 bg-gray-950">
          © {new Date().getFullYear()} Corn CORNN!. All rights reserved.
        </div>
    </footer>
)