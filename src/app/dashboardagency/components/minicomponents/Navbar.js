'use client'

import { useState } from 'react'
import UserDropdown from './UserDropdown'
import { Bell } from 'lucide-react'
import Button from './Button'
import ThemeMode from '../../../components/common/ThemeMode'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }
  const handleNotificationsClick = () => {
    router.push('/dashboardagency/agency/notifications')
  }

  return (
    <div className="mt-0 w-full flex items-center border-b border-bordercolor p-2 md:p-4 lg:p-4 bg-background">
     <div className='hidden md:block'>
      <ThemeMode />
      </div>
      {/* Right-side buttons wrapper */}
      <div className="ml-auto flex items-center gap-4">
        <Button className="hidden lg:block text-textnormal bg-background border border-textnormal hover:bg-opacity-90 hover:scale-105 active:scale-95 hover:shadow-lg text-xs md:text-md lg:text-sm ">
          Explore Properties
        </Button>

        {/* Notification Bell */}
        <div className="relative">
          <Button
            onClick={handleNotificationsClick}
            className="text-textnormal bg-background border border-textnormal hover:bg-opacity-90 hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            <Bell className="w-5 h-5 md:w-5 md:h-5 lg:w-6 ld:h-6" />
          </Button>
          {/* Red Dot Notification */}
          <span className="absolute -top-1 right-[0.02rem] w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        {/* User Dropdown */}
        <UserDropdown
         className="flex items-center gap-2 text-[11px] font-medium whitespace-nowrap sm:text-xs md:text-sm lg:text-base !bg-transparent"
          userImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          userName="Sliver Oak"
          isOpen={openDropdown === 'userMenu'}
          toggleDropdown={toggleDropdown}
          dropdownKey="userMenu"
        >
      <button className="block w-full text-left px-1 md:px-2 py-1 lg:px-4 lg:py-2 hover:bg-secondary hover:text-background">
            Profile
          </button>
          <button className="block w-full text-left px-1 md:px-2 py-1 lg:px-4 lg:py-2 hover:bg-secondary hover:text-background">
            Settings
          </button>
          <button className="block w-full text-left px-1 md:px-2 py-1 lg:px-4 lg:py-2 hover:bg-secondary hover:text-background">  
            Logout
          </button>
          <button className="block lg:hidden w-full px-1 text-left md:px-2 py-1 lg:px-4 lg:py-2 hover:bg-secondary hover:text-background">
           Explore Properties
          </button>
          <button className="block md:hidden w-full px-1 text-left md:px-2 py-1 lg:px-4 lg:py-2 hover:bg-secondary hover:text-background">
           <ThemeMode />
          </button>
        </UserDropdown>
      </div>
    </div>
  )
}
