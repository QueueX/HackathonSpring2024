import { Link } from "react-router-dom"

export default function Login() {

    return (
        <div className="auth__form login">
            <h1 className="login__header">Регистрация</h1>
            <form className="login__form">
                
            </form>
            <p>Есть аккаунт ? <Link className="login__regLink link" to="/">Войти</Link></p>

        </div>
    )
}