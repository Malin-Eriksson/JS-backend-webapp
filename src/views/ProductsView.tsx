import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView: React.FC = () => {
  const {products, getAllProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView