import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TeamCard({name,banner}) {
    const navigate = useNavigate();
    const clickHandler = useCallback((e) => {
        console.log('Вы открыли карту ',name);
        navigate(`./${name}`);
    })
    return (
        <div className="home__teamCard teamCard" onClick={(e) => clickHandler(e)}>
            <div className="teamCard__info">
                <img src={banner} alt="banner" className="teamcard__banner"/>
                <h3 className="teamCard__title">{name}</h3>
            </div>
        </div>
    )
}