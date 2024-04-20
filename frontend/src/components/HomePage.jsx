import HomeHeader from './HomeHeader'
import Slider from './Swiper'
import banner from './../img/teamBanner.jpg';
import searchSvg from './../img/search.svg';
import { useState, useRef, useCallback, useEffect } from 'react';

export default function HomePage() {

    const [teamName,setTeamName] = useState('');
    const [teams,setTeams] = useState([{name: "UWU",
    banner: banner},
    {name: "Наш ход",
    banner: banner},
    {name: "ВПР23",
    banner: banner},
    {name: "Чемпионы",
    banner: banner}]);
    const input = useRef();

    const clickHandler = useCallback(() => {
        setTeamName(input.current.value.trim());
    })

    useEffect(() => {
        fetch('http://localhost:8080/api/authentication/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                options: teamName
            })
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
            setTeams([
                {name: "Ошибка",
                banner: banner},
                {name: "Ошибка",
                banner: banner},
                {name: "Ошибка",
                banner: banner},
                {name: "Ошибка",
                banner: banner}
            ]);
        });
        console.log({
            options: teamName
        });
    },[teamName])

    return (
        <>
            <HomeHeader />
            <div className="home__search-wrapper">
                <input type="text" ref={input} className="home__search" placeholder='Введите название команды...' />
                <button type="button" onClick={clickHandler}><img src={searchSvg} alt="search"/></button>
            </div>
            
            <div className="home__slider-wrapper">
                <Slider slides={teams}></Slider>
            </div>
        </>
    )
}