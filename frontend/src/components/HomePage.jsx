import HomeHeader from './HomeHeader'
import Slider from './Swiper'
import banner1 from './../img/teamBanner.jpg';
import banner2 from './../img/teamBanner2.jpg';
import banner3 from './../img/teamBanner3.jpg';
import banner4 from './../img/teamBanner4.jpg';
import banner5 from './../img/teamBanner5.jpg';
import searchSvg from './../img/search.svg';
import { useState, useRef, useCallback, useEffect } from 'react';

export default function HomePage() {

    const [teamName,setTeamName] = useState('');
    const [teams,setTeams] = useState([{name: "UWU",
    banner: banner1},
    {name: "Наш ход",
    banner: banner2},
    {name: "ВПР23",
    banner: banner3},
    {name: "Чемпионы",
    banner: banner4}]);
    const input = useRef();

    const clickHandler = useCallback(() => {
        setTeamName(input.current.value.trim());
    })

    useEffect(() => {
        fetch('#', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                options: teamName
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTeams(data);
        }).catch(error => {
            console.log(error);
            setTeams([
                {name: "УВУ",
                banner: banner1},
                {name: "Наш ход",
                banner: banner2},
                {name: "Хакеры",
                banner: banner3},
                {name: "Питонисты",
                banner: banner4},
                {name: "Страна Возможностей",
                banner: banner5},
                {name: "Профики",
                banner: banner1},
                {name: "Наши слоняры",
                banner: banner2},
                {name: "Джависты",
                banner: banner2}
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
                <Slider keyWord={teamName} slides={teams}></Slider>
            </div>
        </>
    )
}