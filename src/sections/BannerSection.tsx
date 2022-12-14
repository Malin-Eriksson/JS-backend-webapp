import React from 'react'
import { NavLink } from 'react-router-dom'
import bannerImgLeft from '../assets/images/banner1.svg'
import bannerImgRight from '../assets/images/banner-2.svg'

const BannerSection: React.FC = () => {
  return (
    <section className="banners container">
        <div className="banner-1">
            <img src={bannerImgLeft} alt="banner-img-1"/>
            <div className="title-1">
                <h1>Pamela Reif's Top Picks</h1>
                <NavLink className="btn-theme" to={''}>
                    <span className="btn-theme-left"></span>
                        SHOP NOW
                    <span className="btn-theme-right"></span>
                </NavLink>
            </div>
        </div>
        <div className="banner-2">
            <img src={bannerImgRight} alt="banner-img-1"/>
            <div className="title-2">
                <h1>Let's Be <br/>Conscious</h1>
                <NavLink className="btn-theme" to={''}>
                    <span className="btn-theme-left"></span>
                    FLASH SALE
                    <span className="btn-theme-right"></span>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default BannerSection