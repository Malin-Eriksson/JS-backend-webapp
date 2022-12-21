import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import DeleteProductSection from '../sections/DeleteProductSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'



const DeleteProductView: React.FC = () => {
    const {id} = useParams<string>()
    const {product, getProduct} = useProductContext() as ProductContextType 
      
useEffect(() => {
  getProduct(id)

}, [])


  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection currentPage='Delete product'/>
    <DeleteProductSection item={product}/>
    <FooterSection/>
    </>
  )
}

export default DeleteProductView