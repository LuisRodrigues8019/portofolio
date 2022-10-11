import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';


const Layout = () => {
    return (
    <div className='App'>
    <Sidebar/>
    <div className='page'>
        <span>
            
        </span>
    </div>
    </div>
    )
}

export default Layout 