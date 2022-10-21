import React from 'react'
import { Button } from '../Button/Button'
import style from './Hero.module.scss'
import '../../styles/components/_card.scss'

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className="container mb-50">
        <div className={style.hero__wrapper}>
          <div className='mb-50'>
            <h3 className={style.hero__title}>Helloo Hero</h3>
            <Button type="button">My Button</Button>
          </div>
          <div className='CARD | card p-50'>
            <h3 className={style.hero__title}>Helloo Hero</h3>
            <Button type="button">My Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
