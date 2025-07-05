import React from 'react'
import {
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  bottom_banner_image,
  bottom_banner_image_sm
} from '../assets/greencart_assets/assets'

const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={bottom_banner_image} alt="banner" className='w-full hidden md:block' />
      <img src={bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />

      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>Why We Are the Best?</h1>
          {features.map((feature, index) => (
            <div key={index} className='flex items-start gap-4 mt-4'>
              <img src={feature.icon} alt={feature.title} className='md:w-11 w-9 mt-1' />
              <div>
                <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner;
