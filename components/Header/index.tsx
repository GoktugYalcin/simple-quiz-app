import React from "react";
import { HeaderProps } from "@/types/HeaderProps";
import { Bricolage_Grotesque } from "next/font/google";
import clsx from "clsx";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerClasses = clsx(
    BricolageGrotesque.className,
    "text-center text-8xl bg-gradient-to-r from-yellow-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-24",
  );
  return <h1 className={headerClasses}>{title}</h1>;
};

export default Header;
