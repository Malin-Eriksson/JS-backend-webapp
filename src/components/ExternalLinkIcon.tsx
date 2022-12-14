import React from 'react'

interface LinkIconType {
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<LinkIconType> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon