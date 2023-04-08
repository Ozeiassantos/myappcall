import { useState, useContext } from 'react';
import './signin.css'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {SignIn} = useContext(AuthContext)

    function handleSignIn(e){
        e.preventDefault();
        if(email !== '' && password !== ''){
            SignIn(email, password);
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="logo do sistema de chamadas"/>
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input
                        type="text"
                        placeholder='email@email.com'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='*********'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                   <button type="submit">Acessar</button>
                </form>

                <Link to="/register">Criar uma Conta</Link>
            </div>
        </div>
    );
}