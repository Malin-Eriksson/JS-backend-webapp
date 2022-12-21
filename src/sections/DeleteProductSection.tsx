import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { currencyFormatter } from '../components/utilities/currencyFormatter'
import { ProductItem } from '../models/ProductModels'

interface DeleteProductType {
  item: ProductItem
}

const DeleteProductSection: React.FC<DeleteProductType> = ({item}) => {

  const [deleteProduct, setDeleteProduct] = useState<boolean>(false)
  const [deletefailed, setDeleteFailed] = useState<boolean>(false)

  const handleDeleteProduct = async (_id: string) => {
    setDeleteProduct(false)
    setDeleteFailed(false)
  


    const result = await fetch(`http://localhost:5000/api/products/${_id}`, {
            method: 'delete',
            headers: {
              'Content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })

          if (result.status === 200) {
            setDeleteProduct(true)
        } else {
            setDeleteProduct(false)
            setDeleteFailed(true)
        }

        }

  return (
    <section className='deleteProduct'>
    <div className='container'>

    {deleteProduct ? (<FormNotification notificationType='success' title='Product deleted' text=''/>) : (<></>)}
    {deletefailed ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't delete the product - please try again later!"/>) : (<></>)}


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
      <button onClick={() => handleDeleteProduct(item.articleNumber)}>DELETE PRODUCT</button>
      </form>
    </div>
    </section>
  )
}


export default DeleteProductSection