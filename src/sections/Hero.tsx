import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const slides = [
  {
    id: 1,
    imageUrl: "/images/hero/hero1.webp",
    alt: "Projeto 1",
  },
  {
    id: 2,
    imageUrl: "/images/hero/hero2.webp",
    alt: "Projeto 2",
  },
  {
    id: 3,
    imageUrl: "/images/hero/hero3.webp",
    alt: "Projeto 3",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200} // tempo da transição (ms)
        autoplay={{
          delay: 5500, // tempo que cada slide fica na tela
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />

              {/* overlay escuro sutil, se quiser */}
              <div className="pointer-events-none absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Logo / texto central, se quiser por cima */}
       <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/images/logo/logobranco.png"
          alt="logo"
          className="w-40 md:w-56 object-contain opacity-60 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
        />
      </div>
    </section>
  );
}
