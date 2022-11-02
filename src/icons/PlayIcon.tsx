import { Icon } from "../icons/IconInterface";

export default function PlayIcon({ width, heigth, color = "white" }: Icon) {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V17L14 9L1 1Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
