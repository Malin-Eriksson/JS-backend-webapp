import React, { useState } from 'react'
import { idText } from 'typescript'
import FormNotification from '../components/FormNotification'
import { currencyFormatter } from '../components/utilities/currencyFormatter'
import { ProductItem } from '../models/ProductModels'

interface UpdateProductType {
item: ProductItem
}

const UpdateProductSection: React.FC<UpdateProductType> = ({item}) => {
  const [updateProduct, setUpdateProduct] = useState<boolean>(false)
  const [updateFailed, setUpdateFailed] = useState<boolean>(false)



  
  const handleUpdateProduct = async (_id: string) => {
    setUpdateProduct(false)
    setUpdateFailed(false)

    const result = await fetch(`http://localhost:5000/api/products/update`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({item})
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

          <form>
            <div>
              <img src={item.imageName} />    
            </div>
            <h3>Product name</h3>
            <input id="name" value={item.name} type='text' placeholder={item.name}/>
            <h3>Description</h3>
            <input id="description" type='text' placeholder={item.description}/> 
            <h3>Price</h3>
            <input id="price" type='text' placeholder={String(item.price)}/> 
            <h3>Category</h3>
            <input id="category" type='text' placeholder={item.category}/>  
            <h3>Tag</h3>
            <input id="tag" type='text' placeholder={item.tag}/> 
            <h3>Image name</h3>
            <input id="imageName" type='text' placeholder={item.imageName}/> 
            <h3>Rating, 1-5</h3>
            <input id="rating" type='number' placeholder={String(item.rating)}/> 

            <button onClick={() => handleUpdateProduct(item.articleNumber)}>UPDATE PRODUCT</button>

          </form>
        </div>
      </section>
      </>
    )
  }

export default UpdateProductSection