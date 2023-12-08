import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ item }) => {
    
    return (
       <div className="card w-96 bg-[#181818] border border-[#2A0E61] text-neutral-content">
            <div className="card-body">
                <div className='w-32 h-32'>
                <Image src={item?.icon} alt='icon' width={70} height={70}></Image>
                </div>
                <h2 className="card-title">{item?.tittle}</h2>
                <p>{item?.details}</p>
           <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">Accept</button>
        </div>
        </div>
      </div>
    );
};

export default ServicesCard;