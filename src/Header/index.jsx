import Sidebar from './Sidebar';
import { logo } from '../data';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header id='header' className='flex' direction='row'>
      <img src={logo} alt="logo" />
      <Navbar />
      <Sidebar />
    </header>
  )
}

export default Header