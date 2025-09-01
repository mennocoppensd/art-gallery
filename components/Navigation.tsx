'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaInstagram, FaFacebook, FaEnvelope, FaChevronDown } from 'react-icons/fa'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-poppins font-bold text-2xl text-gray-800 tracking-wide">
          <span className="hidden md:inline">Menno Coppens d&apos;Eeckenbrugge</span>
          <span className="md:hidden">Menno</span>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium">About</Link>
          
          {/* Desktop: Show icons */}
          <div className="hidden md:flex space-x-3">
            <Link href="mailto:menno.coppens@telenet.be" className="text-gray-800 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaEnvelope className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/mennocoppensd" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/Mennocoppensd/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaFacebook className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile: Show Contact dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-gray-600 flex items-center space-x-1 p-3 rounded hover:bg-gray-100 transition-colors touch-manipulation font-medium"
              aria-label="Contact options"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Contact</span>
              <FaChevronDown className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                <Link 
                  href="mailto:menno.coppens@telenet.be" 
                  className="flex items-center justify-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaEnvelope className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.instagram.com/mennocoppensd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.facebook.com/Mennocoppensd/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaFacebook className="h-5 w-5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
