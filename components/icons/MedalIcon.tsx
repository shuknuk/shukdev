
import React from 'react';

const MedalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20V14" />
    <path d="m6.4 10-2.2 2.2a2.83 2.83 0 1 0 4 4L10 14.6" />
    <path d="m17.6 10 2.2 2.2a2.83 2.83 0 1 1-4 4L14 14.6" />
    <path d="M12 11.5 8 7.5l4-4 4 4-4 4Z" />
    <path d="M8 7.5c.5-2 2.5-3.5 5-3.5" />
    <path d="m12 11.5 4 4" />
  </svg>
);

export default MedalIcon;
