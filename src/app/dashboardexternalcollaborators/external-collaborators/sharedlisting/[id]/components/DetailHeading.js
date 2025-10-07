import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid';
export default function DetailsHeading({property}){
    return(
        <div className='w-full text-textnormal'>
             <div className=' flex  md:flex-row md:justify-between text-textnormal'>
            <div className='flex flex-col  gap-2 '>
            <h1 className='text-xl md:text-2xl'>{property.title}</h1>

            <p className="flex items-center text-sm md:text-base">
  <MapPinIcon className="w-4 h-4 md:w-5 md:h-5 fill-current text-primary mr-2" />
  {property.address},{property.city}
</p>
            </div>

            <div>
                <h2 className='text-xl md:text-2xl'>${property.price ||`${property.rent} /mo`}</h2>

            </div>
            </div>
            


        </div>
    )
}