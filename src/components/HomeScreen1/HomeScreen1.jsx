import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeScreen1.css";

const HomeScreen1 = () => {

  return (
    <>
      <div className="slideshowbox">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/z40_pro_mob_97fc30d1-0a18-439f-8402-ffae70442920_770x.png?v=1695995158" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/strap_mob_770x.png?v=1695297265" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/craft_mob_770x.png?v=1695302639" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/W20_mob_f157d0ff-3d37-416c-8095-f193081a5165_770x.png?v=1694699584" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/MicrosoftTeams-image_121_770x.png?v=1693981307" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/650_710_770x.jpg?v=1694605235" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.boultaudio.com/cdn/shop/files/Next-gen_770x.webp?v=1681365829" />
          </SwiperSlide>
              </Swiper>
          </div>
          <div className="advantages">
              <img src='https://www.boultaudio.com/cdn/shop/files/MicrosoftTeams-image_450e5fad-31bb-4f9c-a0e6-0f5d34a3976a_230x.png?v=1693834926' alt="" />
              <img src="https://www.boultaudio.com/cdn/shop/files/0005_230x.png?v=1684229327" alt="" />
              <img src="https://www.boultaudio.com/cdn/shop/files/Trust_bar_3_230x.png?v=1693835168" alt="" />
              <img src="https://www.boultaudio.com/cdn/shop/files/MicrosoftTeams-image_23_7281b62c-c2be-4af2-ad9b-59f9297ef975_230x.png?v=1685439922" alt="" />
          </div>
          
    </>
  );
};

export default HomeScreen1;
