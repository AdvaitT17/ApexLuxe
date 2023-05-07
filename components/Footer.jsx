import React from 'react'
import Image from 'next/image'
import logo from '../src/assets/Logo.png'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          <Image src={logo} width={180} height={30} alt='logo' />
          <p>Fashion that speaks for itself. Your go-to destination for fashion-forward clothing.</p>
          <div className='icon-container'>
            <div><GrTwitter size={20} /></div>
            <div><GrFacebookOption size={20} /></div>
            <div><GrLinkedinOption size={20} /></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Center</li>
            <li>Live Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Get In Touch</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2023 Apex LUXE</p>
        <p>Code by. <span>Advait Thakur & Sumit Tiwari on GitHub</span></p>
      </div>
    </footer>
  )
}

export default Footer
