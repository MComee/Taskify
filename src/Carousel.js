export default function Carousel({ slides, className }) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl bg-gray-50 ${className}`}
      aria-roledescription="carousel"
      aria-label="Showcase"
    >
      {/* Track with fixed height via aspect ratio to avoid layout shift */}
      <div className="carousel-track">
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            {slide.component}
          </div>
        ))}
      </div>
    </section>
  );
}