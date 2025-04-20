"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

interface DocsContainerProps {
  children?: ReactNode
}

interface Component {
  name: string
  href: string
  description?: string
}

const DocsContainer: FC<DocsContainerProps> = ({ children }) => {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  const components: Component[] = [
    {
      name: "MacBook Scroll",
      href: "/docs/macbook-scroll",
      description: "A realistic MacBook scrolling interface component",
    },
    {
      name: "Text Animate",
      href: "/docs/text-animate",
      description: "Beautiful text animations with various effects",
    },
    {
      name: "Aurora Text",
      href: "/docs/aurora-text",
      description: "Text with mesmerizing gradient animations",
    },
    // Add more components as they are created
  ]

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-12 gap-8 md:gap-24">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="sticky top-24 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold dark:text-white bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
            >
              Documentation
            </motion.h3>

            {/* Search box */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </div>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-200 bg-white pl-10 pr-4 py-2 text-sm text-neutral-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-purple-500"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Getting Started
              </h4>
              <ul className="space-y-1">
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/docs"
                    className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                      pathname === "/docs"
                        ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 font-medium text-purple-700 dark:from-purple-500/20 dark:to-blue-500/20 dark:text-purple-400"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-purple-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-purple-400"
                    }`}
                  >
                    {pathname === "/docs" && (
                      <motion.span
                        className="absolute inset-0 rounded-md"
                        layoutId="activeSection"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    Introduction
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/docs/installation"
                    className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                      pathname === "/docs/installation"
                        ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 font-medium text-purple-700 dark:from-purple-500/20 dark:to-blue-500/20 dark:text-purple-400"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-purple-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-purple-400"
                    }`}
                  >
                    {pathname === "/docs/installation" && (
                      <motion.span
                        className="absolute inset-0 rounded-md"
                        layoutId="activeSection"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    Installation
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Components
              </h4>
              <ul className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {filteredComponents.map((component) => (
                  <motion.li
                    key={component.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={component.href}
                      className={`relative block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                        pathname === component.href
                          ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 font-medium text-purple-700 dark:from-purple-500/20 dark:to-blue-500/20 dark:text-purple-400"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-purple-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-purple-400"
                      }`}
                    >
                      {pathname === component.href && (
                        <motion.span
                          className="absolute inset-0 rounded-md"
                          layoutId="activeComponent"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                      <div className="relative z-10">
                        <div>{component.name}</div>
                        {component.description && (
                          <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                            {component.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-9 lg:col-span-10"
        >
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            {children}
          </div>
        </motion.div>
      </div>

    
    </div>
  )
}

export default DocsContainer
