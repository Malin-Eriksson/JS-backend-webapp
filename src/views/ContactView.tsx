import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactForm from '../sections/ContactFormSection'


const ContactView: React.FC = () => {
// window.top.document.title = "Contact | Fixxo."

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contact"/>
      <MapSection />
      <ContactForm />
      <FooterSection/>
    </>


  )
}

export default ContactView