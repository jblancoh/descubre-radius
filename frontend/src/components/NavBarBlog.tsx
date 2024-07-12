'use client'
import { FC } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

const NavBarBlog: FC = () => {

  return (
    <nav className="shadow-lg">
      <div className="container flex justify-between">
        <div className="flex space-x-4 my-2">
         <img
          src={"/img/logo-blog.png"}
          alt="logo"
          className="w-44 object-contain"
        />
        </div>
        <div className="flex space-x-4 items-center my-2 text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="rounded-full bg-destructive data-[state='open']:bg-destructive/80 hover:bg-destructive/80"
                >
                  <HamburgerMenuIcon className="w-6 h-6 cursor-pointer" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Inicio
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/tech">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Tecnologia
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/analytics">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Analitica
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/blog">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBarBlog;