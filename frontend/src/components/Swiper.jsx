// import Swiper core and required modules
import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

import TeamCard from './TeamCard';

import teamBanner from './../img/teamBanner.jpg';
import teamBanner2 from './../img/teamBanner2.jpg';
import teamBanner3 from './../img/teamBanner3.jpg';
import teamBanner4 from './../img/teamBanner4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <Swiper className="home__slider"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
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
      <SwiperSlide >
        <TeamCard name="UWU" banner={teamBanner}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="TeamUp" banner={teamBanner2}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="Наш ход" banner={teamBanner3}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="ВПР23" banner={teamBanner}/>
      </SwiperSlide>
      <SwiperSlide >
        <TeamCard name="UWU" banner={teamBanner}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="TeamUp" banner={teamBanner2}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="Наш ход" banner={teamBanner3}/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamCard name="ВПР23" banner={teamBanner}/>
      </SwiperSlide>
    </Swiper>
  );
};