'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import MainNavbar from '../app/components/navbar/MainNavbar'
import Footer from './components/common/Footer'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '../../context/AuthContext'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()

  const hideLayoutRoutes = [
    '/',
    '/signin',
    '/forgetpassword',
    '/payment',
    '/newpassword/reset-password',
    '/newpassword',
    '/agentdocs',
    '/agencydocs',
    '/agentagencysignup',
    '/signin/verify-email',
    '/approvalform',
    '/rejectform',
    '/keyfeatures',
    '/pricing',
    '/contact',
    '/aboutus',
  ]

  // hide layout if route is in hideLayoutRoutes OR contains "dashboard"
  const hideLayout =
    hideLayoutRoutes.includes(pathname) || pathname.includes('dashboard')

  return (
  
    <ThemeProvider attribute="class"  defaultTheme="light"    
          enableSystem={false} >
    <div className="min-h-screen bg-background">
      {!hideLayout && <MainNavbar />}
      <AuthProvider>
        {children}
      </AuthProvider>
      {!hideLayout && <Footer />}
    </div></ThemeProvider>
    
  )
}
