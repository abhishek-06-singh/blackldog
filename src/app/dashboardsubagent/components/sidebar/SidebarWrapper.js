'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SidebarLink from './SidebarLink'
import SidebarParent from './SidebarParent'
import ThemeIcon from './ThemeIcon'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import LogoSection from '../../../components/navbar/navbarComponents/LogoSection'
import { Drawer } from 'antd'
import { Menu } from 'lucide-react'

export default function SidebarWrapper() {
  const router = useRouter()
  const pathname = usePathname()

  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState({
    leads: false,
    deals: false,
    subscription: false,
  })

  const toggleMenu = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleLeadsClick = () => {
    router.push('/dashboardsubagent/subagent/leads')
    toggleMenu('leads')
  }

  const handleDealsClick = () => {
    router.push('/dashboardsubagent/subagent/deals')
    toggleMenu('deals')
  }

  const handleSubscriptionClick = () => {
    router.push('/dashboardsubagent/subagent/subscription')
    toggleMenu('subscription')
  }

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsCollapsed(mobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-close sidebar on mobile navigation
  useEffect(() => {
    if (isMobile) {
      setSidebarVisible(false)
    }
  }, [pathname, isMobile])

  const sidebarContent = (
    <motion.div
      className={` h-full overflow-y-auto bg-background text-textnormal p-4 relative
        ${isCollapsed ? 'w-[300px]' : 'w-[300px]'} transition-all duration-300`}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6">
        <LogoSection />
        <button
          className="block lg:hidden text-subtext hover:text-buttonbg ml-auto"
          onClick={() => setSidebarVisible(false)}
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-[18px] mt-8">
        <SidebarLink
          href="/dashboardsubagent/subagent"
          label="Dashboard"
          icon={<ThemeIcon name="Dashboard" />}
          active={pathname === '/dashboardsubagent/subagent'}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/listings"
          label="Listings"
          icon={<ThemeIcon name="Listings" />}
          active={pathname.startsWith('/dashboardsubagent/subagent/listings')}
        />
        

        <SidebarParent
          label="Leads"
          icon={<ThemeIcon name="Leads" />}
          open={open.leads}
          onClick={handleLeadsClick}
        >
          <SidebarLink
            href="/dashboardsubagent/subagent/leads/opportunity-pipeline"
            label="Opportunity Pipeline"
            active={
              pathname ===
              '/dashboardsubagent/subagent/leads/opportunity-pipeline'
            }
          />
        </SidebarParent>

        <SidebarParent
          label="Deals"
          icon={<ThemeIcon name="Deals" />}
          open={open.deals}
          onClick={handleDealsClick}
        >
          <SidebarLink
            href="/dashboardsubagent/subagent/deals/deal-history"
            label="Deal History"
            active={
              pathname === '/dashboardsubagent/subagent/deals/deal-history'
            }
          />
        </SidebarParent>

        <SidebarLink
          href="/dashboardsubagent/subagent/contacts"
          label="Contacts"
          icon={<ThemeIcon name="Contacts" />}
          active={pathname.startsWith('/dashboardsubagent/subagent/contacts')}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/commissions"
          label="Commissions"
          icon={<ThemeIcon name="Commissions" />}
          active={pathname.startsWith(
            '/dashboardsubagent/subagent/commissions'
          )}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/documents"
          label="Documents"
          icon={<ThemeIcon name="Documents" />}
          active={pathname.startsWith('/dashboardsubagent/subagent/documents')}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/messages"
          label="Messages"
          icon={<ThemeIcon name="Messages" />}
          active={pathname.startsWith('/dashboardsubagent/subagent/messages')}
        />

        {/* <SidebarParent
          label="Subscription & Billing"
          icon={<ThemeIcon name="Subscription" />}
          open={open.subscription}
          onClick={handleSubscriptionClick}
        >
          <SidebarLink
            href="/dashboardsubagent/subagent/subscription/upgrade-change-plan"
            label="Upgrade / Change Plan"
            active={
              pathname ===
              '/dashboardsubagent/subagent/subscription/upgrade-change-plan'
            }
          />
          <SidebarLink
            href="/dashboardsubagent/subagent/subscription/billing-history"
            label="Billing History"
            active={
              pathname ===
              '/dashboardsubagent/subagent/subscription/billing-history'
            }
          />
        </SidebarParent> */}

        <SidebarLink
          href="/dashboardsubagent/subagent/reports-analytics"
          label="Reports & Analytics"
          icon={<ThemeIcon name="Reports" />}
          active={pathname.startsWith(
            '/dashboardsubagent/subagent/reports-analytics'
          )}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/parentagent"
          label="Parent Agent"
          icon={<ThemeIcon name="Parent" />}
          active={pathname.startsWith(
            '/dashboardsubagent/subagent/parentagent'
          )}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/settings"
          label="Settings"
          icon={<ThemeIcon name="Setting" />}
          active={pathname.startsWith('/dashboardsubagent/subagent/settings')}
        />
        <SidebarLink
          href="/dashboardsubagent/subagent/help-center"
          label="Help Center"
          icon={<ThemeIcon name="Help" />}
          active={pathname.startsWith(
            '/dashboardsubagent/subagent/help-center'
          )}
        />
      </nav>
    </motion.div>
  )

  return (
    <>
      {isMobile ? (
        <Drawer
          open={sidebarVisible}
          placement="left"
          onClose={() => setSidebarVisible(false)}
          closable={false}
          width={300}
          bodyStyle={{ padding: 0, background: 'var(--color-background)' }}
        >
          {sidebarContent}
        </Drawer>
      ) : (
        sidebarContent
      )}

      {/* Sidebar Toggle Button */}
      {!sidebarVisible && (
        <button
          className="block lg:hidden fixed top-1 left-2 z-50 bg-background border rounded-full p-1 shadow"
          onClick={() => setSidebarVisible(true)}
        >
          <MenuIcon />
        </button>
      )}
    </>
  )
}
