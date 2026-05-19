import { TbPlugConnected, TbTargetArrow, TbShieldCheck } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Features.scss';

const features = [
  {
    icon: <TbPlugConnected />,
    label: 'Dependency',
    title: 'Independent Operation',
    description: 'Trained to act separately, ensuring robust and autonomous performance under varying conditions.',
  },
  {
    icon: <TbTargetArrow />,
    label: 'Accuracy',
    title: 'Precision Fidelity',
    description: 'Delivering a close result to the real data collected, validated through systematic testing.',
  },
  {
    icon: <TbShieldCheck />,
    label: 'Reliability',
    title: 'Adaptable Fit',
    description: 'Engineered to reliably fit different requirements, keeping performance consistent across applications.',
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
            Tre-Con is a precision-engineered biomedical system built and tested as part of our senior design project.
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
