"use client";

import Container from "../Container";
import { Icons } from "../Icons";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FC } from "react";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-between gap-3 md:gap-0"> */}
            {/* <Logo /> */}
            <Icons.airbnbLogo />
            {/* <div className="justify-center"> */}
            <Search />
            {/* </div> */}
            {/* <div className="justify-self-end"> */}
            <UserMenu currentUser={currentUser} />
            {/* </div> */}
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Navbar;
