"use client";

import "@/styles/globals.css"
import { Fragment, useEffect, useState } from "react"
// import { Metadata } from "next"
import { Transition } from "@headlessui/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SideBar from "@/components/layout/side-bar"
import { TopBar } from "@/components/layout/top-bar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      addEventListener("resize", handleResize)
    }

    return () => {
      removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <TopBar showNav={showNav} setShowNav={setShowNav} />
              <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-300 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <SideBar items={siteConfig.mainNav} showNav={showNav} />
              </Transition>
              <main
                className={`pt-8 transition-all duration-300 ${
                  showNav && !isMobile ? "pl-56" : ""
                }`}
              >
                <div className="px-4 md:px-16">{children}</div>
              </main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
