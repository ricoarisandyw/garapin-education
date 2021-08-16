import React from 'react'
import Footer from './Footer'
import Header from './Header'

const PublicLayout: React.FC = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default PublicLayout