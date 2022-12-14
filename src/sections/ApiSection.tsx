import React from 'react'
import { NavLink } from 'react-router-dom'
import ApiProducts from '../components/ApiProducts'
import { ProductItem } from '../models/ProductModels'

interface ApiSectionType {
  title: string,
  items: ProductItem[]
}



const ApiSection: React.FC<ApiSectionType> = ({title, items = []}) => {
  return (
    <section className='apiSection'>
      <div className='container'>
        <NavLink className="btn-theme" to="/create">Add new product</NavLink>
      </div>
      <div className='container'>
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
            items.map( product => <ApiProducts key={product.articleNumber} item={product} />)
          }
        </div>

      </div>


    </section>
  )
}

export default ApiSection