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
                href="/dashboardinvitedbyagency/invitedbyagency"
                label="Dashboard"
                icon={<DashboardIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/listings"
                label="Listings"
                icon={<ListAltIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/listings')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/team"
                label="Team"
                icon={<GroupIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/team')}
              />

              <SidebarParent
                label="Leads"
                icon={<PersonIcon />}
                open={open.leads}
                onClick={() => toggleMenu('leads')}
              >
                <SidebarLink
                  href="/dashboardinvitedbyagency/invitedbyagency/leads/opportunity-pipeline"
                  label="Opportunity Pipeline"
                  active={isActive('/dashboardinvitedbyagency/invitedbyagency/leads/opportunity-pipeline')}
                />
              </SidebarParent>

              <SidebarParent
                label="Deals"
                icon={<LocalOfferIcon />}
                open={open.deals}
                onClick={() => toggleMenu('deals')}
              >
                <SidebarLink
                  href="/dashboardinvitedbyagency/invitedbyagency/deals/deal-history"
                  label="Deal History"
                  active={isActive('/dashboardinvitedbyagency/invitedbyagency/deals/deal-history')}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/contacts"
                label="Contacts"
                icon={<ContactsIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/contacts')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/commissions"
                label="Commissions"
                icon={<PaidIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/commissions')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/documents"
                label="Documents"
                icon={<DescriptionIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/documents')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/messages"
                label="Messages"
                icon={<MessageIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/messages')}
              />

              {/* <SidebarParent
                label="Subscription & Billing"
                icon={<WorkspacePremiumIcon />}
                open={open.subscription}
                onClick={() => toggleMenu('subscription')}
              >
                <SidebarLink
                  href="/dashboardinvitedbyagency/invitedbyagency/subscription/upgrade-change-plan"
                  label="Upgrade / Change Plan"
                  active={isActive(
                    '/dashboardinvitedbyagency/invitedbyagency/subscription/upgrade-change-plan'
                  )}
                />
                <SidebarLink
                  href="/dashboardinvitedbyagency/invitedbyagency/subscription/billing-history"
                  label="Billing History"
                  active={isActive(
                    '/dashboardinvitedbyagency/invitedbyagency/subscription/billing-history'
                  )}
                />
                
              </SidebarParent> */}

              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/reports-analytics"
                label="Reports & Analytics"
                icon={<BarChartIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/reports-analytics')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/settings"
                label="Settings"
                icon={<SettingsIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/settings')}
              />
              <SidebarLink
                href="/dashboardinvitedbyagency/invitedbyagency/help-center"
                label="Help Center"
                icon={<HelpOutlineIcon />}
                active={isActive('/dashboardinvitedbyagency/invitedbyagency/help-center')}
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
