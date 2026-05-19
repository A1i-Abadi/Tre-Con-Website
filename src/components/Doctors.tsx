import { useReveal } from '../hooks/useReveal';
import './Doctors.scss';

const consultants = [
  {
    name: 'Dr. Ebrahim Mahdi',
    role: 'Neuro Specialist',
    image: '/images/Dr-1.jpeg',
  },
  {
    name: 'Dr. Mohammed A.nabi',
    role: 'Physiotherapist - Impact Owner',
    image: '/images/Dr-2.jpeg',
  },
  {
    name: 'Dr. Mohammed Albin Falah',
    role: 'Consultant Neurologist and Medical Director of the University Medical Center at King Abdullah Bin Abdulaziz Medical City',
    image: '/images/Dr-3.jpeg',
  },
  {
    name: 'Salmaniya Engineering Department',
    role: 'Engineering Partner',
    image: '/images/Dr-4.jpeg',
  },
  {
    name: 'Dr. Salman Alfardan',
    role: 'Life coach',
    image: '/images/Dr-5.jpeg',
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
              <div className="doctors__photo">
                <div className="doctors__photo-frame" />
                <img
                  src={person.image}
                  alt={person.name}
                  className="doctors__photo-img"
                  loading="lazy"
                />
              </div>
              
              <div className="doctors__content">
                <span className="doctors__role">{person.role}</span>
                <h3 className="doctors__name">{person.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
