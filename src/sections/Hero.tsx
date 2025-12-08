import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full sr-section overflow-hidden"
    >
      {/* Slider de fundo */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="h-full w-full z-0"
      >
        {['/images/hero1.webp', '/images/hero2.webp', '/images/hero3.webp'].map(
          (src, idx) => (
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
          ),
        )}
      </Swiper>

      {/* TEXTO POR CIMA */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-center text-5xl md:text-8xl font-semibold tracking-[0.25em] text-white drop-shadow-md">
          LUIS <span className="font-light">FERNANDO</span>
        </h1>
      </div>
    </section>
  )
}
