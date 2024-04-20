// import Swiper core and required modules
import { Navigation, Pagination,Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

import TeamCard from './TeamCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({slides}) {
    console.log(slides);
  return (
    <Swiper className="home__slider"
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay, A11y]}
      spaceBetween={60}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: false
      }}
      loop={true}
    >
        {
            slides.map((item,index) => (
                <SwiperSlide key={index}>
                    <TeamCard name={item.name} banner={item.banner}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};