export default function Logo() {
  return (
    <svg
      style={{ color: "white", marginRight: "10px" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
      <line x1="5" y1="9" x2="5" y2="9" />
      <line x1="5" y1="13" x2="5" y2="13" />
      <line x1="5" y1="17" x2="5" y2="17" />
    </svg>
  );
}
