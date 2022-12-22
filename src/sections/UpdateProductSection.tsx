import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { ProductItem } from '../models/ProductModels'


interface UpdateProductType {
  item: ProductItem
}



const UpdateProductSection: React.FC<UpdateProductType> = () => {
  const [updateProduct, setUpdateProduct] = useState<boolean>(false)
  const [updateFailed, setUpdateFailed] = useState<boolean>(false)


    const handleUpdateProduct = async (e: React.FormEvent) => {
      e.preventDefault()
      setUpdateProduct(false)
      setUpdateFailed(false)



    const result = await fetch(`http://localhost:5000/api/products/update`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })

    if (result.status === 200) {
      setUpdateProduct(true)
    } else {
        setUpdateProduct(false)
        setUpdateFailed(true)
      }

  }


    return (
      <>
      <section className='updateProduct'>
        <div className='container'>

          {updateProduct ? (<FormNotification notificationType='success' title='Product updated' text=''/>) : (<></>)}
          {updateFailed ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't update the product - please try again later!"/>) : (<></>)}

          <form onSubmit={handleUpdateProduct} noValidate>
            <div>
              <img src={item.imageName} />    
            </div>
            <h3>Product name</h3>
            <input id="name" value={item.name} onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={item.name}/>
            <h3>Description</h3>
            <input id="description" value={item.description} onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={item.description}/> 
            <h3>Price</h3>
            <input id="price" value={item.price} onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={String(item.price)}/> 
            <h3>Category</h3>
            <input id="category" value={item.category}  onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={item.category}/>  
            <h3>Tag</h3>
            <input id="tag" value={item.tag} onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={item.tag}/> 
            <h3>Image name</h3>
            <input id="imageName" value={item.imageName} onChange={(e) => handleUpdateProduct(e)} type='text' placeholder={item.imageName}/> 
            <h3>Rating, 1-5</h3>
            <input id="rating" value={item.rating} onChange={(e) => handleUpdateProduct(e)} type='number' placeholder={String(item.rating)} /> 

            <button type='submit'>UPDATE PRODUCT</button>

          </form>
        </div>
      </section>
      </>
    )
  }

export default UpdateProductSection