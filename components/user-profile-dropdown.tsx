"use client";

import { useState } from "react";
import type * as React from "react";
import Link from "next/link";
import { Bookmark, LogOut, Settings, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SettingsDialog } from "./settings-dialog";
import { useRouter } from "next/navigation";

interface UserProfileDropdownProps {
  trigger: React.ReactNode;
}

export function UserProfileDropdown({ trigger }: UserProfileDropdownProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-64 pb-4' align='end' sideOffset={5}>
          <div className='flex items-center gap-3 p-3'>
            <Avatar className='h-10 w-10'>
              <AvatarImage src='/user.jpg' alt='User' />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className='flex flex-1 flex-col'>
              <div className='flex items-center gap-1'>
                <span className='text-sm font-medium'>Arjun Mazumder</span>
                <button className='text-muted-foreground hover:text-foreground'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 20h9' />
                    <path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' />
                  </svg>
                </button>
              </div>
              <span className='text-xs text-muted-foreground'>
                arjun01@gmail.com
              </span>
            </div>
          </div>

          <DropdownMenuSeparator />

          <div className='p-2'>
            <Button
              variant='outline'
              onClick={() => router.push("/subscription")}
              className='w-full justify-between bg-[#F99F04] hover:bg-[#f99f04d7] text-white hover:text-gray-50 rounded-full'
            >
              <span>Upgrade Plan</span>
              <ExternalLink className='ml-2 h-4 w-4' />
            </Button>
          </div>
          <div className='p-2'>
            <div className='w-max rounded-full bg-[#F99F04] hover:bg-[#f99f04d7]  px-3 py-2'>
              <span className='text-sm font-medium text-white'>Credits: 0</span>
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className='ml-3'>
            <Link
              href='/bookmarks'
              className='flex cursor-pointer items-center gap-2'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 16 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.19961 4.41744C6.32738 3.99277 5.36973 3.77278 4.39961 3.77424C3.39561 3.77424 2.44521 4.00624 1.59961 4.41744V12.4174C2.47185 11.9928 3.42949 11.7728 4.39961 11.7742C5.73481 11.7742 6.97401 12.1822 7.99961 12.8822C9.06047 12.1584 10.3154 11.7722 11.5996 11.7742C12.6036 11.7742 13.554 12.0062 14.3996 12.4174V4.41744C13.5274 3.99277 12.5697 3.77278 11.5996 3.77424C10.5956 3.77424 9.64521 4.00624 8.79961 4.41744V10.1742C8.79961 10.3864 8.71532 10.5899 8.56529 10.7399C8.41527 10.89 8.21178 10.9742 7.99961 10.9742C7.78744 10.9742 7.58395 10.89 7.43392 10.7399C7.2839 10.5899 7.19961 10.3864 7.19961 10.1742V4.41744Z'
                  fill='#20474E'
                />
              </svg>

              <span>Bookmark</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='ml-3'
            onSelect={(e) => {
              e.preventDefault();
              setSettingsOpen(true);
            }}
          >
            <div className='flex cursor-pointer items-center gap-2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 20 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11.4897 3.74422C11.1097 2.18422 8.88975 2.18422 8.50975 3.74422C8.45302 3.97863 8.34174 4.19634 8.18497 4.37963C8.02821 4.56292 7.83038 4.7066 7.60759 4.79899C7.38481 4.89138 7.14336 4.92986 6.90289 4.91131C6.66242 4.89276 6.42973 4.81769 6.22375 4.69222C4.85175 3.85622 3.28175 5.42622 4.11775 6.79822C4.65775 7.68422 4.17875 8.84022 3.17075 9.08522C1.60975 9.46422 1.60975 11.6852 3.17075 12.0632C3.40523 12.12 3.62298 12.2314 3.80626 12.3883C3.98955 12.5452 4.13319 12.7431 4.22549 12.966C4.31779 13.1889 4.35614 13.4305 4.33742 13.671C4.3187 13.9116 4.24343 14.1443 4.11775 14.3502C3.28175 15.7222 4.85175 17.2922 6.22375 16.4562C6.42969 16.3305 6.6624 16.2553 6.90293 16.2365C7.14347 16.2178 7.38502 16.2562 7.60793 16.3485C7.83084 16.4408 8.02879 16.5844 8.18568 16.7677C8.34256 16.951 8.45394 17.1687 8.51075 17.4032C8.88975 18.9642 11.1108 18.9642 11.4888 17.4032C11.5457 17.1689 11.6572 16.9513 11.8142 16.7681C11.9711 16.5849 12.169 16.4414 12.3918 16.3491C12.6147 16.2568 12.8561 16.2185 13.0966 16.2371C13.3371 16.2557 13.5698 16.3308 13.7758 16.4562C15.1477 17.2922 16.7178 15.7222 15.8818 14.3502C15.7563 14.1442 15.6812 13.9115 15.6626 13.6711C15.644 13.4306 15.6824 13.1891 15.7747 12.9663C15.8669 12.7435 16.0105 12.5455 16.1936 12.3886C16.3768 12.2317 16.5944 12.1202 16.8288 12.0632C18.3898 11.6842 18.3898 9.46322 16.8288 9.08522C16.5943 9.02841 16.3765 8.91703 16.1932 8.76015C16.01 8.60326 15.8663 8.4053 15.774 8.1824C15.6817 7.95949 15.6434 7.71794 15.6621 7.4774C15.6808 7.23687 15.7561 7.00416 15.8818 6.79822C16.7178 5.42622 15.1477 3.85622 13.7758 4.69222C13.5698 4.8179 13.3371 4.89317 13.0966 4.91189C12.856 4.93061 12.6145 4.89226 12.3916 4.79996C12.1687 4.70766 11.9707 4.56402 11.8138 4.38073C11.6569 4.19744 11.5456 3.9797 11.4888 3.74522L11.4897 3.74422ZM9.99975 13.5742C10.7954 13.5742 11.5585 13.2581 12.1211 12.6955C12.6837 12.1329 12.9998 11.3699 12.9998 10.5742C12.9998 9.77857 12.6837 9.01551 12.1211 8.4529C11.5585 7.89029 10.7954 7.57422 9.99975 7.57422C9.2041 7.57422 8.44104 7.89029 7.87843 8.4529C7.31582 9.01551 6.99975 9.77857 6.99975 10.5742C6.99975 11.3699 7.31582 12.1329 7.87843 12.6955C8.44104 13.2581 9.2041 13.5742 9.99975 13.5742Z'
                  fill='#20474E'
                />
              </svg>

              <span>Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='ml-3'>
            <Link
              href='/sign-out'
              className='flex cursor-pointer items-center gap-2'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 20 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.16667 13.9075L5.83333 10.5742M5.83333 10.5742L9.16667 7.24086M5.83333 10.5742H17.5M13.3333 13.9075V14.7409C13.3333 15.4039 13.0699 16.0398 12.6011 16.5086C12.1323 16.9775 11.4964 17.2409 10.8333 17.2409H5C4.33696 17.2409 3.70107 16.9775 3.23223 16.5086C2.76339 16.0398 2.5 15.4039 2.5 14.7409V6.40753C2.5 5.74449 2.76339 5.10861 3.23223 4.63976C3.70107 4.17092 4.33696 3.90753 5 3.90753H10.8333C11.4964 3.90753 12.1323 4.17092 12.6011 4.63976C13.0699 5.10861 13.3333 5.74449 13.3333 6.40753V7.24086'
                  stroke='#20474E'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <span>Sign Out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
}
