import { useAuthState } from 'react-firebase-hooks/auth';
import { Link} from 'react-router-dom';
import '../css/header.css';
import Logo from '../img/Logo.svg'
import { auth, SignIn, SignOut } from '../Pages/Authorize';






const Header = () => {
    const [user] =useAuthState(auth);
    return (
        <>
         <div className='navContainer'>
             <div className='logo'>
                 <img src={Logo} alt="" srcset="" />
             </div>
                <ul className ='nav'>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to ='/About'>About</Link>
                    </li>
                    <li>
                        <Link to ='/ProfileList'>Users</Link>
                    </li>
                    <li>
                        <Link to ='/Blog'>Blog</Link>
                    </li>
                    <li className='SignButton'>
                    {user ? < SignOut /> : <SignIn />}
                    </li>
                </ul>

         </div>
        </>
    )
}

export default Header;    
