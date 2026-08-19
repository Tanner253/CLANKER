export default function RobotSprite({ pushing = false }) {
  return (
    <svg
      className={`robot-sprite${pushing ? ' is-pushing' : ''}`}
      viewBox="0 0 72 110"
      aria-hidden="true"
    >
      <ellipse cx="36" cy="104" rx="16" ry="4" fill="rgba(0,0,0,0.35)" />
      <rect x="48" y="38" width="14" height="22" rx="3" fill="#8b6a3d" />
      <rect x="51" y="42" width="8" height="6" fill="#c4a36a" />
      <circle cx="36" cy="14" r="3" fill="#d7b37a" />
      <rect x="35" y="3" width="2" height="12" rx="1" fill="#d7b37a" />
      <circle cx="36" cy="3" r="2.2" fill="#6ecbff" />
      <rect x="24" y="16" width="24" height="22" rx="6" fill="#d7b37a" />
      <rect x="27" y="22" width="18" height="8" rx="3" fill="#1a1a1a" />
      <rect x="29" y="24" width="8" height="4" rx="1" fill="#6ecbff" />
      <rect x="33" y="38" width="6" height="8" fill="#c4a36a" />
      <rect x="22" y="46" width="28" height="26" rx="4" fill="#d7b37a" />
      <rect x="30" y="50" width="12" height="10" rx="2" fill="#8b6a3d" />
      <rect x="16" y="48" width="8" height="4" rx="2" fill="#c4a36a" />
      <rect x="14" y="50" width="5" height="22" rx="2" fill="#d7b37a" />
      <rect x="12" y="70" width="9" height="4" rx="1" fill="#8b6a3d" />
      <rect x="48" y="48" width="8" height="4" rx="2" fill="#c4a36a" />
      <rect x="53" y="50" width="5" height="22" rx="2" fill="#d7b37a" />
      <rect x="51" y="70" width="9" height="4" rx="1" fill="#8b6a3d" />
      <rect x="26" y="70" width="8" height="6" fill="#c4a36a" />
      <rect x="38" y="70" width="8" height="6" fill="#c4a36a" />
      <rect x="27" y="76" width="6" height="22" rx="2" fill="#d7b37a" />
      <rect x="39" y="76" width="6" height="22" rx="2" fill="#d7b37a" />
      <rect x="25" y="96" width="10" height="4" rx="1" fill="#8b6a3d" />
      <rect x="37" y="96" width="10" height="4" rx="1" fill="#8b6a3d" />
    </svg>
  )
}
