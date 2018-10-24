import React from 'react' // eslint-disable-line no-unused-vars
import Header from '../components/header'

export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '0 1rem' }}>
    <Header subTitle="Bruce Springsteen Concerts" />
    {children}
  </div>
)
