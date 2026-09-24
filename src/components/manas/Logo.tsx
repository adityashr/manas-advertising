type LogoProps = {
  showText?: boolean;
};

export function Logo({ showText = true }: LogoProps) {
  return (
    <svg
      width="500"
      height="380"
      viewBox={showText ? "0 0 500 380" : "0 0 500 300"}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Manas Advertising"
      className="h-auto w-full"
    >
      <g stroke="#000" strokeLinejoin="round" strokeLinecap="round">
        <path d="M94 180 L41 244 L111 245 L178 220 Z" fill="#00A0E3" strokeWidth="5" />
        <path d="M135 130 L94 180 L178 220 L212 211 Z" fill="#00A0E3" strokeWidth="5" />
        <path d="M174 84 L135 130 L212 211 L228 202 Z" fill="#6DCEF5" strokeWidth="5" />
        <path d="M240 9 L174 84 L228 202 L240 198 Z" fill="#00BFF2" strokeWidth="5" />
        <path d="M260 9 L326 84 L272 202 L260 198 Z" fill="#00A0E3" strokeWidth="5" />
        <path d="M326 84 L365 130 L288 211 L272 202 Z" fill="#6DCEF5" strokeWidth="5" />
        <path d="M365 130 L406 180 L322 220 L288 211 Z" fill="#00A0E3" strokeWidth="5" />
        <path d="M406 180 L459 244 L389 245 L322 220 Z" fill="#00A0E3" strokeWidth="5" />
        <path d="M9 282 L89 253 L41 244 Z" fill="#6DCEF5" strokeWidth="4" />
        <path d="M491 282 L411 253 L459 244 Z" fill="#6DCEF5" strokeWidth="4" />
      </g>
      {showText && (
        <text
          x="250"
          y="350"
          textAnchor="middle"
          fill="#00A0E3"
          stroke="#ffffff"
          strokeWidth="1"
          fontSize="43"
          fontFamily="cursive"
          fontStyle="italic"
          fontWeight="bold"
        >
          Manas Advertising
        </text>
      )}
    </svg>
  );
}

export default Logo;
