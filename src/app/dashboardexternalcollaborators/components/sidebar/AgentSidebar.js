'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// MUI Icons (safe now because client component)
import DashboardIcon from '@mui/icons-material/Dashboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import ContactsIcon from '@mui/icons-material/Contacts'
import PaidIcon from '@mui/icons-material/Paid'
import DescriptionIcon from '@mui/icons-material/Description'
import MessageIcon from '@mui/icons-material/Message'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeIcon from './ThemeIcon'

// Sidebar components
import SidebarLink from './SidebarLink'
import SidebarParent from './SidebarParent'

export default function AgentSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState({
    leads: false,
    deals: false,
    subscription: false,
  })
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const toggleMenu = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (href) => pathname === href

  return (
    <>
      <AnimatePresence>
        {sidebarVisible && (
          <motion.aside
            className=" w-72 h-screen overflow-y-auto bg-background text-textnormal border-r p-4 relative"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-textnormal hover:text-gray-900"
              onClick={() => setSidebarVisible(false)}
            >
              <MenuOpenIcon />
            </button>

            <h2 className="text-lg font-bold mb-6">Agent Panel</h2>

            <nav className="space-y-2">
              <SidebarLink
                href="/dashboardexternalcollaborators/external-collaborators"
                label="Dashboard"
                icon={<DashboardIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators'
                )}
              />
              <SidebarLink
                href="/dashboardexternalcollaborators/external-collaborators/sharedlistings"
                label="Shared Listings"
                icon={<ListAltIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators/sharedlistings'
                )}
              />

              <SidebarLink
                href="/dashboardexternalcollaborators/external-collaborators/myaccess"
                label="My Access"
                icon={<DescriptionIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators/myaccess'
                )}
              />
              <SidebarLink
                href="/dashboardexternalcollaborators/external-collaborators/messages"
                label="Messages"
                icon={<MessageIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators/messages'
                )}
              />

              <SidebarLink
                href="/dashboardexternalcollaborators/external-collaborators/settings"
                label="Settings"
                icon={<SettingsIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators/settings'
                )}
              />
              <SidebarLink
                href="/dashboard/agent/help-center"
                label="Help Center"
                icon={<HelpOutlineIcon />}
                active={isActive(
                  '/dashboardexternalcollaborators/external-collaborators/help-center'
                )}
              />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {!sidebarVisible && (
        <button
          className=" fixed top-4 left-4 z-50 bg-background border rounded-full p-2 shadow"
          onClick={() => setSidebarVisible(true)}
        >
          <MenuIcon />
        </button>
      )}
    </>
  )
}
