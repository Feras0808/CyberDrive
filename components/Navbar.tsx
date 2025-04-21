import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";
import { navbarLinksList, NavProps } from "@/config/nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const { title } = siteConfig;

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="relative container mx-auto h-14 px-4 flex items-center justify-between">
        <a href="/" className="font-bold text-xl flex items-center">
          <span className="ml-2 hidden md:block">{title}</span>
        </a>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-4">
              {navbarLinksList.map((route: NavProps, i) => (
                <Link
                  href={route.href}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
