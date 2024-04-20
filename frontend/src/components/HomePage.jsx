import HomeHeader from './HomeHeader'
import Slider from './Swiper'

export default function HomePage() {
    return (
        <>
            <HomeHeader />
            <div className="home__slider-wrapper">
                <Slider></Slider>
            </div>
        </>
    )
}