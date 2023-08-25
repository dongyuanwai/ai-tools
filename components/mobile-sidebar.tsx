"use client";
import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger,SheetContent } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';

function MobileSidebar() {
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon"
                className='md:hidden'>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className='p-0'>
            <Sidebar></Sidebar>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar