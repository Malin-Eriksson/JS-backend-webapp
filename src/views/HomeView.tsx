import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerSection from '../sections/BannerSection'
import ProductDisplaySection1 from '../sections/ProductDisplaySection1'
import ProductDisplaySection2 from '../sections/ProductDisplaySection2'
import ShopInfoSection from '../sections/ShopInfoSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'



const HomeView: React.FC = () => {
  const {featuredProducts, getFeatured, productDisplay1, productDisplay2, getDisplay1, getDisplay2} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
  }, [])

  useEffect(() => {
    getDisplay1(4)
  }, [])

  useEffect(() => {
    getDisplay2(4)
  }, [])


    return (
      <>
        <section className='gradient-grey'><MainMenuSection /></section>
        <ShowcaseSection />
        <FeaturedProductsSection title="Featured Products" items={featuredProducts}/>
        <BannerSection />
        <ProductDisplaySection1 title="2 FOR USD $29" items={productDisplay1}/>
        <ProductDisplaySection2 title="2 FOR USD $49" items={productDisplay2}/>     
        <ShopInfoSection />
        <FooterSection />
      </>
      
    )
}


export default HomeView