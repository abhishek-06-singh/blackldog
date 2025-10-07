'use client'
import React from 'react'
import Image from 'next/image'
import key from '../../../components/icons/Lightmode_icons/help/key.svg'
import plus from '../../../components/icons/Lightmode_icons/help/plus.svg'
import Handshaking from '../../../components/icons/Lightmode_icons/help/Handshake.svg'
import parag from '../../../components/icons/Lightmode_icons/help/parag.svg'
import mobile from '../../../components/icons/Lightmode_icons/help/mobile.svg'

const articles = [
  { icon: <Image src={key} alt="key" className='w-4 h-4 md:w-5 md:h-5' />, title: 'How to reset your password' },
  { icon: <Image src={plus} alt="plus" className='w-4 h-4 md:w-5 md:h-5' />, title: 'How to add a new listing' },
  { icon: <Image src={Handshaking} alt="Handshaking" className='w-4 h-4 md:w-5 md:h-5' />, title: 'What is the referral system?' },
  { icon: <Image src={parag} alt="parag" className='w-4 h-4 md:w-5 md:h-5' />, title: 'Understanding commission tracking' },
  { icon: <Image src={mobile} alt="mobile" className='w-4 h-4 md:w-5 md:h-5' />, title: 'Using the mobile app' },
]

export default function PopularArticles() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-sm md:text-base font-semibold text-textnormal mb-6">Popular Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-bordercolor rounded-md pl-2 md:px-4 py-4 bg-cardbg shadow hover:shadow-shadow transition"
          >
            <div className="text-textnormal">{article.icon}</div>
            <span className="text-xs md:text-sm text-textnormal">{article.title}</span>
          </div>
        ))}

        {/* Repeat for second column */}
        {articles.map((article, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 border border-bordercolor rounded-md pl-2 md:px-4 py-4 bg-cardbg shadow hover:shadow-shadow transition"
          >
            <div className="text-textnormal">{article.icon}</div>
            <span className="text-xs md:text-sm text-textnormal">{article.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
