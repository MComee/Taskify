export default function Carousel({ slides, className }) {
  const animationDuration = slides.length * 20; // in seconds
  return (
    <section
      className={`relative overflow-hidden rounded-2xl bg-gray-50 ${className}`}
      aria-roledescription="carousel"
      aria-label="Showcase"
    >
      {/* Track with fixed height via aspect ratio to avoid layout shift */}
      <div
        className="carousel-track"
        style={{ animationDuration: `${animationDuration}s` }} // Apply dynamic duration
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            {slide.component}
          </div>
        ))}
        {/* Duplicate slides for seamless looping */}
        {slides.map((slide) => (
          <div key={`${slide.id}-duplicate`} className="carousel-slide">
            {slide.component}
          </div>
        ))}
      </div>
    </section>
  );
}