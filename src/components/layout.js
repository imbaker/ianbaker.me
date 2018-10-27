import styles from './layout.module.css'

import React from 'react' // eslint-disable-line no-unused-vars
import Header from '../components/header'

// Palette
// Dark Goldenrod #B1740F
// Topaz #FFD07B
// Sunglow #FDB833
// Green-Blue #296EB4
// Dodger Blue #1789FC
// https://coolors.co/b1740f-ffd07b-fdb833-296eb4-1789fc

export default (props) => (
  <div className={styles.container}>
    <Header subTitle={ props.subTitle } />
    {props.children}
  </div>
)
