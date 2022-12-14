import React, {useState} from 'react'
import { validateSignUpEmail, validatePassword } from '../scripts/validation'
import FormNotification from '../components/FormNotification'
import { NavLink } from 'react-router-dom'

interface LoginDataType {
    signUpEmail: string,
    password: string    
  }

  const LoginSection: React.FC = () => {
    const signUpForm_default: LoginDataType = { signUpEmail: '', password: '' } 
    const [signUpFormData, setSignUpFormData] = useState<LoginDataType>(signUpForm_default)
    const [signUpErrors, setSignUpErrors] = useState<LoginDataType>(signUpForm_default)
    const [signUpsubmitted, setSignUpSubmitted] = useState<boolean>(false)
    const [failedSignUpSubmit, setSignUpFailedSubmit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setSignUpFormData({...signUpFormData, [id]: value})
    
        if (id === 'signUpEmail')
        setSignUpErrors({...signUpErrors, [id]: validateSignUpEmail(value)})

        if (id === 'password')
        setSignUpErrors({...signUpErrors, [id]: validatePassword(value)})
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setSignUpSubmitted(false)
        setSignUpFailedSubmit(false)
  
        if (signUpFormData.signUpEmail !== '' && signUpFormData.password !== '')
          if (signUpErrors.signUpEmail === '' && signUpErrors.password === '') {
  
            const result = await fetch('https://win22.webapi.azurewebsites.net/api/login', {
              method: 'post',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(signUpFormData)
            })

            if (result.status === 200) {
                setSignUpSubmitted(true)
                setSignUpFormData(signUpForm_default)
            } else {
                setSignUpSubmitted(false)
                setSignUpFailedSubmit(true)
            }

            const data = await result.json()
            console.log(data.accessToken)
            localStorage.setItem('accessToken', data.accessToken)
          }    
      }


  return (
    <section className="signUpForm">
      <div className="container">
        
        {signUpsubmitted ? (<FormNotification notificationType='success' title='You are logged in!' text=''/>) : (<></>)}
        {failedSignUpSubmit ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't access your account right now - please try again later"/>) : (<></>)}
        
        <h2>LOGIN</h2>
        <form onSubmit={handleSignUp} noValidate>
          <div>
            <input id="signUpEmail" className={(signUpErrors?.signUpEmail ? 'error': '')} value={signUpFormData.signUpEmail} onChange={(e) => handleChange(e)} type="email" placeholder="Your e-mail address" />
            <div className="errorMessage">{signUpErrors?.signUpEmail}</div>
          </div>
          <div>
            <input id="password" className={(signUpErrors?.password ? 'error': '')} value={signUpFormData.password} onChange={(e) => handleChange(e)} type="password" placeholder="Password" />
            <div className="errorMessage">{signUpErrors?.password}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">LOG IN</button>
          </div>
        </form> 
        <NavLink className="btn-theme" to='/signup'>New user? Create an employee account here!</NavLink>
      </div>
    </section>
  )
}

export default LoginSection