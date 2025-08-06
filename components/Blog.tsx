import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA, ICONS, getTechIconComponent } from '../constants';

// Tech stack icons with proper styling (matching TechStack component)
const TECH_ICONS = {
    Java: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
        </svg>
    ),
    Python: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
        </svg>
    ),
    JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
    ),
    TypeScript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
    ),
    HTML5: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
    ),
    CSS3: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
    ),
    'Next.js': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0803-.0516c-.0516-.0336-.0939-.0822-.1213-.1201-.0146-.0212-.0094-1.3157.0188-4.2857l.0375-4.2488.0563-.0687c.0235-.0299.0797-.0895.1148-.1201.0516-.0406.1213-.0633.2700-.0633.2187 0 .3665.0816.4851.2634.0262.0411 1.0913 1.681 2.3652 3.6442 1.2739 1.9631 2.4348 3.7078 2.5823 3.8809 2.0185 2.3621 2.681 3.14 2.681 3.14.0375.0367.0375.0367.1977-.0314 1.7388-.8668 3.1101-2.2194 4.0107-3.9559 1.9252-3.7078 1.9252-8.1463 0-11.8541C20.6882 2.1463 17.4952.3073 14.0864.0328c-.2299-.0235-.5047-.0328-.7672-.0328L11.5725 0z" />
        </svg>
    ),
    'Node.js': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
    ),
    FastAPI: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zM9.568 18.227l1.123-3.18h2.618l1.123 3.18H16.8l-3.267-8.636h-3.066L7.2 18.227h2.368zm2.432-11.636c1.02 0 1.636.818 1.636 1.636s-.616 1.636-1.636 1.636-1.636-.818-1.636-1.636S10.98 6.591 12 6.591z" />
        </svg>
    ),
    TailwindCSS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
    ),
    LangChain: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
        </svg>
    ),
    Docker: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.844-.266a11.94 11.94 0 003.766-1.568c1.156-.665 2.144-1.52 2.94-2.537 1.5-2.04 2.277-4.247 2.277-4.247h.084c1.245 0 2.004-.69 2.277-1.32.142-.33.181-.695.181-1.06a3.04 3.04 0 00-.19-1.06z" />
        </svg>
    ),
    'Framer Motion': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 12h8l-4 8V4l8 8H8" />
        </svg>
    ),
    React: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
            <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
            </g>
        </svg>
    ),
    Recharts: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
    ),
    'Gemini API': (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2.5l1.5 4l4 1.5l-4 1.5l-1.5 4l-1.5-4l-4-1.5l4-1.5l1.5-4M12 21.5l-1.5-4l-4-1.5l4-1.5l1.5-4l1.5 4l4 1.5l-4 1.5l-1.5 4M4.5 9.5l-1-2.5l-2.5-1l2.5-1l1-2.5l1 2.5l2.5 1l-2.5 1l-1 2.5z" />
        </svg>
    ),
    'Tavily Search API': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
    ),
    Render: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
        </svg>
    ),
    Vercel: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2L2 22h20L12 2z" />
        </svg>
    ),
    CSS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
        </svg>
    ),
    HTML: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    ),
    'React Hooks': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
            <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
            </g>
        </svg>
    ),
    'Discord.js': (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.317 4.369a1.913 1.913 0 00-2.475-.221c-.73.434-1.356.924-1.92 1.464a13.32 13.32 0 00-3.324-1.028 12.33 12.33 0 00-1.18-.088 11.8 11.8 0 00-1.18.088 13.32 13.32 0 00-3.324 1.028 12.42 12.42 0 00-1.92-1.464 1.913 1.913 0 00-2.475.221 1.89 1.89 0 00-.387 2.656c.39.684.9 1.31 1.49 1.868a12.18 12.18 0 00-2.227 3.784 1.9 1.9 0 00.73 2.226 1.93 1.93 0 002.313.111c.42-.258.82-.55 1.188-.868a10.45 10.45 0 001.986 1.25c.5.29.98.56 1.45.82a1.86 1.86 0 002.083 0c.47-.26.95-.53 1.45-.82a10.45 10.45 0 001.986-1.25c.368.318.768.61 1.188.868a1.93 1.93 0 002.313-.111 1.9 1.9 0 00.73-2.226 12.18 12.18 0 00-2.227-3.784c.59-.558 1.1-1.184 1.49-1.868a1.89 1.89 0 00-.387-2.656zm-9.31 7.237c-.89 0-1.61-.83-1.61-1.854 0-1.025.72-1.854 1.61-1.854.89 0 1.61.83 1.61 1.854 0 1.025-.72 1.854-1.61 1.854zm5.32 0c-.89 0-1.61-.83-1.61-1.854 0-1.025.72-1.854 1.61-1.854.89 0 1.61.83 1.61 1.854 0 1.025-.72 1.854-1.61 1.854z" />
        </svg>
    ),
    Bash: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
    ),
    'Web Development': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    Hackathons: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    ),
    AI: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
    ),
    'Full-Stack': (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
            <ellipse cx="12" cy="7" rx="8" ry="4" />
        </svg>
    ),
};

