import React from 'react'
import ContactForm from '../components/contact-page/ContactForm'
import NavSocial from '../components/contact-page/NavSocial'
import NavPages from '../components/nav-bar/NavPages'

const Footer = () => (
  <div className="footer">
    <NavPages className="contact-bar" />
    <ContactForm />
    <NavSocial />
  </div>
)

export default Footer
