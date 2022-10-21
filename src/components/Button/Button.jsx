import React from 'react'
import style from './Button.module.scss'

export const Button = ({type, children}) => {
  const btnBase = "btn-base";
  return (
    <button type={type} className={`${btnBase} ${style.btn} ${style.btnPrimary}`}>{children}</button>
  )
}
