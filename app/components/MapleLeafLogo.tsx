type MapleLeafLogoProps = {
  className?: string;
  size?: number;
};

export default function MapleLeafLogo({ className, size = 40 }: MapleLeafLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 8 L55 24 L52 26 L66 30 L63 38 L78 36 L76 44 L86 50 L72 56 L74 60 L60 70 L66 74 L58 80 L52 76 L52 92 L48 92 L48 76 L42 80 L34 74 L40 70 L26 60 L28 56 L14 50 L24 44 L22 36 L37 38 L34 30 L48 26 L45 24 Z" />
    </svg>
  );
}
