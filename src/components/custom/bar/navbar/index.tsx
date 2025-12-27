import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import ButtonUser from "../../button/user-button";
import { ChevronUp, MenuIcon } from "lucide-react";

const Menu = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
  },
  {
    id: 2,
    name: "Corn Menu",
    link: "/menu",
  },
  {
    id: 3,
    name: "Promotion",
    link: "/promotion",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

interface NavLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
    <Link
        to={to}
        onClick={onClick}
        className="
            px-3 py-2 md:py-1 md:rounded-full my-auto text-center font-medium text-sm text-yellow-50 select-none
            transition-all duration-500 ease-in-out transform
            hover:text-black hover:bg-primary md:hover:scale-110
            md:data-[active=true]:scale-110 data-[active=true]:text-black data-[active=true]:bg-primary
        "
        activeProps={{ 'data-active': true }}
        inactiveProps={{ 'data-active': false }}
    >
        {children}
    </Link>
);

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY < 10) {
                setShow(true);
            } else if (window.scrollY > lastScrollY) {
                setShow(false);
                setOpen(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return  <>
        <div className="h-10 md:h-15 bg-black" />
        <nav className={`fixed top-0 z-50 w-full bg-black p-3 items-center transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="flex items-center justify-between lg:justify-around">
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden cursor-pointer text-white"
                >
                    {open ? <ChevronUp /> : <MenuIcon /> }
                </button>
                <div className="hidden md:flex space-x-4">
                    <Link
                        to="/"
                        className="mr-10 hover:scale-130 transition-transform duration-300 ease-in-out"
                    >
                        <img
                            src="favicon.png"
                            className="max-h-10"
                            alt="Corn Corn"
                        />
                    </Link>
                    {Menu.map((item) => (
                        <NavLink key={item.id} to={item.link}>{item.name}</NavLink>
                    ))}
                </div>
                <ButtonUser/>
            </div>
            <div className={`md:hidden grid grid-cols-2 transition-all duration-300 overflow-hidden rounded-b-5xl bg-black ${open ? "h-27 opacity-100 px-10 mt-5" : "max-h-0 opacity-0"}`}>
                {Menu.map((item) => (
                    <NavLink  key={item.id} to={item.link} onClick={() => setOpen(false)}>{item.name}</NavLink>
                ))}
            </div>
        </nav>
    </>
}