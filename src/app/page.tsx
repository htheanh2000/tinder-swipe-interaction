"use client"
import Logo from "@/components/core/logo/index";
import SwipeCard from "@/components/tinder/card/index";
import { Profiles } from "@/data/profiles";
import Image from "next/image";
import {  useState } from "react";

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
    <div className="flex flex-col items-center justify-center h-screen relative">
      {users.slice(currentIndex, currentIndex + 2).reverse().map((user, index) => (
        <SwipeCard
          key={user.id}
          name={user.name}
          age={user.age}
          distance={user.distance}
          address={user.address}
          onSwipe={handleSwipe}
          zIndex={index} 
          image={user.image}        />
      ))}
    </div>
  );
};

export default App;
