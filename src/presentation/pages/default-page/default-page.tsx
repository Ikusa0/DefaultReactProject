import { ReactIcon } from '@/presentation/images'
import React from 'react'
import Styles from './default-page-styles.scss'

type PropsType = {
  value: string
}

const DefaultPage: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div className={Styles.defaultPage}>
      <span className={Styles.title}>{props.value}</span>
      <ReactIcon className={Styles.icon} />
      <span className={Styles.description}>A starter project to build up React Applications</span>
    </div>
  )
}

export default DefaultPage
