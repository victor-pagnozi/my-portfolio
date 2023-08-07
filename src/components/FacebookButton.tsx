import React, { ReactElement } from "react";
//icon : any
//color: string
function FacebookButton(): ReactElement {
  return (
    <div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="29.5" fill="#2B2424" stroke="#2F42E8" />
          <path
            d="M25.2203 28.0349C25.6345 28.0349 25.9703 27.6991 25.9703 27.2849V23.0849C25.9703 21.5 26.7869 19.9257 28.3405 18.7294C29.8985 17.5298 32.0447 16.8349 34.3112 16.8349H39.0157V20.9349H34.3112C33.6845 20.9349 33.0558 21.1251 32.568 21.5007C32.0758 21.8797 31.743 22.442 31.743 23.0849V27.2849C31.743 27.6991 32.0788 28.0349 32.493 28.0349H38.7337L37.4025 32.1349H32.493C32.0788 32.1349 31.743 32.4707 31.743 32.8849V43.3349H25.9703V32.8849C25.9703 32.4707 25.6345 32.1349 25.2203 32.1349H20.5157V28.0349H25.2203Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default FacebookButton;
