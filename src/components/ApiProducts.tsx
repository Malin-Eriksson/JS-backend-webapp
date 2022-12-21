import React from 'react'
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
        <MenuIcon link={'/delete/' + item.articleNumber} icon="fa-regular fa-trash" />
        <MenuIcon link={'/update/' + item.articleNumber }icon="fa-regular fa-wrench" />
    </div>
    </div> 
    </>
  )
}

export default ApiProducts