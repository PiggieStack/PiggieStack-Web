import React from 'react';

export default function Minimize({
  viewBox = '0 0 24 24',
  fill = 'var(--gray-900)',
  width = '24',
}) {
  return (
    <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" width={width}>
      <path
        d="M22 2H16.1429M22 2V7.85714M22 2L18.5 5.5M15 9L15.875 8.125"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{' '}
      <path
        d="M9 15L2 22M2 22H7.85714M2 22V16.1429"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{' '}
    </svg>
  );
}


