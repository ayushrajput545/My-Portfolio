import NavBar from "@/components/NavBar";
import ThemeIcon from "@/components/ThemeIcon";
import Image from "next/image";
import HomePage from "@/components/Home";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="lg:w-11/12 w-full mx-auto  min-h-screen flex flex-col gap-5">
      <NavBar/>
      <ThemeIcon/>
      <HomePage/>
      <About/>
      

    </div>
  );
}
