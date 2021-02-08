import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IBook, ICategory } from '../../common/types';
import { api_helper } from '../utils/api-helper';

const LoginRegistrationForm: React.FC<LRProps> = (props) => {
    const [email, setEmail] = useState('Place your email here:');
    const [password, setPass] = useState(null); 

    const { isNew } = props;
    const history = useHistory();

    const handleSubmit = async () => {
        event.preventDefault();
        const user = { email, password };
        if (isNew) {
            api_helper('/auth/register', 'POST', user)
            .then(() => {
                history.push('/login');
            });
        } else {
            const token = await api_helper('/auth/login', 'POST', user);
            localStorage.setItem('TOKEN', token);
        }
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email</label>
                <input onChange={e=>setEmail(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder={email} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput2">Password</label>
                <input onChange={e=>setPass(e.target.value)} type="password" className="form-control" id="exampleFormControlInput2" placeholder='Enter your password here:' />
            </div>
            <button type='button' onClick={handleSubmit} className='btn btn-success shadow-lg'>{isNew ? 'Register!' : 'Login'}</button>
        </form>
    )
}

interface LRProps {
    isNew: boolean;
}

export default LoginRegistrationForm;