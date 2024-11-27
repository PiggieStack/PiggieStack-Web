import React from 'react';

export default function Builder({ fill = '#ffffff', viewBox = '0 0 192 192', width = '30' }) {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none"
      stroke={fill}
      stroke-width="6"
    >
      <path
        fill={fill}
        d="M28.3 118.987a5.799 5.799 0 0 0-8.2 8.2L64.813 171.9a5.799 5.799 0 0 0 8.2-8.2L28.3 118.987Z"
      ></path>
      <path
        fill={fill}
        d="M20.104 118.963a5.798 5.798 0 1 0 8.2 8.2L73.017 82.45a5.798 5.798 0 1 0-8.2-8.2l-44.713 44.713Zm143.534-45.95a5.798 5.798 0 1 0 8.2-8.2L127.124 20.1a5.798 5.798 0 1 0-8.2 8.2l44.714 44.713Z"
      ></path>
      <path
        fill={fill}
        d="M171.833 73.037a5.799 5.799 0 0 0-8.2-8.2L118.92 109.55a5.799 5.799 0 0 0 8.2 8.2l44.713-44.713Z"
      ></path>
    </svg>
  );
}
