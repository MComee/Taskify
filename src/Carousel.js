import React, { useState, useEffect, useRef } from 'react';

export default function Carousel({ slides, className }) {
  const animationDuration = slides.length * 20; // in seconds
  const [visibleSlides, setVisibleSlides] = useState(() => {
    const initialVisible = {};
    slides.forEach(slide => {
      initialVisible[slide.id] = true;
      initialVisible[`${slide.id}-duplicate`] = true;
    });
    return initialVisible;
  });
  const slideRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const slideId = entry.target.dataset.slideId;
          setVisibleSlides((prev) => {
            const newState = { ...prev };
            if (entry.isIntersecting) {
              newState[slideId] = true;
            }
            return newState;
          });
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px 100% 0px 100%', // Pre-render items that are one viewport width away
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const currentSlideRefs = slideRefs.current; // Capture the current value

    return () => {
      currentSlideRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [slides]); // Re-run effect if slides change

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
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="carousel-slide"
            ref={(el) => (slideRefs.current[index] = el)}
            data-slide-id={slide.id}
          >
            {visibleSlides[slide.id] ? slide.component : <div style={{ width: '300px', height: '200px', backgroundColor: 'transparent' }} />}
          </div>
        ))}
        {/* Duplicate slides for seamless looping */}
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-duplicate`}
            className="carousel-slide"
            ref={(el) => (slideRefs.current[slides.length + index] = el)} // Offset index for duplicated slides
            data-slide-id={`${slide.id}-duplicate`}
          >
            {visibleSlides[`${slide.id}-duplicate`] ? slide.component : <div style={{ width: '300px', height: '200px', backgroundColor: 'transparent' }} />}
          </div>
        ))}
      </div>
    </section>
  );
}