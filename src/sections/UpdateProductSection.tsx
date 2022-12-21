import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { currencyFormatter } from '../components/utilities/currencyFormatter'
import { ProductItem } from '../models/ProductModels'

interface UpdateProductType {
  item: ProductItem
}

const UpdateProductSection: React.FC<UpdateProductType> = ({item}) => {

  const [updateProduct, setUpdateProduct] = useState<boolean>(false)
  const [updateFailed, setUpdateFailed] = useState<boolean>(false)

  const handleDeleteProduct = async (_id: string) => {
    setUpdateProduct(false)
    setUpdateFailed(false)

    if (createProductData.name !== '' && createProductData.description !== '' && createProductData.price !== 0 && createProductData.category !== '' && createProductData.tag !== '' && createProductData.imageName !== '' && createProductData.rating !== 0)

    const result = await fetch(`http://localhost:5000/api/products/update`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        name: createProductData.name,
        description: createProductData.description,
        price: createProductData.price,
        category: createProductData.category,
        tag: createProductData.tag, 
        imageName: createProductData.imageName,
        rating: createProductData.rating})
    })

    if (result.status === 200) {
      setUpdateProduct(true)
  } else {
      setUpdateProduct(false)
      setUpdateFailed(true)
  }

  }




  return (
    <section className='deleteProduct'>
    <div className='container'>

    {updateProduct ? (<FormNotification notificationType='success' title='Product updated' text=''/>) : (<></>)}
    {updateFailed ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't update the product - please try again later!"/>) : (<></>)}


      <form >
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
      <button type='submit'>UPDATE PRODUCT</button>
      </form>
    </div>
    </section>
  )
}

export default UpdateProductSection