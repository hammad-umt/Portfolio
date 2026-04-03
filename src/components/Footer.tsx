'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Logo */}
        <div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Hammad. Built with Next.js & Tailwind.</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/hammad-umt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
