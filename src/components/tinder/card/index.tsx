import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SwipeCardProps {
  name: string;
  age: number;
  bio: string;
  onSwipe: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ name, age, bio, onSwipe }) => {

    const handleDragStart = (event: React.DragEvent) => {
        event.preventDefault(); // Prevents the default drag behavior of the image
      };
    
    
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        const offset = info.offset.x;
        if (Math.abs(offset) > 150) {  // Considered a swipe if dragged over 150 pixels left or right
          onSwipe();
        }
      }}
      className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden"
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="p-4">
        <h2 className="text-2xl">{name}, {age}</h2>
        <p>{bio}</p>
        <Image src={'/assets/images/avatar.png'} alt={''} width={300} height={600} onDragStart={handleDragStart}   />
      </div>
    </motion.div>
  );
};

export default SwipeCard;
