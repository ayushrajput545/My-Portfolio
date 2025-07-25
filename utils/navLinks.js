import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";

export const navLinks = [
    {
        name:"Home",
        path:"#home",
        icon:<IoHomeOutline />
    },
    {
        name:"About",
        path:"#about",
        icon:<GoPerson />
    },
    {
        name:"Skills",
        path:"#skills",
        icon:<MdOutlineStickyNote2 />
    },
    {
        name:"Projects",
        path:"#projects",
        icon:<IoImageOutline />
    },
    {
        name:"Contact",
        path:"#contact",
        icon:<LuSendHorizontal />
    },
    {
        name:"Resume",
        path:"#resume",
        icon:<MdOutlineEventNote />
    },
]