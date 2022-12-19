import React, {useState} from 'react'
import { validateFirstName, validateLastName, validateSignUpEmail, validatePassword } from '../scripts/validation'
import FormNotification from '../components/FormNotification'

interface SignUpFormDataType {
    firstName: string,
    lastName: string,
    signUpEmail: string,
    password: string    
  }

  const SignUpSection: React.FC = () => {
    const signUpForm_default: SignUpFormDataType = { firstName: '', lastName: '', signUpEmail: '', password: '' } 
    const [signUpFormData, setSignUpFormData] = useState<SignUpFormDataType>(signUpForm_default)
    const [signUpErrors, setSignUpErrors] = useState<SignUpFormDataType>(signUpForm_default)
    const [signUpSubmitted, setSignUpSubmitted] = useState<boolean>(false)
    const [failedSignUpSubmit, setSignUpFailedSubmit] = useState<boolean>(false)

    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setSignUpFormData({...signUpFormData, [id]: value})
    
        if (id === 'firstName')
        setSignUpErrors({...signUpErrors, [id]: validateFirstName(value)})

        if (id === 'lastName')
        setSignUpErrors({...signUpErrors, [id]: validateLastName(value)})
    
        if (id === 'signUpEmail')
        setSignUpErrors({...signUpErrors, [id]: validateSignUpEmail(value)})

        if (id === 'password')
        setSignUpErrors({...signUpErrors, [id]: validatePassword(value)})
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setSignUpSubmitted(false)
        setSignUpFailedSubmit(false)
  
        if (signUpFormData.firstName !== '' && signUpFormData.lastName !== '' && signUpFormData.signUpEmail !== '' && signUpFormData.password !== '')
          if (signUpErrors.firstName === '' && signUpErrors.lastName === '' && signUpErrors.signUpEmail === '' && signUpErrors.password === '') {
  
            const result = await fetch('http://localhost:5000/api/authentication/signup', {
              method: 'post',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                firstName: signUpFormData.firstName,
                lastName: signUpFormData.lastName,
                email: signUpFormData.signUpEmail,
                password: signUpFormData.password
              })
            })

            if (result.status === 201) {
                setSignUpSubmitted(true)
                setSignUpFormData(signUpForm_default)
            } else {
                setSignUpSubmitted(false)
                setSignUpFailedSubmit(true)
            }

            const data = await result.json()
            console.log(data)
          }    
      }


  return (
    <section className="signUpForm">
      <div className="container">
        
        {signUpSubmitted ? (<FormNotification notificationType='success' title='Your account has been registered!' text=''/>) : (<></>)}
        {failedSignUpSubmit ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't create an account right now - please try again later"/>) : (<></>)}
        
        <h2>EMPLOYEE SIGN UP</h2>
        <form onSubmit={handleSignUp} noValidate>
          <div>
            <input id="firstName" className={(signUpErrors?.firstName ? 'error': '')} value={signUpFormData.firstName} onChange={(e) => handleSignUpChange(e)} type="text" placeholder="Your first name" />
            <div className="errorMessage">{signUpErrors?.firstName}</div>
          </div>
          <div>
            <input id="lastName" className={(signUpErrors?.lastName ? 'error': '')} value={signUpFormData.lastName} onChange={(e) => handleSignUpChange(e)} type="text" placeholder="Your last name" />
            <div className="errorMessage">{signUpErrors?.lastName}</div>
          </div>
          <div>
            <input id="signUpEmail" className={(signUpErrors?.signUpEmail ? 'error': '')} value={signUpFormData.signUpEmail} onChange={(e) => handleSignUpChange(e)} type="email" placeholder="Your e-mail address" />
            <div className="errorMessage">{signUpErrors?.signUpEmail}</div>
          </div>
          <div>
            <input id="password" className={(signUpErrors?.password ? 'error': '')} value={signUpFormData.password} onChange={(e) => handleSignUpChange(e)} type="password" placeholder="Password" />
            <div className="errorMessage">{signUpErrors?.password}</div>
          </div>

          <div className="formBtn">
            <button type="submit" className="btn-theme">SIGN UP</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default SignUpSection