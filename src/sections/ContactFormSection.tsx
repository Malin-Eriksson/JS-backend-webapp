import React, { useState } from 'react'
import FormNotification from '../components/FormNotification'
import { validateText, validateEmail } from '../scripts/validation'


interface FormDataType {
  name: string,
  email: string,
  comments: string
}

const ContactForm: React.FC = () => {
  const form_default_values: FormDataType = {name: '', email: '', comments: ''}
  const [formData, setFormData] = useState<FormDataType>(form_default_values)
  const [errors, setErrors] = useState<FormDataType>(form_default_values)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'name')
      setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
      setErrors({...errors, [id]: validateEmail(id, value)})
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'comments')
      setErrors({...errors, [id]: validateText(id, value, 5)})
  }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(false)
      setFailedSubmit(false)

      if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
        if (errors.name === '' && errors.email === '' && errors.comments === '') {

          const res = await fetch('https://win22.webapi.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
          })

          if (res.status === 200) {
            setSubmitted(true)
            setFormData(form_default_values)
          } else {
            setSubmitted(false)
            setFailedSubmit(true)
          }
        }    
    }
 

  return (
    <section className="contact-form">
      <div className="container">
        
        {submitted ? (<FormNotification notificationType='success' title='Thank you for your comments!' text='We will contact you as soon as possible.'/>) : (<></>)}
        {failedSubmit ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't  submit your comments right now - please try again later"/>) : (<></>)}
        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors?.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors?.name}</div>
          </div>
          <div>
            <input id="email" className={(errors?.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors?.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors?.comments ? 'error': '')} style={(errors?.comments ? {border: '1px solid #FF7373'}: {} )} value={formData.comments} onChange={(e) => handleTextareaChange(e)} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors?.comments}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactForm