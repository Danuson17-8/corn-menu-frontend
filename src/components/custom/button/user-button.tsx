import { useState } from "react";
import { User } from "lucide-react";
import { useAuth } from "@/context/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DialogLogin } from "../dialog/auth/login-dialog";

export default function ButtonUser () {
    const [open, setopen] = useState(false);
    const { user, signOut } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    async function logout() {
        const userOld = await signOut();
        if (userOld) {
            // Clear cache
            queryClient.clear();

            return navigate({
                to: '/',
            });
        }
    }

    return <>
        <div className="relative group">
            <button
                className="text-white cursor-pointer gap-2 min-w-[120px] flex justify-end items-end"
                onClick={() => {!user && setopen(true)}}
            >
                {user && user.name}
                <User size={20} strokeWidth={3} />
            </button>
            {user && 
                <div className=" p-2 border-primary border-t-5 absolute right-0 mt-2 w-21 bg-black rounded-lg shadow-lg flex items-center
                    opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300"
                >
                    <Button 
                        onClick={logout}
                        className="px-2 h-7 bg-gray-700 font-bold rounded-full cursor-pointer hover:bg-white hover:text-black"
                    >
                        Log Out
                    </Button>
                </div>
            }
        </div>
        <DialogLogin open={open} setOpen={setopen}/>
    </>
}