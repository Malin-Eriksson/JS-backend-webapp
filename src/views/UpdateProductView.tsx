import React from 'react'
import { useParams } from 'react-router-dom'
import ProductContext, { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import UpdateProductSection from '../sections/UpdateProductSection'

const UpdateProductView: React.FC = () => {

  const {id} = useParams()
  const { product, getProduct} = useProductContext() as ProductContextType

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage='Update product' />
    <UpdateProductSection />
    <FooterSection />
    </>
  )
}

export default UpdateProductView