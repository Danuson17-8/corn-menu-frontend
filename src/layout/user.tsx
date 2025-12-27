import { type ReactNode } from 'react';
import { NavBar } from '@/components/custom/bar/navbar';
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from '@tanstack/react-router';
import { Footer } from '@/components/custom/footer/footer';

export default function UserLayout({ children }: { children: ReactNode }) {
    const location = useLocation();
    return (
        <>
            <NavBar/>
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            <Footer/>
        </>
    );
}
