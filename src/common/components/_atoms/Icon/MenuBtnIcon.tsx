import { MenuBtnIconType } from "../../../types/common";

const MenuBtnIcon = ({ className }: MenuBtnIconType) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Combined Shape 2">
        <path
          id="Combined Shape"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM16 12H0V15H16V12Z"
          fill="#69707D"
        />
      </g>
    </svg>
  );
};

export default MenuBtnIcon;
