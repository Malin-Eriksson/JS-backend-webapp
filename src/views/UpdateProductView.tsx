import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import UpdateProductSection from '../sections/UpdateProductSection'

const UpdateProductView: React.FC = () => {

  const {id} = useParams<string>()
  const {product, getProduct} = useProductContext() as ProductContextType 
    
useEffect(() => {
getProduct(id)

}, [])

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage='Update product' />
    <UpdateProductSection item={product}/>
    <FooterSection />
    </>
  )
}

export default UpdateProductView