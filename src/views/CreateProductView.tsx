import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
// import CreateProductSection from '../sections/CreateProductSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const CreateProductView: React.FC = () => {
  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection currentPage='Create new product'/>
   
    <FooterSection/>
    </>
  )
}

export default CreateProductView