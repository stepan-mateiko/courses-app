import React from "react";

const Logo: React.FC = () => {
  return (
    <>
      <svg
        width="111"
        height="48"
        viewBox="0 0 111 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M110.504 0H0.233154V48H110.504V0Z" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2911_391"
              transform="matrix(0.00206299 0 0 0.00473934 -0.0281253 0)"
            />
          </pattern>
          <image
            id="image0_2911_391"
            width="512"
            height="211"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  );
};

export default Logo;
