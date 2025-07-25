import NavBar from "@/components/NavBar";
import ThemeIcon from "@/components/ThemeIcon";
import Image from "next/image";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-5">
      <NavBar/>
      <ThemeIcon/>
      <HomePage/>

    </div>
  );
}