// Tech color mapping (matching TechStack component)
const getTechBadgeStyle = (tech: string) => {
    const techLower = tech.toLowerCase();
    const colorMap: { [key: string]: string } = {
        'java': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
        'python': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
        'javascript': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
        'typescript': 'bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
        'html': 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-300 dark:border-red-400/30',
        'html5': 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-300 dark:border-red-400/30',
        'css': 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
        'css3': 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
        'next.js': 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
        'node.js': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
        'fastapi': 'bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 border-teal-300 dark:border-teal-400/30',
        'tailwindcss': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
        'tailwind': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
        'langchain': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
        'docker': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
        'react': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
        'framer motion': 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400 border-pink-300 dark:border-pink-400/30',
        'recharts': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
        'gemini api': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
        'gemini': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
        'vercel': 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
        'render': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
        'discord.js': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
        'bash': 'bg-gray-100 dark:bg-gray-700/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
        'web development': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
        'hackathons': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
        'ai': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
        'full-stack': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
    };

    // Check for exact matches first, then partial matches
    for (const [key, color] of Object.entries(colorMap)) {
        if (techLower === key || techLower.includes(key)) {
            return color;
        }
    }

    // Default color for unknown tech
    return 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-400/30';
};

const getTechIcon = (tech: string) => {
    const techKey = tech as keyof typeof TECH_ICONS;
    return TECH_ICONS[techKey] || null;
};

// Add dates to projects for timeline display
const PROJECT_DATES: { [key: string]: string } = {
    // Featured Work
    'resume-analyzer': '2025-07-23',
    'brhacks24': '2024-10-07',
    'brhacks23': '2023-10-08',
    // Creative Labs
    'env-careers': '2025-06-04',
    'audiblesmiles': '2025-01-25',
    'forher': '2024-05-29',
    'greencoin': '2023-05-02',
    'shuk-bot': '2020-07-20',
    '3pfs-in-1': '2020-05-20'
};

type Tab = 'Featured Work' | 'Creative Labs';

const rankColorMap = {
    Gold: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
    Silver: 'bg-gray-400/20 text-gray-400 border-gray-400/30',
    Bronze: 'bg-yellow-600/20 text-yellow-600 border-yellow-600/30',
    'In Progress': 'bg-blue-400/20 text-blue-400 border-blue-400/30',
};

