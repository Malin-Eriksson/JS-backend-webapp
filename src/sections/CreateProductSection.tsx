import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { validatePrice, validateRating, validateText } from '../scripts/validation'

interface CreateProductType {

    name: string,
    description?: string,
    price: number,
    category: string,
    tag?: string, 
    imageName: string,
    rating?: number    
}



const CreateProductSection: React.FC = () => {
    const createProduct_default: CreateProductType = { name: '', description: '', price: 0, category: '', tag: '', imageName: '', rating: 0 }
    const [createProductData, setCreateProductData] = useState<CreateProductType>(createProduct_default)
    const [createProductErrors, setCreateProductErrors] = useState<CreateProductType>(createProduct_default)
    const [createProductSubmitted, setCreateProductSubmitted] = useState<boolean>(false)
    const [failedCreateSubmit, setCreateFailedSubmit] = useState<boolean>(false)

    const handleCreateProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {id, value} = e.target
      setCreateProductData({...createProductData, [id]: value})
  
      if (id === 'name')
        setCreateProductErrors({...createProductErrors, [id]: validateText(id, value)})

      if (id === 'description')
        setCreateProductErrors({...createProductErrors, [id]: validateText(id, value)})

      if (id === 'price')
        setCreateProductErrors({...createProductErrors, [id]: validatePrice(id)})

      if (id === 'category')
        setCreateProductErrors({...createProductErrors, [id]: validateText(id, value)})

      if (id === 'tag')
        setCreateProductErrors({...createProductErrors, [id]: validateText(id, value)})

      if (id === 'imageName')
        setCreateProductErrors({...createProductErrors, [id]: validateText(id, value)})
        
      if (id === 'rating')
        setCreateProductErrors({...createProductErrors, [id]: validateRating(id, value)})


    }

    const handleCreateProduct = async (e: React.FormEvent) => {
      e.preventDefault()
      setCreateProductSubmitted(false)
      setCreateFailedSubmit(false)

      if (createProductData.name !== '' && createProductData.description !== '' && createProductData.price !== 0 && createProductData.category !== '' && createProductData.tag !== '' && createProductData.imageName !== '' && createProductData.rating !== 0)
        if (createProductErrors.name === '' && createProductErrors.description === '' && createProductErrors.price === 0 && createProductErrors.category === '' && createProductErrors.tag === '' && createProductErrors.imageName === '' && createProductErrors.rating === 0) {

          const result = await fetch('http://localhost:5000/api/authentication/create', {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
        
            })
          })

          if (result.status === 200) {
              setCreateProductSubmitted(true)
              setCreateProductData(createProduct_default)
          } else {
              setCreateProductSubmitted(false)
              setCreateFailedSubmit(true)
          }

          const data = await result.json()
          console.log(data)
        }
      }
    
    return (
      <section className="createProduct">
      <div className="container">
        
        {createProductSubmitted ? (<FormNotification notificationType='success' title='Your account has been registered!' text=''/>) : (<></>)}
        {failedCreateSubmit ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't create an account right now - please try again later"/>) : (<></>)}
        
        <h2>EMPLOYEE SIGN UP</h2>
        <form onSubmit={handleCreateProduct} noValidate>
          <div>
            <input id="name" className={(createProductErrors?.name ? 'error': '')} value={createProductData.name} onChange={(e) => handleCreateProductChange(e)} type="text" placeholder="Product name" />
            <div className="errorMessage">{createProductErrors?.name}</div>
          </div>
          <div>
            <input id="description" className={(createProductErrors?.description ? 'error': '')} value={createProductData.description} onChange={(e) => handleCreateProductChange(e)} type="text" placeholder="Description" />
            <div className="errorMessage">{createProductErrors?.description}</div>
          </div>
          <div>
            <input id="price" className={(createProductErrors?.price ? 'error': '')} value={createProductData.price} onChange={(e) => handleCreateProductChange(e)} type="number" placeholder="Price" />
            <div className="errorMessage">{createProductErrors?.price}</div>
          </div>
          <div>
            <input id="category" className={(createProductErrors?.category ? 'error': '')} value={createProductData.category} onChange={(e) => handleCreateProductChange(e)} type="text" placeholder="Category" />
            <div className="errorMessage">{createProductErrors?.category}</div>
          </div>
          <div>
            <input id="tag" className={(createProductErrors?.tag ? 'error': '')} value={createProductData.tag} onChange={(e) => handleCreateProductChange(e)} type="text" placeholder="Tag" />
            <div className="errorMessage">{createProductErrors?.tag}</div>
          </div>
          <div>
            <input id="imageName" className={(createProductErrors?.imageName ? 'error': '')} value={createProductData.imageName} onChange={(e) => handleCreateProductChange(e)} type="text" placeholder="Image name" />
            <div className="errorMessage">{createProductErrors?.imageName}</div>
          </div>
          <div>
            <input id="rating" className={(createProductErrors?.rating ? 'error': '')} value={createProductData.rating} onChange={(e) => handleCreateProductChange(e)} type="number" placeholder="Rating, 1-5" />
            <div className="errorMessage">{createProductErrors?.rating}</div>
          </div>

          <div className="formBtn">
            <button type="submit" className="btn-theme">CREATE NEW PRODUCT</button>
          </div>
        </form>    
      </div>
    </section>
    
  )
}

export default CreateProductSection

