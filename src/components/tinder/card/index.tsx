import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface SwipeCardProps {
  name: string;
  age: number;
  bio: string;
  onSwipe: () => void;
  zIndex: number;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ name, age, bio, onSwipe, zIndex }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-20, 20]); // Adjust these values as needed
  const likeOpacity = useTransform(x, [50, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, -50], [1, 0]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={(event, info) => {
        const offset = info.offset.x;
      }}
      onDragEnd={(event, info) => {
        const offset = info.offset.x;
        if (Math.abs(offset) > 150) {
          onSwipe();
        }
        // Reset the opacities when drag ends
        x.set(0); // Reset position after drag ends

      }}
      className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden absolute"
      style={{ x, rotate, zIndex}}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileDrag={{ scale: 1.1 }}
    >
      <div className="p-4 relative">
        <img src={'/assets/images/avatar.png'} alt={name} width={300} height={600} draggable="false" />
        <motion.div className="absolute top-10 left-8  border-4 rounded-md border-red" 
          style={{ opacity: nopeOpacity }}>
            <span className='text-red mx-4 text-3xl'>Nope</span> 
        </motion.div>
        <motion.div className="absolute top-10 right-8  border-4 rounded-md border-green" 
          style={{ opacity: likeOpacity }}>
            <span className='text-green mx-4 text-3xl'>Like</span> 
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
