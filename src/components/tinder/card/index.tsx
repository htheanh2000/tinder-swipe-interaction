import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


interface SwipeCardProps {
  name: string;
  age: number;
  bio: string;
  onSwipe: () => void;
  zIndex: number;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ name, age, bio, onSwipe, zIndex }) => {
  const handleDragStart = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        const offset = info.offset.x;
        if (Math.abs(offset) > 150) {
          onSwipe();
        }
      }}
      className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden absolute"
      style={{ zIndex, x: 0, y: -50 * zIndex }}  // Positioning for stack effect
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileDrag={{ scale: 1.1 }}
    >
      <div className="p-4">
        <h2 className="text-2xl">{name}, {age}</h2>
        <p>{bio}</p>
        <Image
          src={'/assets/images/avatar.png'}
          alt={name}
          width={300}
          height={600}
          onDragStart={handleDragStart}
        />
      </div>
    </motion.div>
  );
};

export default SwipeCard;
