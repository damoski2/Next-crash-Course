import React from 'react'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import style from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
      <>
      <Meta />
      <Nav />
        <div className={style.container} >
            <main className={style.main} >
                <Header />
                {children}
            </main>
        </div>
      </>
    )
}

export default Layout
