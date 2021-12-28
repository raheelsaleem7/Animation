import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Foooter'

function FirstPage() {
    return (
        <div>
             <div className='app_content'>
               <Header />
               <Main/>
               <Footer />
    </div>
        </div>
    )
}

export default FirstPage
