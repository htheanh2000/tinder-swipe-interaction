"use client"
import Logo from "@/components/core/logo/index";
import SwipeCard from "@/components/tinder/card/index";
import { Profiles } from "@/data/profiles";
import Image from "next/image";
import { Key, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(Profiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next card
    } else {
      // No more cards to display, fetch more 
      setUsers(Profiles);
      setCurrentIndex(0);
      console.log("Fetch more profile.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {users.length > 0 && currentIndex < users.length && (
        <SwipeCard
          key={users[currentIndex].id}
          name={users[currentIndex].name}
          age={users[currentIndex].age}
          bio={users[currentIndex].bio}
          onSwipe={handleSwipe}
        />
      )}
    </div>
  );
};

export default App;