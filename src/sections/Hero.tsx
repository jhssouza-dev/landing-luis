import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full sr-section overflow-hidden bg-(--bg)"
    >
      {/* Slider de fundo */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="h-full w-full z-0"
      >
        {[
          "/images/hero/hero1.webp",
          "/images/hero/hero2.webp",
          "/images/hero/hero3.webp",
        ].map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover translate-z-0!"
              />
              {/* overlay da imagem */}
              <div className="absolute inset-0  " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXTO POR CIMA */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/images/logo/logopreto.png"
          alt="logo"
          className="w-80 object-contain md:w-200"
        />
      </div>
    </section>
  );
}
