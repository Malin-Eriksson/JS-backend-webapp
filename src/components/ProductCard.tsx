import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext, ShoppingCartContextType } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'
import { currencyFormatter } from './utilities/currencyFormatter'

interface ProductCardType {
  item: ProductItem
}

const ProductCard: React.FC<ProductCardType> = ({item}) => {
  const { incrementQuantity }  = useShoppingCartContext() as ShoppingCartContextType
  
  
  return (
  <div className="col">
    <div className='card'>  
        <div className="card-img">
          <img src={item.imageName} alt={item.name}/>
          <div className="card-menu">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button> 
          </div>
          <NavLink to={`/products/${item.articleNumber}`} className="btn-theme">
            <span className="btn-theme-left"></span>
              QUICK VIEW
            <span className="btn-theme-right"></span>
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-category">{item.category}</p>
          <h5 className="card-title">{item.name}</h5>
          <div className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
          <p className="card-price">{currencyFormatter(item.price)}</p>
        </div>
      </div>
      </div> 
  )
}

export default ProductCard