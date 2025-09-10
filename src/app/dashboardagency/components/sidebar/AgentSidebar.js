'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// MUI Icons (safe now because client component)
import DashboardagencyIcon from '@mui/icons-material/Dashboardagency'
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

            <h2 className="text-lg font-bold mb-6">Agency Panel</h2>

            <nav className="space-y-2">
              <SidebarLink
                href="/dashboardagency/agency"
                label="Dashboard"
                icon={<DashboardIcon />}
                active={isActive('/dashboardagency/agency')}
              />
              <SidebarLink
                href="/dashboardagency/agency/listings"
                label="Listings"
                icon={<ListAltIcon />}
                active={isActive('/dashboardagency/agency/listings')}
              />
              <SidebarLink
                href="/dashboardagency/agency/team"
                label="Team"
                icon={<GroupIcon />}
                active={isActive('/dashboardagency/agency/team')}
              />

              <SidebarParent
                label="Leads"
                icon={<PersonIcon />}
                open={open.leads}
                onClick={() => toggleMenu('leads')}
              >
                <SidebarLink
                  href="/dashboardagency/agency/leads/opportunity-pipeline"
                  label="Opportunity Pipeline"
                  active={isActive('/dashboardagency/agency/leads/opportunity-pipeline')}
                />
              </SidebarParent>

              <SidebarParent
                label="Deals"
                icon={<LocalOfferIcon />}
                open={open.deals}
                onClick={() => toggleMenu('deals')}
              >
                <SidebarLink
                  href="/dashboardagency/agency/deals/deal-history"
                  label="Deal History"
                  active={isActive('/dashboardagency/agency/deals/deal-history')}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboardagency/agency/contacts"
                label="Contacts"
                icon={<ContactsIcon />}
                active={isActive('/dashboardagency/agency/contacts')}
              />
              <SidebarLink
                href="/dashboardagency/agency/commissions"
                label="Commissions"
                icon={<PaidIcon />}
                active={isActive('/dashboardagency/agency/commissions')}
              />
              <SidebarLink
                href="/dashboardagency/agency/documents"
                label="Documents"
                icon={<DescriptionIcon />}
                active={isActive('/dashboardagency/agency/documents')}
              />
              <SidebarLink
                href="/dashboardagency/agency/messages"
                label="Messages"
                icon={<MessageIcon />}
                active={isActive('/dashboardagency/agency/messages')}
              />

              <SidebarParent
                label="Subscription & Billing"
                icon={<WorkspacePremiumIcon />}
                open={open.subscription}
                onClick={() => toggleMenu('subscription')}
              >
                <SidebarLink
                  href="/dashboardagency/agency/subscription/upgrade-change-plan"
                  label="Upgrade / Change Plan"
                  active={isActive(
                    '/dashboardagency/agency/subscription/upgrade-change-plan'
                  )}
                />
                <SidebarLink
                  href="/dashboardagency/agency/subscription/billing-history"
                  label="Billing History"
                  active={isActive(
                    '/dashboardagency/agency/subscription/billing-history'
                  )}
                />
                <SidebarLink
                  href="/dashboardagency/agency/subscription/enterprise-enquiry"
                  label="Enterprise Enquiry"
                  active={isActive(
                    '/dashboardagency/agency/subscription/enterprise-enquiry'
                  )}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboardagency/agency/reports-analytics"
                label="Reports & Analytics"
                icon={<BarChartIcon />}
                active={isActive('/dashboardagency/agency/reports-analytics')}
              />
              <SidebarLink
                href="/dashboardagency/agency/settings"
                label="Settings"
                icon={<SettingsIcon />}
                active={isActive('/dashboardagency/agency/settings')}
              />
              <SidebarLink
                href="/dashboardagency/agency/help-center"
                label="Help Center"
                icon={<HelpOutlineIcon />}
                active={isActive('/dashboardagency/agency/help-center')}
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
