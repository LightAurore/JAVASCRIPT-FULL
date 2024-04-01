import {Swiper} from "swiper/react"
import {EffectCoverflow,Navigation, Pagination} from "swiper/modules"



const Carousel3d = ({ slides }: Props) =>{
    return (
        <Swiper
            module ={[EffectCoverflow,Navigation, Pagination]}
            pagination={{clickable: true}}
            speed= {5000}
            slidesPreview= {"auto"}
            centeredSlides
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
        >
            {slides.map((slide, index) =>{
                <SwiperSlide key={index} className="slide-inner" />
                    <img src="" alt="" />
                <SwiperSlide/>

            })}
        </Swiper>
    )
}