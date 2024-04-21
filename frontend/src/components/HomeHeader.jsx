import { useCallback } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function HomeHeader() {
    return (
        <header className="home__header">
            <div className="header__container container">
                <Link className="home__auth home__link" to="/authentification/auth">Авторизация</Link>
                <Link className="home__cabinet home__link" to="/home/cabinet">Личный кабинет</Link>
            </div>
        </header>
    )
}