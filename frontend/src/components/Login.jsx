import { useState, useCallback } from "react";
import { Link } from "react-router-dom"

export default function Login() {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');

    const clickHandler = useCallback((e) => {
            e.preventDefault();
            fetch('url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([login,password])
            })
    },[])

    
    console.log('aaa');

    return (
        <div className="auth__form login">
            <h1 className="auth__header">Вход в аккаунт</h1>
            <form className="login__form form">
                <div className="auth__inputBlock">
                    <label htmlFor="inputLog" className="auth__label">Логин:</label>
                    <input id="inputLog" type="text" className="auth__input" value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputPass" className="auth__label">Пароль:</label>
                    <input id="inputPass" type="password" className="auth__input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="login__submit button" onClick={clickHandler}>Вход</button>
            </form>
            <Link className="login__regLink auth__link" to="./registration">Регистрация</Link>
        </div>
    )
}