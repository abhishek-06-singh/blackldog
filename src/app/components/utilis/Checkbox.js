'use client'
import React from 'react'
import { Checkbox as AntdCheckbox, ConfigProvider, theme as antdTheme } from 'antd'
import { useTheme } from 'next-themes' // works if you're using next-themes for dark mode

export default function ThemedCheckbox({ id, label, checked, onChange }) {
  const { theme } = useTheme() // 'light' | 'dark' | 'system'

  const isDarkMode = theme === 'dark'

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#000',
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#000',
            colorText: '#fff', 
            colorTextActive: '#000',
          },
          Checkbox: {
            colorPrimary: '#000',
            colorPrimaryHover: '#000',
            borderRadiusSM: 4,
            controlInteractiveSize: 18,
          },
        },
      }}
    >
      <AntdCheckbox
        id={id}
        checked={checked}
        onChange={onChange}
      >
        {label && (
          <span className="text-xs md:text-sm text-textnormal select-none">
            {label}
          </span>
        )}
      </AntdCheckbox>
    </ConfigProvider>
  )
}
