import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const {product, getProduct} = useProductContext() as ProductContextType 
      
useEffect(() => {
  getProduct(id)

}, [])

  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection parentPage="Products" currentPage={product.name}/>
        <ProductDetailsSection item={product}/>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView



