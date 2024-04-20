import { Link } from "react-router-dom"

export default function HomeHeader() {
    return (
        <header className="home__header">
            <div className="header__container container">
                <button className="home__cabinet" type="button">Личный кабинет</button>
            </div>
        </header>
    )
}