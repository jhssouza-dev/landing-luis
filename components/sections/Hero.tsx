import Image from "next/image";

export function Hero() {
  return (
    <section
      id="topo"
      className="absolute inset-0 z-1 overflow-hidden bg-background"
      data-section="hero"
    >
      {/* Background: image + overlays */}
      <div data-hero-bg className="absolute inset-0">
        <Image
          src="/images/hero/hero2.webp"
          alt="Residência contemporânea com luz natural e arquitetura minimalista"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.14),rgba(0,0,0,0.52))]" />
      </div>

      {/* Permanent brand logo — always visible, same size/position as the intro logo.
          Sits behind the intro overlay during the animation; revealed when intro hides. */}
      <div
        data-hero-logo
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
      >
        <div className="intro-logo__lockup">
          <Image
            src="/images/logo/logobranco.svg"
            alt="Vision of Luis"
            width={540}
            height={91}
            className="intro-logo__image"
          />
        </div>
      </div>

      <button
        type="button"
        aria-label="Menu"
        className="hero-hamburger"
      >
        <span />
        <span />
      </button>
    </section>
  );
}
