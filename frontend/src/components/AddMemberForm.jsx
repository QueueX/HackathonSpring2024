import { useCallback, useState, useEffect } from "react"
import crossSvg from './../img/cross.svg';

export default function AddMemberForm({closeForm,addMembHandler}) {
    let [photo,setPhoto] = useState(null);
    let [name,setName] = useState('');
    let [description,setDescription] = useState('');
    let [hasError,setHasError] = useState(false);
    let [nameWrong,setNameWrong] = useState('');

    function photoChange(event) {
        let fileReader = new FileReader();
        fileReader.onload = function() {
            setPhoto(fileReader.result);
        }

        fileReader.readAsDataURL(event.target.files[0]);
    }

    const emptyCheck = useCallback(() => {
        return name && description;
    })
    
    const addMemberSubmit = useCallback(() => {
        addMembHandler({name: name,description: description,photoUrl: photo});
        setName('');
        setDescription('');
    })

    useEffect(() => {
        if(!emptyCheck()) setHasError(true);
        else setHasError(false);

        let nameRegExp = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/;
        if(name.match(nameRegExp)) {
            setNameWrong(false)
        }  else {
            setNameWrong(true);
        }

    },[name,description])

    return (
        <div className="auth__form addMember">
            <button className="addMember__exit" onClick={() => closeForm(false)}><img src={crossSvg} alt="cross"/></button>
            <h1 className="addMember__header auth__header">Добавление участника</h1>
            <form className="addMEmber__form form">
                <div className="auth__inputBlock">
                    <label htmlFor="inputTeam" className="auth__label">ФИО:</label>
                    <input id="inputTeam" type="text" className="auth__input" value={name} onChange={(e) => setName(e.target.value)}/>
                    {nameWrong ? <p className="auth__errorMessage">*Некорректный ввод ФИО</p> : null}
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputPhoto" className="auth__label">Фото участника:</label>
                    <input id="inputPhoto" type="file" className="auth__input" onChange={photoChange}/>
                    {photo && <div className="photo-wrapper"><img src={photo} alt="MemberPhoto" className="photo" /></div>}
                </div>
                <div className="auth__inputBlock">
                    <label htmlFor="inputDescription" className="auth__label">О себе:</label>
                    <textarea id="inputDescription" className="auth__textArea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                {hasError ? <p className="auth__errorMessage">Поля не должны быть пустыми !</p> : null}
                <button  disabled={hasError || nameWrong} className="login__submit button" type="button" onClick={addMemberSubmit}>Добавить</button>
            </form>
        </div>
    )
}