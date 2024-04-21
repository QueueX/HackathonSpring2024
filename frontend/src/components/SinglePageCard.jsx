import { Link, useParams } from "react-router-dom";
import banner from './../img/teamBanner.jpg';
import crossSvg from './../img/cross.svg';
import { useState, useCallback, useEffect} from "react";

export default function SinglePageCard() {
    const [memberDescription,setMemberDescription] = useState('');
    const [memberName,setMemberName] = useState('');
    /*Пример со статической подгрузкой данных*/
    const [members,setMembers] = useState([
        {name: 'Максим',description:'Опытный фронтенд-разработчик, который отлично разбирается в HTML, CSS и JavaScript. Всегда придумывает новые идеи для улучшения пользовательского интерфейса.',photo: banner},
        {name: 'Дима',description:'Разработчик бэкенда с уникальным подходом к программированию. Специализируется на PHP и MySQL, всегда находит эффективные решения для сложных задач.',photo: banner},
        {name: 'Теймур',description:'Дизайнер, который создает красивые и интуитивно понятные макеты для сайта. Ее работы всегда выделяются стильным оформлением и удобством использования.',photo: banner},
        {name: 'Алексей',description:'Специалист по SEO, который помогает сайту быть на первых страницах поисковых систем. С его помощью трафик и конверсия сайта значительно увеличиваются.',photo: banner},
        {name: 'Иван',description:'Тестировщик, который проверяет работу сайта на различных устройствах и браузерах. Благодаря его усилиям, сайт всегда работает стабильно и без сбоев.',photo: banner},
    ])
    const {teamName}  = useParams();
    const [activeMember,setActiveMember] = useState(0);
    const [memberPhoto,setMemberPhoto] = useState(members[0]?.photo);

    const clickHandler = useCallback((index) => {
        setMemberName(members[index]?.name);
        setMemberDescription(members[index]?.description);
        setMemberPhoto(members[index]?.photo);
        setActiveMember(index);
    }) 

    useEffect(() => {
        clickHandler(0);
        fetch('#', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                teamName: teamName,
            })
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((data) => {
            console.log(data);
            setMembers(data);
        }).catch(error => {
            console.log(error);
        });
    },[teamName]);



    return (
        <> 
            <div className="single-page__header">
                <Link to="/" className="single-page__out"><img src={crossSvg} alt="cross" /></Link>
                <h2 className="single-page__title">Команда: {teamName}</h2>
                <img src={banner} alt="" className="single-page__banner" />
            </div>
            <div className="single-page__members">
                <div className="single-page__membersSwitch">
                    {members.map((item,index) => (
                        <button onClick={(event) => clickHandler(index,event)} key={index} className={index === activeMember ? 'memberSwitch__button memberSwitch__button_active' : 'memberSwitch__button'}>Участник {index+1}</button>
                    ))}
                </div>
                <h3 className="single-page__memberName">{memberName || null}</h3>
                <div className="single-page__memberBlock">
                    {
                        members.length ? 
                        <>
                            <div className="single-page__memberPhoto"><img src={memberPhoto} alt="memberPhoto"/></div>
                            <p className="single-page__memberDescript">{memberDescription}</p>
                        </>
                        : null
                    }
                </div>
            </div>
        </>

    )
}