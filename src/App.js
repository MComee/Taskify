import React, { useState } from 'react';
import './App.css';

/**
 * Navbar Component
 * Renders a sticky navigation bar with a logo and navigation links.
 * Includes responsive behavior with a hamburger menu for smaller screens.
 */
function Navbar() {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo - links to the top of the page */}
        <a href="#" className="logo">Taskify</a>
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
    </nav>
  );
}

/**
 * Hero Section Component
 * Displays the main heading, a descriptive paragraph, and call-to-action buttons.
 */
function HeroSection() {
  return (
    <section className="App-section hero-section">
      <h1>Organize your team’s work in minutes.</h1>
      <p>Taskify helps remote teams stay aligned, boost productivity, and hit deadlines without the chaos of endless emails.</p>
      <button>Get Started Free</button>
      <a href="#" className="secondary-cta">Watch Demo</a>
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
      <div className="service-item">
        <h3>Simple Task Management</h3>
        <p>Create, assign, and track tasks with zero learning curve.</p>
      </div>
      <div className="service-item">
        <h3>Real-Time Collaboration</h3>
        <p>Chat and update tasks instantly with your team.</p>
      </div>
      <div className="service-item">
        <h3>Smart Notifications</h3>
        <p>Never miss a deadline with reminders that actually help.</p>
      </div>
      <div className="service-item">
        <h3>Mobile Ready</h3>
        <p>Stay productive anywhere with a responsive app.</p>
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
      <div className="testimonial-item">
        <p>"Taskify reduced our project delays by 40%. It’s a game-changer for our agency."</p>
        <p>- Sarah L., Marketing Manager</p>
      </div>
      <div className="testimonial-item">
        <p>"Our remote team finally feels connected. Taskify is simple, fast, and reliable."</p>
        <p>- David R., Startup Founder</p>
      </div>
      <div className="testimonial-item">
        <p>"We tried 3 other tools, but Taskify was the only one our team actually enjoyed using."</p>
        <p>- Priya K., Operations Lead</p>
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
      <div className="pricing-plan">
        <h3>Starter (Free)</h3>
        <p>For individuals and small teams just getting started.</p>
        <button>Get Started</button>
      </div>
      <div className="pricing-plan">
        <h3>Pro ($9/month)</h3>
        <p>Unlimited projects and advanced features for growing teams.</p>
        <button>Get Started</button>
      </div>
      <div className="pricing-plan">
        <h3>Team ($29/month)</h3>
        <p>Best for companies managing multiple teams and projects.</p>
        <button>Get Started</button>
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
