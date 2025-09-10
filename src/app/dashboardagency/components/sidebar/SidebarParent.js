'use client'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useState } from 'react'

export default function SidebarParent({
  label,
  icon,
  children,
  open,
  onClick,
  isCollapsed,
}) {
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  // Check if any child's href matches or is a prefix of current pathname
  const childArray = Array.isArray(children) ? children : [children]
  const childActive = childArray.some(
    (child) =>
      pathname === child.props.href ||
      pathname.startsWith(child.props.href + '/')
  )

  const isActive = open || childActive

  const showFloating = isCollapsed && (hovered || open)

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Parent button */}
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full px-3 py-3 rounded-md transition
          ${
            isActive
              ? 'bg-gradient-to-r from-[#EDB887] to-transparent text-textnormal text-sm'
              : 'text-textnormal text-sm'
          }`}
      >
        <span className="flex items-center gap-3">
          {icon} {label}
        </span>
        {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </button>

      {/* Children (expanded or floating) */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key={label} // important for switching tabs animation
            className="ml-6 mt-1 space-y-1 text-sm relative"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="absolute left-1 top-1 bottom-3 w-px bg-gray-300"></div>
            {childArray.map((child, index) => {
              const active =
                pathname === child.props.href ||
                pathname.startsWith(child.props.href + '/')
              return (
                <div key={index} className="flex items-center gap-2 relative">
                  <span
                    className={`w-2 h-2 rounded-full z-10 relative top-2 ${
                      active ? 'bg-[#EDB887]' : 'bg-textnormal'
                    }`}
                  ></span>
                  <div className="flex-1 mt-2">{child}</div>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
