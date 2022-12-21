import React from 'react'
import { ProductItem } from '../models/ProductModels'
import { currencyFormatter } from '../components/utilities/currencyFormatter'




interface ProductDetailsType {
  item: ProductItem
}

const ProductDetailsSection: React.FC<ProductDetailsType> = ({item}) => {
  return (
    <section className='product-details'>
      <div className='container'>
        <div>
          <img src={item.imageName} />
        </div>
        <div>
          <h3>{item.name}</h3>
          <p>Article number: {item.articleNumber}</p>
          <p>{item.tag}</p>
          <p>{item.description}</p>
          <p>{currencyFormatter(item.price)}</p>
          <p>{item.rating}</p>
        </div>
      </div>
    </section>
  )
}


export default ProductDetailsSection

