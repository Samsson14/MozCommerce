import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';;
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {Logout} from '../hooks/auth/useLogout.jsx';
import { useAuthContext } from '../hooks/auth/useAuthContext.jsx';
import { useFetch } from '../hooks/useFeth.jsx';
import { useEffect } from 'react';

const NavBar = () => {
    const {logoutUser} = Logout()
    const {user} = useAuthContext()
    const logout = async() => {
       await logoutUser()
    }
    const {fetching} = useFetch();

    //reload de useRedux
    useEffect(() => {
        fetching()
    }, [])
    return ( 
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Link className='navbar-brand' to='/'>Moz-commerce</Link>
            <Navbar.Toggle
            aria-controls='navbarToggler' />
            <Navbar.Collapse id='navbarToggler'>
                {user && <Nav className='ms-auto'>
                    <a className='nav-link'>Bem vindo: <span className='fw-bold'>{user}</span></a>
                    <a className='nav-link' onClick={logout}> <FaSignOutAlt/> Logout </a>
                    <Link to='/newProduct' className='nav-link'>Publicar</Link>
                </Nav>}
                {!user && <Nav className='ms-auto'>
                    <Link className='nav-link' to='/login'><FaSignInAlt/> Login</Link>
                    <Link className='nav-link' to='/signup'><FaSignOutAlt/> Criar conta</Link>
                </Nav>}

            </Navbar.Collapse>
        </Container> 
    </Navbar> 
    );
}
 
export default NavBar;