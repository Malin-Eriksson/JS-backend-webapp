import React, {useState} from 'react'
import { validateSignUpEmail, validatePassword } from '../scripts/validation'
import FormNotification from '../components/FormNotification'
import { NavLink } from 'react-router-dom'

interface LoginDataType {
    signUpEmail: string,
    password: string    
  }

  const LoginSection: React.FC = () => {
    const loginForm_default: LoginDataType = { signUpEmail: '', password: '' } 
    const [loginFormData, setLoginFormData] = useState<LoginDataType>(loginForm_default)
    const [loginErrors, setLoginErrors] = useState<LoginDataType>(loginForm_default)
    const [loginSubmitted, setLoginSubmitted] = useState<boolean>(false)
    const [failedLoginSubmit, setLoginFailedSubmit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setLoginFormData({...loginFormData, [id]: value})
    
        if (id === 'signUpEmail')
        setLoginErrors({...loginErrors, [id]: validateSignUpEmail(value)})

        if (id === 'password')
        setLoginErrors({...loginErrors, [id]: validatePassword(value)})
    }
   
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoginSubmitted(false)
        setLoginFailedSubmit(false)
  
        if (loginFormData.signUpEmail !== '' && loginFormData.password !== '')
          if (loginErrors.signUpEmail === '' && loginErrors.password === '') {
  
            const result = await fetch('http://localhost:5000/api/authentication/login', {
              method: 'post',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                email: loginFormData.signUpEmail,
                password: loginFormData.password
              })
            })

            if (result.status === 200) {
                setLoginSubmitted(true)
                setLoginFormData(loginForm_default)
            } else {
                setLoginSubmitted(false)
                setLoginFailedSubmit(true)
            }

            const data = await result.json()
            console.log(data.accessToken)
            localStorage.setItem('accessToken', data.accessToken)
          }    
      }


  return (
    <section className="loginForm">
      <div className="container">
        
        {loginSubmitted ? (<FormNotification notificationType='success' title='You are logged in!' text=''/>) : (<></>)}
        {failedLoginSubmit ? (<FormNotification notificationType='danger' title='Something went wrong!' text="We couln't access your account right now - please try again later"/>) : (<></>)}
        
        <h2>LOGIN</h2>
        <form onSubmit={handleSignUp} noValidate>
          <div>
            <input id="signUpEmail" className={(loginErrors?.signUpEmail ? 'error': '')} value={loginFormData.signUpEmail} onChange={(e) => handleChange(e)} type="email" placeholder="Your e-mail address" />
            <div className="errorMessage">{loginErrors?.signUpEmail}</div>
          </div>
          <div>
            <input id="password" className={(loginErrors?.password ? 'error': '')} value={loginFormData.password} onChange={(e) => handleChange(e)} type="password" placeholder="Password" />
            <div className="errorMessage">{loginErrors?.password}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">LOG IN</button>
          </div>
        </form> 
        <div className='newUser'>
        <h3>New user? Create an employee account</h3>
        <NavLink className="btn-newUser" to='/signup'> HERE!</NavLink>
        </div>
      </div>
    </section>
  )
}

export default LoginSection