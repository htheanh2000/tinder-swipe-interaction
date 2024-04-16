import React from 'react';
import Image from 'next/image'
interface ICardProps {
}

const SwipeCard= (props: ICardProps) => {
  return (
    <div
      className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-4">
        <h2 className="text-2xl"></h2>
        <Image src={'/assets/images/avatar.png'} alt={'avatar'} width={362} height={600}/>
      </div>
    </div>
  );
};

export default SwipeCard;
