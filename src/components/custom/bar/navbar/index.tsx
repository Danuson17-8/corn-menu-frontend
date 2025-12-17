import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import ButtonUser from "../../button/user-button";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return  <Link
        to={to}
        className="nav-link"
        activeProps={{ 'data-active': true }}
        inactiveProps={{ 'data-active': false }}
    >
        {children}
    </Link>
}

export function NavBar() {
    return  <>
        <nav className="space-x-6 flex justify-around bg-black py-3 items-center sticky top-0 z-50">
        <div className="flex items-center space-x-5">
            <Link
                to="/"
                className="mr-10 hover:scale-130 transition-transform duration-300 ease-in-out"
            >
                <img
                    src="/images/corn.png"
                    className="max-h-[40px]"
                    alt="Corn Corn"
                />
            </Link>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/menu">Corn Menu</NavLink>
            <NavLink to="/promotion">Promotion</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <ButtonUser/>
    </nav>
    </>
}