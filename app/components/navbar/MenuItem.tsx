"use client";

import { FC } from "react";

interface MenuItemProps {
  handleClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ handleClick, label }) => {
  return (
    <div
      onClick={handleClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};
export default MenuItem;
