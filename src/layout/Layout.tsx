import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {


    return (
        <div>
            <Navbar />
                <main className='content'>
                    <Outlet />
                </main>
            <Footer />
        </div>

    )

}

export default Layout;