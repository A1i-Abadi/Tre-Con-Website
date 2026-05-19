import { TbPlugConnected, TbTargetArrow, TbShieldCheck } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Features.scss';

const features = [
  {
    icon: <TbPlugConnected />,
    label: 'Dependency',
    title: 'Independent Operation',
    description: 'Trained to act separately, ensuring robust performance even under varying conditions and isolated subsystem scenarios.',
  },
  {
    icon: <TbTargetArrow />,
    label: 'Accuracy',
    title: 'High-Fidelity Data',
    description: 'Delivering a close result to real-world data collected, validated through rigorous testing and calibration protocols.',
  },
  {
    icon: <TbShieldCheck />,
    label: 'Reliability',
    title: 'Adaptable & Dependable',
    description: 'Built to reliably fit different requirements, maintaining consistent output across diverse operational parameters.',
  },
];

export default function Features() {
  const ref = useReveal();

  return (
    <section className="features" id="features" ref={ref}>
      <div className="features__inner">
        <div className="features__header reveal">
          <span className="features__label">Core System</span>
          <h2 className="features__title">System Principles</h2>
          <p className="features__subtitle">
            The foundational pillars driving Tre-Con's biomedical precision architecture.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="features__card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Corner brackets */}
              <span className="features__corner features__corner--tl" />
              <span className="features__corner features__corner--tr" />
              <span className="features__corner features__corner--bl" />
              <span className="features__corner features__corner--br" />

              <div className="features__icon-wrap">
                <span className="features__icon">{feature.icon}</span>
              </div>
              <span className="features__card-label">{feature.label}</span>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
