import React from 'react'; 

const Auth: React.FC<AuthProps> = ({children}) => {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');

    if (!token || !userid) {
        return <h1>You must be logged in to access this resource.</h1>
    } else {
        return {...children}
    }
};

interface AuthProps {
    children: any;
}

export default Auth;