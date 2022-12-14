import React from 'react'
import customerSupportImg from "../assets/images/customer-support-icon.svg"
import securePaymentImg from "../assets/images/secured-payment-icon.svg"
import deliveryImg from "../assets/images/delivery-icon.svg"

const ShopInfoSection: React.FC = () => {
  return (
    <section className="container">
    <hr/>
    <div className="shop-info container">
        <div className="shop-info-box">
            <img src={customerSupportImg} alt="customer-support-icon"/>
            <h1>Customer support</h1>
            <p>Village did removed enjoyed<br/> explain talking.</p>
        </div>
        <div className="shop-info-box">
            <img src={securePaymentImg} alt="secured-payment-icon"/>
            <h1>Secured payment</h1>
            <p>Village did removed enjoyed<br/> explain talking.</p>
        </div>
        <div className="shop-info-box">
            <img src={deliveryImg} alt="delivery-icon"/>
            <h1>Free home delivery</h1>
            <p>Village did removed enjoyed<br/> explain talking.</p>
        </div>
        <div className="shop-info-box">
            <img src={deliveryImg} alt="delivery-icon"/>
            <h1>30 day returns</h1>
            <p>Village did removed enjoyed<br/> explain talking.</p>
        </div>
    </div>
</section>
  )
}

export default ShopInfoSection