"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { CurrentUser } from "@/types/userType";
import { logout } from "@/services/logout";
import { useRouter } from "next/navigation";

// Navigation links organized in an array
const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Dropdown menu options
const dropdownOptions = [
  {
    label: "Profile",
    href: "/profile",
    action: "profile",
  },

  {
    label: "Dashboard",
    href: "/docs",
    action: "dashboard",
  },
  {
    label: "Logout",
    href: "/logout",
    action: "logout",
  },
];

export function Navbar({ currentUser }: { currentUser: CurrentUser }) {
  const router = useRouter();
  const handleUserMenuAction = async (action: string) => {
    if (action === "profile") router.push("my-profile");

    if (action === "dashboard") {
      if (currentUser.role === "CUSTOMER") {
        router.push("/customer-dashboard");
      } else if (currentUser.role === "TECHNICIAN") {
        router.push("/technician-dashboard");
      } else if (currentUser.role === "ADMIN") {
        router.push("/admin-dashboard");
      }

      return;
    }

    if (action === "logout") {
      await logout();
      router.push("/login");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
            >
              FixItNow
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" border px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center shrink-0">
            {currentUser?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {dropdownOptions.map((option, index) => (
                    <div key={option.href}>
                      <DropdownMenuItem
                        onClick={() => handleUserMenuAction(option.action)}
                        asChild
                      >
                        <span className="cursor-pointer">{option.label}</span>
                      </DropdownMenuItem>
                      {index === 1 && <DropdownMenuSeparator />}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                className=" border px-3 py-2 rounded-md text-sm font-medium hover:text-foreground hover:bg-background bg-primary text-accent transition-colors"
                href="/login"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {currentUser?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {dropdownOptions.map((option, index) => (
                    <div key={option.href}>
                      <DropdownMenuItem
                        onClick={() => handleUserMenuAction(option.action)}
                        asChild
                      >
                        <span className="cursor-pointer">{option.label}</span>
                      </DropdownMenuItem>
                      {index === 1 && <DropdownMenuSeparator />}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                className=" border px-3 py-2 rounded-md text-sm font-medium hover:text-foreground hover:bg-background bg-primary text-accent transition-colors"
                href="/login"
              >
                Login
              </Link>
            )}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="" asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="cursor-pointer"
                >
                  <Menu className="h-5 w-5 " />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8 ml-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-blue-800 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
