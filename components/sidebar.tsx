"use client";
import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { 
  Code,
  ImageIcon, 
  LayoutDashboard, 
  MessageSquare, 
  Music, 
  Settings, 
  VideoIcon 
} from 'lucide-react';
const montserrat = Montserrat({
  weight:"600",
  subsets:["latin"]
});
const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/coversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-500',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-500',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]
const Slidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full
    bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        {/* logo */}
        <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="logo"
              src="/logo.png"
            ></Image>
          </div>
          <h1 className={cn("text-2xl font-old",montserrat.className)}>AI Tools</h1>
        </Link>
        {/* 路由 */}
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link  
              href={route.href}
              key={route.href}
              className='text-sm flex p-3 w-fulljustify-start font-medium cursor-pointer
              hover:text-white hover:bg-white/10 rounded-lg transition '
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn("w-6 h-6 mr-3",route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slidebar