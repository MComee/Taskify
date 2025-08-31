import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'framer-motion';
import './App.css';

/**
 * Navbar Component
 * Renders a sticky navigation bar with a logo and navigation links.
 * Includes responsive behavior with a hamburger menu for smaller screens.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Hide/reveal based on scroll direction
  const lastY = useRef(0);
  const y = useMotionValue(0); // This will be the actual y position of the navbar

  // Shrink and blur
  const scale = useTransform(y, [-100, 0], [0.9, 1]); // When y is -100, scale is 0.9; when y is 0, scale is 1
  const filter = useTransform(y, [-100, 0], ['blur(5px)', 'blur(0px)']); // When y is -100, blur is 5px; when y is 0, blur is 0px

  // Shrink and blur

  // Define the scroll distance for the reveal/hide animation
  

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const previousY = lastY.current;
    const scrollDelta = latestY - previousY;

    // If scrolling down and past a threshold, start hiding
    if (scrollDelta > 0 && latestY > 100) {
      // Calculate how much to hide based on scrollDelta, clamped between -100 and 0
      y.set(Math.max(-100, y.get() - scrollDelta));
    }
    // If scrolling up, reveal faster
    else if (scrollDelta < 0) {
      // Calculate how much to reveal based on scrollDelta, clamped between -100 and 0
      // To make it reveal as deltaY reaches -100, we add the absolute scrollDelta to y.
      y.set(Math.min(0, y.get() + Math.abs(scrollDelta)));
    }
    // If at the top, ensure it's fully visible
    if (latestY <= 100) {
      y.set(0);
    }

    lastY.current = latestY;
  });

  // Function to toggle the mobile menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="navbar"
      style={{
        scale,
        filter,
        y,
        position: 'fixed', // Ensure it stays fixed
        width: '100%', // Ensure it spans full width
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Logo - links to the top of the page */}
        <a href="/" className="logo">Taskify</a>
        {/* Hamburger menu button for mobile view */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {/* Navigation links - dynamically apply 'open' class for mobile menu visibility */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Navigation items with smooth scroll links */}
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#how-it-works" onClick={toggleMenu}>How It Works</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}

/**
 * Hero Section Component
 * Displays the main heading, a descriptive paragraph, and call-to-action buttons.
 */
function HeroSection() {
  return (
    <section className="App-section hero-section">
      <p className="hero-tagline">Simplify tasks. Celebrate wins. Stay on track.</p>
      <h1>Organize your team’s work in minutes.</h1>
      <p>Taskify helps remote teams stay aligned, boost productivity, and hit deadlines without the chaos of endless emails.</p>
      <div className="hero-actions">
        <button>Get Started Free</button>
        <a href="#demo" className="secondary-cta">Watch Demo</a>
      </div>
      <div className="hero-badge">Used by 300+ teams</div>
      {/* Placeholder for SVG illustration */}
      {/* <img src="/path/to/your/illustration.svg" alt="Teamwork illustration" className="hero-illustration" /> */}
    </section>
  );
}

/**
 * Features Section Component
 * Showcases the key features of the product with individual service items.
 */
function FeaturesSection() {
  return (
    <section id="features" className="App-section features-section">
      <h2>Everything you need to manage projects effortlessly.</h2>
      <div className="features-grid"> {/* Add a grid container for features */}
        <div className="service-item feature-card">
          <div className="feature-icon">{/* SVG for Simple Task Management */}</div>
          <h3>Simple Task Management</h3>
          <p>Create, assign, and track tasks with zero learning curve.</p>
        </div>
        <div className="service-item feature-card">
          <div className="feature-icon">{/* SVG for Real-Time Collaboration */}</div>
          <h3>Real-Time Collaboration</h3>
          <p>Chat and update tasks instantly with your team.</p>
        </div>
        <div className="service-item feature-card">
          <div className="feature-icon">{/* SVG for Smart Notifications */}</div>
          <h3>Smart Notifications</h3>
          <p>Never miss a deadline with reminders that actually help.</p>
        </div>
        <div className="service-item feature-card">
          <div className="feature-icon">{/* SVG for Mobile Ready */}</div>
          <h3>Mobile Ready</h3>
          <p>Stay productive anywhere with a responsive app.</p>
        </div>
      </div>
    </section>
  );
}

/**
 * How It Works Section Component
 * Explains the process of getting started with the product in three simple steps.
 */
function HowItWorksSection() {
  return (
    <section id="how-it-works" className="App-section how-it-works-section">
      <h2>Get started in 3 simple steps.</h2>
      <p>1. Sign up in 30 seconds — no credit card required.</p>
      <p>2. Add your first project and invite your team.</p>
      <p>3. Track progress and celebrate hitting your goals.</p>
    </section>
  );
}

/**
 * Testimonials Section Component
 * Displays customer testimonials to build trust and credibility.
 */
function TestimonialsSection() {
  return (
    <section id="testimonials" className="App-section testimonials-section">
      <h2>Trusted by teams everywhere.</h2>
      <div className="testimonials-grid"> {/* Add a grid container for testimonials */}
        <div className="testimonial-item">
          <p>"I can’t believe how much easier Taskify made managing my team! It’s a game-changer for our agency."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{/* Avatar for Sarah L. */}</div>
            <p>- Sarah L., Marketing Manager</p>
          </div>
        </div>
        <div className="testimonial-item">
          <p>"Our remote team finally feels connected. Taskify is simple, fast, and reliable. Highly recommended!"</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{/* Avatar for David R. */}</div>
            <p>- David R., Startup Founder</p>
          </div>
        </div>
        <div className="testimonial-item">
          <p>"We tried 3 other tools, but Taskify was the only one our team actually enjoyed using. It just works!"</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{/* Avatar for Priya K. */}</div>
            <p>- Priya K., Operations Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Pricing Section Component
 * Presents different pricing plans for the product.
 */
function PricingSection() {
  return (
    <section id="pricing" className="App-section pricing-section">
      <h2>Simple, transparent pricing.</h2>
      <div className="pricing-grid"> {/* Add a grid container for pricing plans */}
        <div className="pricing-plan">
          <h3>Starter (Free)</h3>
          <p>For individuals and small teams just getting started.</p>
          <button>Get Started</button>
        </div>
        <div className="pricing-plan highlighted-plan">
          <div className="popular-badge">Most Popular</div>
          <h3>Pro ($9/month)</h3>
          <p>Unlimited projects and advanced features for growing teams.</p>
          <button>Get Started</button>
        </div>
        <div className="pricing-plan">
          <h3>Team ($29/month)</h3>
          <p>Best for companies managing multiple teams and projects.</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

/**
 * Call To Action Section Component
 * A prominent section encouraging users to start using the product.
 */
function CallToActionSection() {
    return (
        <section className="App-section cta-banner-section">
            <h2>Start organizing your work today — it’s free to try.</h2>
            <button>Create Your Free Account</button>
        </section>
    );
}

/**
 * Contact Section Component
 * Provides a form for users to send messages.
 */
function ContactSection() {
  return (
    <section id="contact" className="App-section contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

/**
 * Footer Section Component
 * Contains navigation links, privacy policy, terms of service, and copyright information.
 */
function FooterSection() {
  return (
    <footer className="App-section footer-section">
      <p>
        <a href="#features">Features</a> | 
        <a href="#how-it-works">How It Works</a> | 
        <a href="#testimonials">Testimonials</a> | 
        <a href="#pricing">Pricing</a> | 
        <a href="#contact">Contact</a>
      </p>
      <p>Privacy Policy | Terms of Service</p>
      <p>Taskify — simple project management for modern teams.</p>
      <p className="footer-love">Made with ❤️ by Your Name</p>
      <div className="social-links">
        {/* Placeholder for social media icons */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

/**
 * Main App Component
 * Renders all the sections of the landing page in order.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

// Export the App component as the default export
export default App;
