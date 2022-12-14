import React from 'react'
import { NavLink } from 'react-router-dom'

interface MenuIconType {
  link: string,
  icon: string,
  quantity?: string, 
  hideMobile?: string
}

const MenuIcon: React.FC<MenuIconType> = ({link, icon, quantity, hideMobile}) => {
  return (
    <NavLink className={`menu-icon ${hideMobile ? "hidden" : ""}`}  to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon