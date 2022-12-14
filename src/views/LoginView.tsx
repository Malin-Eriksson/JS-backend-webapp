import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import LoginSection from '../sections/SignUpSection'

const LoginView: React.FC = () => {
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Login"/>
    <LoginSection />
    <FooterSection/>
    </>
  )
}

export default LoginView