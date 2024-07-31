'use client'
import { FC } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
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
              <DropdownMenuGroup>
                <Link href="/" >
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Inicio
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/aboutus">
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Nosotros
                    </DropdownMenuLabel>

                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/tech">
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Radius Tech
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/analytics">
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Radius Analytics
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/blog">
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Blog
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/contact">
                  <DropdownMenuItem>
                    <DropdownMenuLabel className="hover:opacity-80 rounded-lg">
                      Contacto
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;