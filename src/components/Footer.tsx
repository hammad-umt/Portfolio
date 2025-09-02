import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-900 px-6 py-10 shadow rounded-lg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Hammad&apos;s Portfolio</h1>
          <p className="text-base leading-relaxed">
            Thank you for visiting my personal portfolio website.  
            Connect with me over socials.  
            <br />Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-base">
            <li><a href="#home" className="hover:underline hover:text-black">Home</a></li>
            <li><a href="#about" className="hover:underline hover:text-black">About</a></li>
            <li><a href="#skills" className="hover:underline hover:text-black">Skills</a></li>
            <li><a href="#education" className="hover:underline hover:text-black">Education</a></li>
            <li><a href="#work" className="hover:underline hover:text-black">Work</a></li>
            <li><a href="#contact" className="hover:underline hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <p className="flex items-center justify-center md:justify-start text-base mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-green-700 mr-2" /> +92 334 9711129
          </p>
          <p className="flex items-center justify-center md:justify-start text-base mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-700 mr-2" /> hammadurrehmanse@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-base mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-700 mr-2" /> Lahore, Pakistan
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4 text-2xl">
            <a href="https://github.com/hammad-umt" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/hammad-ur-rehman-b36b8229b/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/hmad.kh.k" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/hammad._.khattak/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-800 mt-10 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} Made with ❤️ by Hammad Ur Rehman
      </div>
    </footer>
  )
}

export default Footer
