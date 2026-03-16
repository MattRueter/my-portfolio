import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

export default function SlideDeck({ slides, variant = "overview", altPrefix }) {
    if (!slides || slides.length === 0) return null;

    const isOverview = variant === "overview";

    return (
        <div className={`slideDeck slideDeck--${variant}`}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={isOverview ? 40 : 24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map((src, index) => (
                    <SwiperSlide className="slideDeck__slide" key={src || index}>
                        <img
                            src={src}
                            alt={
                                altPrefix
                                    ? `${altPrefix} slide ${index + 1}`
                                    : `Slide ${index + 1}`
                            }
                            className="slideDeck__image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

