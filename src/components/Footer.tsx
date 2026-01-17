'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return
      const rect = footerRef.current.getBoundingClientRect()
      // check if footer is visible in viewport
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
      setShowTop(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <footer
        ref={footerRef}
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-900 px-6 py-16 shadow-xl relative border-t-2 border-indigo-200"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Branding */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Hammad</h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Full-stack developer creating beautiful and functional web experiences. Let&apos;s build something amazing together! 🚀
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="https://github.com/hammad-umt" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://www.facebook.com/hmad.kh.k" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.instagram.com/hammad._.khattak/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-slate-900 border-b-2 border-indigo-300 pb-2 inline-block">Navigation</h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ Home</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ About</a></li>
              <li><a href="#skills" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ Skills</a></li>
              <li><a href="#education" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ Education</a></li>
              <li><a href="#projects" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ Projects</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block">→ Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-slate-900 border-b-2 border-indigo-300 pb-2 inline-block">Get In Touch</h2>
            <div className="space-y-3 text-sm">
              <p className="flex items-start justify-center md:justify-start gap-3 text-slate-600">
                <FontAwesomeIcon icon={faPhone} className="text-indigo-600 mt-1 flex-shrink-0" />
                <a href="tel:+923349711129" className="hover:text-indigo-600 transition-colors">+92 334 9711129</a>
              </p>
              <p className="flex items-start justify-center md:justify-start gap-3 text-slate-600">
                <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 mt-1 flex-shrink-0" />
                <a href="mailto:hammadurrehmanse@gmail.com" className="hover:text-indigo-600 transition-colors">hammadurrehmanse@gmail.com</a>
              </p>
              <p className="flex items-start justify-center md:justify-start gap-3 text-slate-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 mt-1 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-slate-600 mt-12 pt-8 border-t border-slate-200">
          <p className="mb-2">&copy; {new Date().getFullYear()} Hammad Ur Rehman. All rights reserved.</p>
          <p className="text-slate-500">Made with <span className="text-pink-500">❤️</span> and lots of <span className="text-yellow-500">☕</span></p>
        </div>
      </footer>

      {/* Back to Top: visible only when footer is on screen */}
      {showTop && (
        <button 
          onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}         
          aria-label="Back to top"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white w-12 h-12
                     flex items-center justify-center rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-300/50
                     hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
        </button>
      )}
    </>
  )
}

export default Footer
