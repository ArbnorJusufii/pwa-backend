'use client';

import React from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const ArtidalIconSecondary: React.FC<IProps> = ({ className, onClick }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g filter="url(#filter0_dd_1141_14834)">
        <rect
          x="3.1"
          y="2.1"
          width="31.8"
          height="31.8"
          rx="7.9"
          fill="white"
        />
        <rect
          x="3.1"
          y="2.1"
          width="31.8"
          height="31.8"
          rx="7.9"
          fill="url(#paint0_linear_1141_14834)"
        />
        <rect
          x="3.1"
          y="2.1"
          width="31.8"
          height="31.8"
          rx="7.9"
          stroke="#D0D5DD"
          strokeWidth="0.2"
        />
        <circle cx="19" cy="18" r="11" fill="#17183B" />
        <path
          d="M20.5728 12.3516H18.0089L13.946 21.8651H16.602L17.3252 20.0167L18.0878 18.0325L19.2711 14.9882L20.4544 18.0325L21.217 20.0167L21.9402 21.8651H24.6487L20.5728 12.3516Z"
          fill="#7829E7"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1141_14834"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1141_14834"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1141_14834"
            result="effect2_dropShadow_1141_14834"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1141_14834"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1141_14834"
          x1="19"
          y1="2"
          x2="19"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D0D5DD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArtidalIconSecondary;
