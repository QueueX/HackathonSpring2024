import { useState, useCallback } from "react";
import { Link } from "react-router-dom"

export default function Login() {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');

    const clickHandler = useCallback((e,login,pass) => {
            e.preventDefault();
            fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                mode: 'no-cors',
                body: JSON.stringify({login: login,password: pass})
            }).then((response) => {
                if(response.status == 200) {
                    /*Здесь должна быть обработка ответа сервера*/
                    console.log('Авторизован');
                }
                return response.json();
            }).then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            })
    },[])

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
                <button className="login__submit button" onClick={(e) => clickHandler(e,login,password)}>Вход</button>
            </form>
            <div className="login__links">
                <Link className="login__regLink auth__link" to="/">Главная</Link>
                <Link className="login__regLink auth__link" to="/authentification/reg">Регистрация</Link>
            </div>
        </div>
    )
}