const GithubLinksDropdown: React.FC<{ links: { label: string; url: string }[] | string; isDialog?: boolean }> = ({ links, isDialog = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!Array.isArray(links)) {
        return (
            <a href={links} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ICONS.github className="w-4 h-4" />
                <span>GitHub</span>
            </a>
        );
    }

    const baseClasses = "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors";
    const dropdownMenuPosition = isDialog ? "top-full mt-2" : "bottom-full mb-2";

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className={baseClasses}>
                <ICONS.github className="w-4 h-4" />
                <span>GitHub</span>
                <ICONS.chevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className={`absolute ${dropdownMenuPosition} left-0 min-w-[150px] bg-popover border border-border rounded-md shadow-lg p-1 z-20 fade-in-on-change`}>
                    {(links as { label: string; url: string }[]).map(link => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full text-left px-3 py-1.5 text-sm text-popover-foreground hover:bg-accent rounded-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            <ICONS.github className="w-4 h-4 mr-2" />
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const ImagePreviewDialog: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    if (!project.image) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-5xl m-4 bg-card text-card-foreground rounded-lg border border-border shadow-lg p-4 relative fade-in-on-change"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-3 p-1 rounded-full bg-black/30 text-white hover:bg-black/50 z-10 transition-colors">
                    <ICONS.x className="h-5 w-5" />
                </button>
                <div className="relative aspect-video bg-black/10 rounded-md">
                    <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-lg font-bold text-foreground mt-4 px-1">{project.title}</h2>
            </div>
        </div>
    );
};

const CaseStudyDialog: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    if (!project.caseStudy) return null;

    const [isUnfolding, setIsUnfolding] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsUnfolding(false), 350);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const contentEl = contentRef.current;
        if (!contentEl) return;

        const onFirstScroll = () => {
            setShowScrollIndicator(false);
            contentEl.removeEventListener('scroll', onFirstScroll);
        };

        const checkAndSetIndicator = () => {
            contentEl.removeEventListener('scroll', onFirstScroll);
            const isScrollable = contentEl.scrollHeight > contentEl.clientHeight;

            if (isScrollable && contentEl.scrollTop === 0) {
                setShowScrollIndicator(true);
                contentEl.addEventListener('scroll', onFirstScroll);
            } else {
                setShowScrollIndicator(false);
            }
        };

        const timeoutId = setTimeout(checkAndSetIndicator, 100);
        const resizeObserver = new ResizeObserver(checkAndSetIndicator);
        resizeObserver.observe(contentEl);

        return () => {
            clearTimeout(timeoutId);
            resizeObserver.disconnect();
            if (contentEl) {
                contentEl.removeEventListener('scroll', onFirstScroll);
            }
        };
    }, [project]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-2xl m-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Paper Draft Animation Container */}
                <div className={`relative transition-all duration-350 ease-out ${isUnfolding
                    ? 'scale-90 opacity-0 rotate-1 skew-y-1'
                    : 'scale-100 opacity-100 rotate-0 skew-y-0'
                    }`}>
                    {/* Paper Background with dot pattern like the site */}
                    <div className="bg-card text-card-foreground rounded-lg border border-border shadow-lg overflow-hidden"
                        style={{
                            backgroundImage: 'radial-gradient(hsl(var(--foreground) / 0.05) 1.5px, transparent 1.5px)',
                            backgroundSize: '2.5rem 2.5rem'
                        }}>

                        {/* Header */}
                        <div className="border-b border-border bg-card/80 backdrop-blur-sm p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
                                    <div className="flex items-center space-x-4">
                                        {project.links.github && <GithubLinksDropdown links={project.links.github} isDialog={true} />}
                                        {project.links.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                                                <ICONS.externalLink className="w-4 h-4 mr-1" /> Live Site
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="ml-4 p-1 rounded-full hover:bg-muted"
                                >
                                    <ICONS.x className="h-5 w-5 text-muted-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div ref={contentRef} className="space-y-4 text-muted-foreground max-h-[60vh] overflow-y-auto pr-2 p-6 relative">
                            <div>
                                <h3 className="font-semibold text-lg text-foreground mb-1">Challenge</h3>
                                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.challenge }} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground mb-1">Solution</h3>
                                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.solution }} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground mb-1">Key Learnings</h3>
                                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.learnings }} />
                            </div>
                            {showScrollIndicator && (
                                <div className="absolute bottom-0 right-2 left-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none flex justify-center items-end pb-2">
                                    <ICONS.chevronDown className="w-6 h-6 text-muted-foreground animate-bounce opacity-75" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TimelineItem: React.FC<{
    project: Project;
    date: string;
    isLast: boolean;
    isActive: boolean;
    onCaseStudyClick: () => void;
    onImagePreviewClick: () => void;
    onHover: (id: string | null) => void;
}> = ({ project, date, isLast, isActive, onCaseStudyClick, onImagePreviewClick, onHover }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (card) {
                card.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            className="relative flex items-start group"
            onMouseEnter={() => onHover(project.id)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-border group-hover:bg-primary/30 transition-colors duration-300" />
            )}

            {/* Timeline Dot */}
            <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 transition-all duration-300 ${isActive
                ? 'bg-primary border-primary shadow-lg shadow-primary/25 scale-110'
                : 'bg-card border-border group-hover:border-primary/50 group-hover:scale-105'
                }`}>
                <div className={`absolute inset-2 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-foreground' : 'bg-muted group-hover:bg-primary/20'
                    }`} />
                {isActive && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                )}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1 pb-12">
                <div ref={cardRef} className={`spotlight-card p-6 bg-card border border-border rounded-lg shadow-sm transition-all duration-300 ${isActive ? 'shadow-lg border-primary/20' : 'group-hover:shadow-md group-hover:border-primary/10'
                    }`}>
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <h3 className={`text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
                                }`}>
                                {project.title}
                            </h3>
                            {project.rank && (
                                <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full border ${rankColorMap[project.rank]}`}>
                                    {project.rank === 'In Progress' ? (
                                        <ICONS.progress className="w-3 h-3" />
                                    ) : (
                                        <ICONS.medal className="w-3 h-3" />
                                    )}
                                    <span>{project.rank}</span>
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground mb-3">
                        {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => {
                            const IconComponent = getTechIcon(tech);
                            const badgeStyle = getTechBadgeStyle(tech);
                            return (
                                <div key={tech} className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 ${badgeStyle}`}>
                                    {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                                    <span>{tech}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {project.links.github && <GithubLinksDropdown links={project.links.github} />}
                            {project.links.live && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    <ICONS.externalLink className="w-4 h-4" />
                                    <span>Live Site</span>
                                </a>
                            )}
                            {project.image && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onImagePreviewClick();
                                    }}
                                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ICONS.image className="w-4 h-4" />
                                    <span>View Picture</span>
                                </button>
                            )}
                        </div>

                        {project.caseStudy && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onCaseStudyClick();
                                }}
                                className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                                    }`}
                            >
                                Read More →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export function Blog() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedImageProject, setSelectedImageProject] = useState<Project | null>(null);
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('Featured Work');

    // Sort projects by date (newest first) and filter by active tab
    const filteredProjects = PROJECTS_DATA
        .filter(project => project.category === activeTab)
        .sort((a, b) => {
            const dateA = PROJECT_DATES[a.id] || '2020-01-01';
            const dateB = PROJECT_DATES[b.id] || '2020-01-01';
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        });

    return (
        <section id="work-timeline" className="py-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">My Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    A chronological journey through my projects. Each entry reveals the development process, challenges overcome, and lessons learned along the way.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
                <div className="p-1 bg-secondary rounded-lg">
                    <button
                        onClick={() => setActiveTab('Featured Work')}
                        className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'Featured Work' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
                    >
                        Featured Work
                    </button>
                    <button
                        onClick={() => setActiveTab('Creative Labs')}
                        className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'Creative Labs' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
                    >
                        Creative Labs
                    </button>
                </div>
            </div>

            {/* Timeline */}
            <div
                key={activeTab}
                className="max-w-4xl mx-auto fade-in-on-change"
            >
                {filteredProjects.map((project, index) => (
                    <TimelineItem
                        key={project.id}
                        project={project}
                        date={PROJECT_DATES[project.id] || '2020-01-01'}
                        isLast={index === filteredProjects.length - 1}
                        isActive={activeProject === project.id}
                        onCaseStudyClick={() => setSelectedProject(project)}
                        onImagePreviewClick={() => setSelectedImageProject(project)}
                        onHover={setActiveProject}
                    />
                ))}
            </div>

            {selectedProject && (
                <CaseStudyDialog
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            {selectedImageProject && (
                <ImagePreviewDialog
                    project={selectedImageProject}
                    onClose={() => setSelectedImageProject(null)}
                />
            )}
        </section>
    );
}