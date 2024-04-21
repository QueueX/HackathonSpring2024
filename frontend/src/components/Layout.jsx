import { Outlet } from "react-router-dom";
export default function Authlayout() {
    return (
        <div className="page__auth auth">
            <div className="auth__container container">
                <Outlet />
            </div>
        </div>
    )
}

export function HomeLayout() {
    return (
        <div className="page__home home">
            <div className="home__container container">
                <Outlet />
            </div>
        </div>
    )
}