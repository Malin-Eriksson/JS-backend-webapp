import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../models/ProductModels'
import MenuIcon from './MenuIcon'
import { currencyFormatter } from './utilities/currencyFormatter'

interface ApiProductsType {
    item: ProductItem
}

const ApiProducts: React.FC<ApiProductsType> = ({item}) => {

  return (
    <>
    
    <div className="col">
    <div className='card'>  
        <div className="card-img">
          <img src={item.imageName} alt={item.name}/>
        </div>
        <div className="card-body">
            <p>Tag: {item.tag}</p>
            <p>Article number: {item.articleNumber}</p>
            <p>Product name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: {currencyFormatter(item.price)}</p>
            <p>Rating: {item.rating}</p>
            <p>Image link: {item.imageName}</p> 
        </div>
        <div className='manageProducts'>
          <NavLink to={'/delete/' + item.articleNumber} className='menu-link'> <i className='fa-regular fa-trash'></i></NavLink>
          <NavLink to={'/update/' + item.articleNumber } className='menu-link'><i className='fa-regular fa-wrench'></i></NavLink>
        </div>
    </div>
    </div> 
    </>
  )
}

export default ApiProducts