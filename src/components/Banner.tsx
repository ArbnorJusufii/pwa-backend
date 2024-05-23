'use client';
import React from 'react';

interface IProp {
    imgSrc?: string;
}
const Banner: React.FC<IProp> = ({ imgSrc }) => {
    return (
        <div className='h-[50vh] md:h-[70vh] w-full'>
            <img
                src={imgSrc ? imgSrc : `/images/banner.jpg`}
                className='w-full h-full object-cover'
            />
        </div>
    );
};

export default Banner;
