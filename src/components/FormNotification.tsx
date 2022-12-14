import React from 'react'


interface FormNotificationType {
  notificationType: string,
  title: string,
  text: string
}

const FormNotification: React.FC<FormNotificationType> = ({notificationType = "warning", title, text}) => {
  return (
    <div className={`alert alert-${notificationType} text-center`} role="alert">
        <h3>{title}</h3> 
        <p>{text}</p>
      </div> 
  )
}

export default FormNotification