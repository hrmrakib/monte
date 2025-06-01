"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  LayoutDashboard,
  BookOpen,
  History,
  LayoutGrid,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserProfileDropdown } from "./user-profile-dropdown";
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Presentation",
    href: "/presentation",
    icon: FileText,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Magazine",
    href: "/magazine",
    icon: BookOpen,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  if (
    pathname === "/create-account" ||
    pathname === "/signin" ||
    pathname === "/verify-password" ||
    pathname === "/forget-password" ||
    pathname === "/verify-otp"
  ) {
    return null;
  }

  return (
    <>
      {/* Mobile Menu Button - Fixed in the top-left corner */}
      <div className='fixed left-4 top-4 z-50 block md:hidden'>
        <SidebarTrigger className='h-10 w-10 rounded-full border bg-white shadow-sm' />
      </div>

      {/* Sidebar - Responsive for both mobile and desktop */}
      <Sidebar className='border-r'>
        <SidebarHeader className='flex items-center px-4 py-4'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.svg'
              alt='DesignDoc Logo'
              width={500}
              height={500}
            />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem
                key={item.href}
                className={`mb-2 ml-6 mr-2 rounded-full ${
                  pathname === item.href ? "" : ""
                }`}
              >
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className={
                    pathname === item.href ? "bg-black" : "text-[#20474E]"
                  }
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 text-[#20474E] transition-colors duration-200`}
                  >
                    <item.icon />
                    <span
                      // className={`text-base ${
                      //   pathname === item.href ? "text-white" : "text-[#20474E]"
                      // } group-data-[active=true]:hover:text-white`}
                      className={`text-base`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className='p-'>
          <UserProfileDropdown
            trigger={
              <button className='flex h-8 w-8 items-center justify-center outline-none rounded-md hover:bg-gray-100'>
                <svg
                  width='320'
                  height='320'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33398 7.99967C5.33398 7.29243 5.61494 6.61415 6.11503 6.11406C6.61513 5.61396 7.29341 5.33301 8.00065 5.33301H10.6673C11.3746 5.33301 12.0528 5.61396 12.5529 6.11406C13.053 6.61415 13.334 7.29243 13.334 7.99967V10.6663C13.334 11.3736 13.053 12.0519 12.5529 12.552C12.0528 13.0521 11.3746 13.333 10.6673 13.333H8.00065C7.29341 13.333 6.61513 13.0521 6.11503 12.552C5.61494 12.0519 5.33398 11.3736 5.33398 10.6663V7.99967ZM18.6673 7.99967C18.6673 7.29243 18.9483 6.61415 19.4484 6.11406C19.9485 5.61396 20.6267 5.33301 21.334 5.33301H24.0007C24.7079 5.33301 25.3862 5.61396 25.8863 6.11406C26.3864 6.61415 26.6673 7.29243 26.6673 7.99967V10.6663C26.6673 11.3736 26.3864 12.0519 25.8863 12.552C25.3862 13.0521 24.7079 13.333 24.0007 13.333H21.334C20.6267 13.333 19.9485 13.0521 19.4484 12.552C18.9483 12.0519 18.6673 11.3736 18.6673 10.6663V7.99967ZM5.33398 21.333C5.33398 20.6258 5.61494 19.9475 6.11503 19.4474C6.61513 18.9473 7.29341 18.6663 8.00065 18.6663H10.6673C11.3746 18.6663 12.0528 18.9473 12.5529 19.4474C13.053 19.9475 13.334 20.6258 13.334 21.333V23.9997C13.334 24.7069 13.053 25.3852 12.5529 25.8853C12.0528 26.3854 11.3746 26.6663 10.6673 26.6663H8.00065C7.29341 26.6663 6.61513 26.3854 6.11503 25.8853C5.61494 25.3852 5.33398 24.7069 5.33398 23.9997V21.333ZM18.6673 21.333C18.6673 20.6258 18.9483 19.9475 19.4484 19.4474C19.9485 18.9473 20.6267 18.6663 21.334 18.6663H24.0007C24.7079 18.6663 25.3862 18.9473 25.8863 19.4474C26.3864 19.9475 26.6673 20.6258 26.6673 21.333V23.9997C26.6673 24.7069 26.3864 25.3852 25.8863 25.8853C25.3862 26.3854 24.7079 26.6663 24.0007 26.6663H21.334C20.6267 26.6663 19.9485 26.3854 19.4484 25.8853C18.9483 25.3852 18.6673 24.7069 18.6673 23.9997V21.333Z'
                    stroke='#20474E'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            }
          />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
