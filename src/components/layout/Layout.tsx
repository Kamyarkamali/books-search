//Coponents/layot
import Header from "./Header";
import Footer from './Footer';


function Layout({children}:any) {
  return (
    <div>
        <Header/>

        <div className='h-fit'>
            {children}
        </div>

        <Footer/>

    </div>
  )
}

export default Layout