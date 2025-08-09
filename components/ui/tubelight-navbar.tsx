"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("")

  // Scroll detection to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => {
        const id = item.url.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            name: item.name,
            top: rect.top,
            bottom: rect.bottom,
            element
          }
        }
        return null
      }).filter(Boolean)

      // Find which section is currently in view
      const viewportHeight = window.innerHeight
      let currentSection = sections.find(section => {
        if (section) {
          // Section is considered active if its top is above middle of viewport
          // and its bottom is below middle of viewport
          return section.top <= viewportHeight / 2 && section.bottom >= viewportHeight / 2
        }
        return false
      })

      // If no section is in the middle, find the closest one to the top
      if (!currentSection) {
        currentSection = sections.reduce((closest, section) => {
          if (!section) return closest
          if (!closest) return section
          
          const sectionDistance = Math.abs(section.top)
          const closestDistance = Math.abs(closest.top)
          
          return sectionDistance < closestDistance ? section : closest
        }, null)
      }

      if (currentSection) {
        setActiveTab(currentSection.name)
      } else if (sections.length > 0 && sections[0]) {
        // Default to first section if nothing else matches
        setActiveTab(sections[0].name)
      }
    }

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)

    // Smooth scroll to section
    const targetId = item.url.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed bottom-4 md:bottom-auto md:top-4 left-0 right-0 flex justify-center z-30",
        className,
      )}
    >
      <div className="flex items-center gap-4 bg-background/5 border border-border backdrop-blur-lg py-1 px-4 rounded-full shadow-lg w-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}