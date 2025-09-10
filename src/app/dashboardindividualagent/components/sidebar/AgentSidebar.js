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
                href="/dashboardindividualagent/subagentindividualagent"
                label="Dashboard"
                icon={<DashboardIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent')}
              />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/listings"
                label="Listings"
                icon={<ListAltIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/listings')}
              />
             

              <SidebarParent
                label="Leads"
                icon={<PersonIcon />}
                open={open.leads}
                onClick={() => toggleMenu('leads')}
              >
                <SidebarLink
                  href="/dashboardindividualagent/subagentindividualagent/leads/opportunity-pipeline"
                  label="Opportunity Pipeline"
                  active={isActive('/dashboardindividualagent/subagentindividualagent/leads/opportunity-pipeline')}
                />
              </SidebarParent>

              <SidebarParent
                label="Deals"
                icon={<LocalOfferIcon />}
                open={open.deals}
                onClick={() => toggleMenu('deals')}
              >
                <SidebarLink
                  href="/dashboardindividualagent/subagentindividualagent/deals/deal-history"
                  label="Deal History"
                  active={isActive('/dashboardindividualagent/subagentindividualagent/deals/deal-history')}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/contacts"
                label="Contacts"
                icon={<ContactsIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/contacts')}
              />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/commissions"
                label="Commissions"
                icon={<PaidIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/commissions')}
              />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/documents"
                label="Documents"
                icon={<DescriptionIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/documents')}
              />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/messages"
                label="Messages"
                icon={<MessageIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/messages')}
              />

              <SidebarParent
                label="Subscription & Billing"
                icon={<WorkspacePremiumIcon />}
                open={open.subscription}
                onClick={() => toggleMenu('subscription')}
              >
                <SidebarLink
                  href="/dashboardindividualagent/subagentindividualagent/subscription/upgrade-change-plan"
                  label="Upgrade / Change Plan"
                  active={isActive(
                    '/dashboardindividualagent/subagentindividualagent/subscription/upgrade-change-plan'
                  )}
                />
                <SidebarLink
                  href="/dashboardindividualagent/subagentindividualagent/subscription/billing-history"
                  label="Billing History"
                  active={isActive(
                    '/dashboardindividualagent/subagentindividualagent/subscription/billing-history'
                  )}
                />
                
              </SidebarParent>

              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/reports-analytics"
                label="Reports & Analytics"
                icon={<BarChartIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/reports-analytics')}
              />
               <SidebarLink
          href="/dashboardindividualagent/subagentindividualagent/parentagent"
          label="Parent Agent"
          icon={<ThemeIcon name="Parent" />}
          active={pathname.startsWith(
            '/dashboardindividualagent/subagentindividualagent/parentagent'
          )}
        />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/settings"
                label="Settings"
                icon={<SettingsIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/settings')}
              />
              <SidebarLink
                href="/dashboardindividualagent/subagentindividualagent/help-center"
                label="Help Center"
                icon={<HelpOutlineIcon />}
                active={isActive('/dashboardindividualagent/subagentindividualagent/help-center')}
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
