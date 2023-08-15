import React from 'react'
import styles from './Hello.module.scss'

const Hello = ({name}) => {
  return (
    <div className={styles.hello}>Hi <strong>{name}</strong>!</div>
  )
}

export default Hello