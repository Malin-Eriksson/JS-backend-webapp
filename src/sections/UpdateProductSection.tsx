import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { ProductItem } from '../models/ProductModels'

interface UpdateProductType {
  item: ProductItem
}

export const UpdateProductSection: React.FC<UpdateProductType> = ({item}) => {
  const [updateProduct, setUpdateProduct] = useState<boolean>(false)
  const [updateProductFailed, setUpdateProductFailed] = useState<boolean>(false)





    const handleUpdateProduct = async (e: any) => {
      e.preventDefault()
      setUpdateProduct(false)
      setUpdateProductFailed(false)
      
      


      const product = {
        articleNumber: e.target[0].value,
        name: e.target[1].value,
        description: e.target[2].value,
        price: e.target[3].value,
        category: e.target[4].value,
        tag: e.target[5].value,
        imageName: e.target[6].value,
        rating: e.target[7].value
      }

    
      console.log(product);



    const result = await fetch(`http://localhost:5000/api/products/update/${item.articleNumber}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(product)
    })

    const data = await result.json()
    console.log(data)

    if (result.status === 201) {
      setUpdateProduct(true)
    } else {
      setUpdateProduct(false)
      setUpdateProductFailed(true)
    }
  }

  



    return (
      <>
      <section className='updateProduct'>
        <div className='container'>

          {updateProduct ? (<FormNotification notificationType='success' title='Product updated' text=''/>) : (<></>)}
          {updateProductFailed ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't update the product - please try again later!"/>) : (<></>)}

          <form onSubmit={handleUpdateProduct} noValidate>
            <div>
              <img src={item.imageName} alt='product'/>    
            </div>
            <h3>Article number</h3>
            <input type='text' className='form-control' defaultValue={item.articleNumber} />
            <h3>Product name</h3>
            <input type='text' className='form-control' defaultValue={item.name} />
            <h3>Description</h3>
            <input type='text' className='form-control' defaultValue={item.description}  /> 
            <h3>Price</h3>
            <input type='text' className='form-control' defaultValue={item.price} /> 
            <h3>Category</h3>
            <input type='text' className='form-control'defaultValue={item.category}  />  
            <h3>Tag</h3>
            <input type='text' className='form-control' defaultValue={item.tag} /> 
            <h3>Image name</h3>
            <input className='form-control' type='text' defaultValue={item.imageName}  /> 
            <h3>Rating, 1-5</h3>
            <input className='form-control' type='number' defaultValue={item.rating} /> 

            <button type='submit'>UPDATE PRODUCT</button>

          </form>
        </div>
      </section>
      </>
    )
  }
  

export default UpdateProductSection