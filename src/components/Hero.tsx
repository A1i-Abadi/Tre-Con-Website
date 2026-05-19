import { TbArrowRight } from 'react-icons/tb';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Circuit board background */}
      <div className="hero__bg-pattern" />

      {/* Radial glow */}
      <div className="hero__glow" />

      {/* ECG waveform */}
      <svg className="hero__ecg" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <polyline
          points="0,40 100,40 120,40 140,20 160,60 180,10 200,70 220,35 240,40 360,40 380,40 400,20 420,60 440,10 460,70 480,35 500,40 620,40 640,40 660,20 680,60 700,10 720,70 740,35 760,40 880,40 900,40 920,20 940,60 960,10 980,70 1000,35 1020,40 1140,40 1160,40 1180,20 1200,60 1220,10 1240,70 1260,35 1280,40 1440,40"
        />
      </svg>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Senior Design Project
        </div>

        <h1 className="hero__title">Tre-Con</h1>

        <p className="hero__subtitle">
          Department of Electrical & Electronics Engineering
          <span className="separator" />
          UOB
        </p>

        <p className="hero__tagline">
          <strong>Tre-Con</strong> is a smart wristband for tremor detection and treatment support in Parkinson’s disease
        </p>

        <a href="#features" className="hero__cta" id="explore-cta">
          Explore System Specs
          <TbArrowRight />
        </a>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
