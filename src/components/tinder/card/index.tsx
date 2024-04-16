import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image' ;
interface SwipeCardProps {
  name: string;
  age: number;
  address: string;
  distance: string;
  image: string;
  onSwipe: () => void;
  zIndex: number;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ name, age, address, distance,image, onSwipe, zIndex }) => {
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
      className="bg-white max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden absolute"
      style={{ x, rotate, zIndex}}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileDrag={{ scale: 1.1 }}
    >
      <div className="relative">
        <div className='absolute bottom-4 left-4'>
            <p className='text-white font-medium text-2xl'>{name}, {age}</p>
            <p className='text-white  text-sm'>{address}</p>
            <p className='text-white  text-sm'>{distance} miles away</p>
        </div>
        <Image src={`/assets/images/${image}`} alt={name} width={300} height={600} draggable="false" />
        <motion.div className="absolute top-4 right-4  border-4 rounded-md border-red" 
          style={{ opacity: nopeOpacity }}>
            <span className='text-red mx-4 text-3xl'>Nope</span> 
        </motion.div>
        <motion.div className="absolute top-4 left-4  border-4 rounded-md border-green" 
          style={{ opacity: likeOpacity }}>
            <span className='text-green mx-4 text-3xl'>Like</span> 
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
