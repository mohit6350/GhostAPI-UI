import Image from "next/image";
import LeftSidebar from "@/components/LeftSideBar/LeftSidebar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Header/>
        <LeftSidebar/>
        <Footer/>
      </div>
    </main>
  );
}
