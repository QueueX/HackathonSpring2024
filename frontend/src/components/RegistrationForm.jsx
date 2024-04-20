import { Link } from "react-router-dom"
import { useCallback, useState, useEffect } from "react"

import crossSvg from './../img/cross.svg';

export default function RegistrationForm({addMember,members,membersChange}) {
    let [banner,setBanner] = useState(null);
    let [hasError,setHasError] = useState(false);
    let [teamName,setTeamName] = useState('');
    let [mail,setMail] = useState('');
    let [login,setLogin] = useState('');
    let [password,setPassword] = useState('');

    function bannerChange(event) {
        let fileReader = new FileReader();
        fileReader.onload = function() {
            setBanner(fileReader.result);
        }

        fileReader.readAsDataURL(event.target.files[0]);
    }
    function addCLickHAndler(event) {
        event.preventDefault();
        addMember(true);
    }
    const handlerDelete = useCallback((indexToDelete) => {
        let tempMembers = members.filter((member,index) => index != indexToDelete);
        console.log(tempMembers);
        membersChange(tempMembers);
    })

    const validCheck = useCallback(() => {
        return teamName && mail && login && password;
    })

    useEffect(() => {
        if(!validCheck()) setHasError(true);
        else setHasError(false);
    },[mail,teamName,login,password])

    const changeHandler = useCallback((e,setter) => {
        setter(e.target.value);

    })

    return (
        <div className="auth__form registration">
            <h1 className="registration__header auth__header">Регистрация</h1>
            <form className="registration__form form">
                <div className="auth__inputBlock">
                    <label htmlFor="inputTeam" className="auth__label">Название команды:</label>
                    <input id="inputTeam" type="text" className="auth__input" value={teamName} onChange={(e) => changeHandler(e,setTeamName)}/>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputPhoto" className="auth__label">Баннер команды:</label>
                    <input id="inputPhoto" type="file" className="auth__input" onChange={bannerChange}/>
                    {banner && <div className="banner-wrapper"><img src={banner} alt="bannerTeam" class="banner" /></div>}
                </div>
                <div className="auth__inputBlock">
                    <div className="auth__inputBlock__row">
                        <label className="auth__label">Добавить участника:</label>
                        <button className="button registration__addMember" onClick={addCLickHAndler}>Добавить участника</button>
                    </div>
                    <div className="members">
                        {members.map((item,index) => (
                            <div className="members__member">
                                <span>{index+1}</span><p className="member__name">{item.name}</p>
                                <button className="members__delete" type="button" onClick={() => handlerDelete(index)}><img src={crossSvg} alt="cross" /></button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputLog" className="auth__label">Электронная почта:</label>
                    <input id="inputLog" type="text" className="auth__input" value={mail} onChange={(e) => changeHandler(e,setMail)}/>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputLog" className="auth__label">Логин:</label>
                    <input id="inputLog" type="text" className="auth__input" value={login} onChange={(e) => changeHandler(e,setLogin)}/>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputPass" className="auth__label">Пароль:</label>
                    <input id="inputPass" type="password" className="auth__input" value={password} onChange={(e) => changeHandler(e,setPassword)}/>
                </div>
                {hasError ? <p className="auth__errorMessage">Поля не должны быть пустыми !</p> : null}
                <button className="login__submit button" disabled={hasError}>Зарегистрироваться</button>
            </form>
            <p>Есть аккаунт ? <Link className="login__regLink auth__link" to="/">Войти</Link></p>
        </div>
    )
}