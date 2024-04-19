import { useState, useCallback } from "react";
import { Link } from "react-router-dom"

export default function Login() {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');

    const clickHandler = useCallback(() => {
            fetch('url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([login,password])
            })
    },[])

    return (
        <div className="auth__form login">
            <h1 className="login__header">Вход в аккаунт</h1>
            <form className="login__form">
                <div className="login__inputBlock">
                    <label htmlFor="inputLog" className="login__label">Логин:</label>
                    <input id="inputLog" type="text" className="login__input" value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className="login__inputBlock">
                    <label htmlFor="inputPass" className="login__label">Пароль:</label>
                    <input id="inputPass" type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="login__submit button" onClick={clickHandler}>Вход</button>
                <pre>
                    login: {login}<br/>
                    password: {password}
                </pre>
            </form>
            <Link className="login__regLink link" to="./registration">Регистрация</Link>
        </div>
    )
}