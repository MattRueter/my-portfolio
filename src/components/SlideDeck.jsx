import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SlideDeck({ slides, variant = "overview", altPrefix }) {
    if (!slides || slides.length === 0) return null;

    const isOverview = variant === "overview";
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperInstanceRef = useRef(null);

    useEffect(() => {
        const swiper = swiperInstanceRef.current;
        const prevEl = prevButtonRef.current;
        const nextEl = nextButtonRef.current;

        if (!swiper || !prevEl || !nextEl) {
            return;
        }

        swiper.params.navigation.prevEl = prevEl;
        swiper.params.navigation.nextEl = nextEl;

        if (swiper.navigation && typeof swiper.navigation.init === "function") {
            swiper.navigation.init();
            swiper.navigation.update();
        }
    });

    return (
        <div className={`slideDeck slideDeck--${variant}`}>            
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={isOverview ? 40 : 24}
                slidesPerView={1}
                navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiperInstanceRef.current = swiper;

                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                }}
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
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slideDeck__nav" aria-hidden="false">
                <button
                    ref={prevButtonRef}
                    type="button"
                    className="slideDeck__navButton slideDeck__navButton--prev"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="slideDeck__navIcon" aria-hidden="true" />
                    <span className="slideDeck__navLabel">Prev</span>
                </button>
                <button
                    ref={nextButtonRef}
                    type="button"
                    className="slideDeck__navButton slideDeck__navButton--next"
                    aria-label="Next slide"
                >
                    <span className="slideDeck__navLabel">Next</span>
                    <ChevronRight className="slideDeck__navIcon" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

