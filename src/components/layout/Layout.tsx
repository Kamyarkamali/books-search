import React from 'react'

//Coponents/layot
import Header from "./Header";
import Footer from './Footer';


function Layout({children}:any) {
  return (
    <div>
        <Header/>

        <div className='min-h-[1000px]'>
            {children}
        </div>

        <Footer/>

    </div>
  )
}

export default Layout