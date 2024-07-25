'use client'
import { FC } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";

const NavBar: FC = () => {
  const pathname = usePathname();
  
  const logo = pathname === "/blog" ? "/img/logo-blog.png" : "/img/radius-logo.svg";

  return (
    <nav className="shadow-lg">
      <div className="container flex justify-between">
        <div className="flex space-x-4 my-2">
         <img
          src={logo}
          alt="logo"
          className="w-44 object-contain"
        />
        </div>
        <div className="flex space-x-4 items-center my-2 text-white">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="rounded-full bg-destructive hover:bg-destructive/80 p-2"
            >
              <HamburgerMenuIcon className="w-6 h-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-destructive text-white border-destructive">
              <Link href="/">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Inicio
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
              <Link href="/aboutus">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Nosotros
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
              <Link href="/tech">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Radius Tech
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
              <Link href="/analytics">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Radius Analytics
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
              <Link href="/blog">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Blog
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
              <Link href="/contact">
                <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                  Contacto
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;