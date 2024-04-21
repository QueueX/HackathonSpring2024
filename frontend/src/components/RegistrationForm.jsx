import { Link, json } from "react-router-dom"
import { useCallback, useState, useEffect } from "react"

import crossSvg from './../img/cross.svg';

export default function RegistrationForm({addMember,members,membersChange}) {
    let [banner,setBanner] = useState(null);
    let [hasError,setHasError] = useState(false);
    let [teamName,setTeamName] = useState('');
    let [mail,setMail] = useState('');
    let [login,setLogin] = useState('');
    let [password,setPassword] = useState('');
    let [mailWrong,setMailWrong] = useState(false);
    let [passWrong,setPassWrong] = useState(false);
    let [bannerWrong,setBannerWrong] = useState(false);
    let [bannerSizeWrong,setBannerSizeWrong] = useState(false);
    let [membersWrong,setMembersWrong] = useState(false);

    async function bannerChange(event) {
        if(event.target.files[0].size < 2 * 1024 * 1024){
            setBannerSizeWrong(false);
            let fileReader = new FileReader();
            fileReader.onload = function() {
                setBanner(fileReader.result);
            }
            fileReader.readAsDataURL(event.target.files[0])
        } else {
            setBannerSizeWrong(true)
        }
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

    const emptyCheck = useCallback(() => {
        return teamName && mail && login && password;
    })

    useEffect(() => {
        if(!emptyCheck()) setHasError(true);
        else setHasError(false);

        let mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(mail.match(mailRegExp)) {
            setMailWrong(false)
        }  else {
            setMailWrong(true);
        } 
        let passRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{8}$/;
        if(password.match(passRegExp)) {
            setPassWrong(false);
        }  else {
            setPassWrong(true);
        }
        if(!members.length) {
            setMembersWrong(true);
        } else {
            setMembersWrong(false);
        }
        if(!banner) {
            setBannerWrong(true);
        } else {
            setBannerWrong(false);
        }

    },[mail,teamName,login,password,members,banner])

    const changeHandler = useCallback((e,setter) => {
        setter(e.target.value);
    })

    const registrationSubmit = useCallback((e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/authentication/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                teamName: teamName,
                members: members,
                mail: mail,
                login: login,
                password: password
            })
        }).then((response) => {
            if (response.status == 200) {
                setMail('');
                setTeamName('');
                setLogin('');
                setPassword('');
                setBanner('');
                membersChange([]);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
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
                    <input id="inputPhoto" type="file" className="auth__input" files={banner} accept=".jpeg,.pdf,.png" onChange={bannerChange}/>
                    {bannerWrong ? <p className="auth__errorMessage">Баннер не загружен !</p> : null}
                    {bannerSizeWrong ? <p className="auth__errorMessage">Размер превышает 2MB !</p> : null}
                    {banner && <div className="banner-wrapper"><img src={banner} alt="bannerTeam" className="banner" /></div>}
                </div>
                <div className="auth__inputBlock">
                    <div className="auth__inputBlock__row">
                        <label className="auth__label">Добавить участника:</label>
                        <button className="button registration__addMember" onClick={addCLickHAndler}>Добавить участника</button>
                    </div>
                    {membersWrong ? <p className="auth__errorMessage">Должен быть минимум 1 участник !</p> : null}
                    <div className="members">
                        {members.map((item,index) => (
                            <div className="members__member" key={item.name}>
                                <span>{index+1}</span><p className="member__name">{item.name}</p>
                                <button className="members__delete" type="button" onClick={() => handlerDelete(index)}><img src={crossSvg} alt="cross" /></button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputMail" className="auth__label">Электронная почта:</label>
                    <input id="inputMail" type="text" className="auth__input mailInput" value={mail} onChange={(e) => changeHandler(e,setMail)}/>
                    {mailWrong ? <p className="auth__errorMessage">Некорректный email !</p> : null}
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputLog" className="auth__label">Логин:</label>
                    <input id="inputLog" type="text" className="auth__input loginInput" value={login} onChange={(e) => changeHandler(e,setLogin)}/>
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputPass" className="auth__label">Пароль:</label>
                    <input id="inputPass" type="password" className="auth__input" value={password} onChange={(e) => changeHandler(e,setPassword)}/>
                    {passWrong ? <p className="auth__errorMessage">Пароль должен содержать 8 символов<br/>*Содержит 1 заглвную букву <br/>*Содержит 1 строчную букву</p> : null}
                </div>
                {hasError ? <p className="auth__errorMessage">Поля не должны быть пустыми !</p> : null}
                <button className="login__submit button" disabled={hasError || mailWrong || passWrong || membersWrong || bannerWrong} onClick={registrationSubmit}>Зарегистрироваться</button>
            </form>
            <p>Есть аккаунт?&nbsp;&nbsp;<Link className="login__regLink auth__link" to="/authentification/auth"> Войти</Link></p>
        </div>
    )
}