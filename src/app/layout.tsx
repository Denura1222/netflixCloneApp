"use client"
import './globals.css'
import ToasterProvider from './providers/ToasterProvider'
import type { Metadata } from 'next'
import LoginModal from './auth/components/loginModal'
import RegisterModal from './auth/components/registerModal'
import Provider from './providers/provider'


export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <ToasterProvider/>
        {children}
        </Provider>
     
      </body>
    </html>
  )
}
