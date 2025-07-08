"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0F2544]/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-[#06D001]" />
          <span className="text-2xl font-bold text-white">
            Supervision<span className="text-[#06D001]">.</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white">
          {["Home", "Services", "Products", "About Us"].map((item) => (
            <Link 
              key={item}
              href={`/#${item.toLowerCase().replace(" ", "-")}`} 
              className="text-sm font-medium relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#06D001] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="text-white border-white/20 hover:bg-white/10 hover:text-[#06D001] transition-all"
            asChild
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button 
            className="bg-[#06D001] hover:bg-[#06D001]/90 text-white transition-all"
            asChild
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F2544]/98 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-4 text-white">
              {["Home", "Services", "Products", "About Us"].map((item) => (
                <Link 
                  key={item}
                  href={`/#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-base py-2 px-4 hover:bg-white/5 rounded-md transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Button 
                variant="outline" 
                className="text-white border-white/20 w-full"
                asChild
              >
                <Link href="/login">Log In</Link>
              </Button>
              <Button 
                className="bg-[#06D001] hover:bg-[#06D001]/90 w-full"
                asChild
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}