import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import SignUpSection from '../sections/SignUpSection'

const LoginView: React.FC = () => {
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Sign Up"/>
    <SignUpSection/>
    <FooterSection/>
    </>
  )
}

export default LoginView