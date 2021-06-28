import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x =2
    return (
        <div>
            <h1 className={headerStyles.title} >
                <span>WebDev</span>News
            </h1>
            <p className={headerStyles.description} >
                Keep up to date with latest web dev
            </p>
            <style jsx>
                {`.title {
                    color: ${x>3? 'red':'blue'};
                }`}
            </style>
        </div>
    )
}

export default Header