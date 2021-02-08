import React, { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar: FC<NavbarProps> = () => {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const history = useHistory();

    const [id, setId] = useState(userid); //for rerendering

    const handleLogout = () => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        setId(null);
        history.push('/');
    }

    return (
        <div className="row mb-3 shadow-lg">
            <div id={`${id}`}></div>
            <Link className='btn btn-info shadow-sm m-2' to='/'>Home</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/books'>Books</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/books/new'>Create</Link>
            {(!token || !userid) ? 
             <>
                <Link className='btn btn-info shadow-sm m-2' to='/login'>Login</Link>
                <Link className='btn btn-info shadow-sm m-2' to='/register'>Register</Link>
             </> : <button onClick={handleLogout} className='btn btn-info shadow-sm m-2'>Logout</button>   
            }
        </div>
    );
}

interface NavbarProps {

}

export default Navbar;