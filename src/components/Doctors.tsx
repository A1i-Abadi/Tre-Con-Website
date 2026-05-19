import { useReveal } from '../hooks/useReveal';
import './Doctors.scss';

const consultants = [
  {
    name: 'Dr. Jane Doe',
    role: 'Medical Advisor',
    image: '/images/doctor-placeholder.png', // Will generate
  },
  {
    name: 'Dr. John Smith',
    role: 'Clinical Consultant',
    image: '/images/doctor-placeholder.png', // Will generate
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Cardiology Specialist',
    image: '/images/doctor-placeholder.png', // Will generate
  },
  {
    name: 'Dept. of Biomedical Eng.',
    role: 'University Affiliation',
    image: '/images/dept-placeholder.png', // Will generate
  },
];

export default function Doctors() {
  const ref = useReveal();

  return (
    <section className="doctors" id="doctors" ref={ref}>
      <div className="doctors__inner">
        <div className="doctors__header reveal">
          <span className="doctors__label">Consultation & Support</span>
          <h2 className="doctors__title">Advisory Board</h2>
          <p className="doctors__subtitle">
            Special thanks to the medical professionals and university departments who provided crucial guidance for this project.
          </p>
        </div>

        <div className="doctors__grid">
          {consultants.map((person, index) => (
            <div
              key={person.name}
              className="doctors__card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="doctors__avatar">
                <div className="doctors__avatar-ring" />
                <img
                  src={person.image}
                  alt={person.name}
                  className="doctors__avatar-img"
                  loading="lazy"
                />
              </div>
              
              <span className="doctors__role">{person.role}</span>
              <h3 className="doctors__name">{person.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
