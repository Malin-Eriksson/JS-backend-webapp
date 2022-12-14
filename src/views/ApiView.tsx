import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ApiSection from '../sections/ApiSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ApiView: React.FC = () => {

    const {products, getAllProducts} = useProductContext() as ProductContextType
  
    useEffect(() => {
      getAllProducts()
    }, [])
  

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="API"/>
    <ApiSection title="Products" items={products}/>
    <FooterSection />
  </>
  )
}

export default ApiView