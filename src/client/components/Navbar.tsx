import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC<NavbarProps> = () => {
    return (
        <div className="row mb-3 shadow-lg">
            <Link className='btn btn-info shadow-sm m-2' to='/'>Home</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/books'>Books</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/books/new'>Create</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/login'>Login</Link>
            <Link className='btn btn-info shadow-sm m-2' to='/register'>Register</Link>
        </div>
    );
}

interface NavbarProps {

}

export default Navbar;