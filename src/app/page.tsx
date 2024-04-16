"use client"
import Logo from "@/components/core/logo/index";
import SwipeCard from "@/components/tinder/card/index";
import { Profiles } from "@/data/profiles";
import Image from "next/image";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(Profiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < users.length) {
      setCurrentIndex(nextIndex);
    } else {
      setUsers(Profiles);
      setCurrentIndex(0);
      console.log("Fetch more.");
    }
  };

  return (
    <div className="flex flex-col justify-center mt-4">
      <Logo />
      <div className="flex flex-col mt-4 items-center justify-center h-[500px] relative">
        {users.slice(currentIndex, currentIndex + 2).reverse().map((user, index) => (
          <SwipeCard
            key={user.id}
            name={user.name}
            age={user.age}
            distance={user.distance}
            address={user.address}
            onSwipe={handleSwipe}
            zIndex={index}
            image={user.image} />
        ))}
      </div>

      <div className="mx-auto w-48 mt-4 flex flex-row items-center justify-between">
        <Image src="/assets/images/nope.png" alt={"nope"}
          height={48}
          width={48}
        ></Image>
        <Image src="/assets/images/superlike.png" alt={"superlike"}
          height={32}
          width={32}
        ></Image>
        <Image src="/assets/images/like.png" alt={"like"}
          height={48}
          width={48}
        ></Image>
      </div>
    </div>

  );
};

export default App;
