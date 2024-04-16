import Logo from "@/components/core/logo/index";
import SwipeCard from "@/components/tinder/card/index";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md flex justify-center items-center flex-col">
      <Logo/>
      <SwipeCard/>
    </div>
  );
}
