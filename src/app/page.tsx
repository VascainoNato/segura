import Content from "@/components/Content/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col">
      <Header/>
      <div className="flex w-full flex-grow">
      <Content/>
      </div>
      <Footer/>
    </div>
  );
}
