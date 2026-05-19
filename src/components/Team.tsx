import { TbBrandLinkedin } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Team.scss';

const teamMembers = [
  {
    name: 'Mohammed Alhanoun',
    role: 'Electrical Engineer',
    image: '/images/avatar-placeholder.png',
    linkedin: 'https://www.linkedin.com/in/mohammed-khalil-alhanoun-a7a8b127a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Ali Ahmed',
    role: 'Electrical Engineer',
    image: '/images/avatar-placeholder.png',
    linkedin: 'https://www.linkedin.com/in/ali-altooq-969b19350?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Ahmed Hussain',
    role: 'Electrical Engineer',
    image: '/images/avatar-placeholder.png',
    linkedin: 'https://www.linkedin.com/in/ahmed-abdulla-a97b17351?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section className="team" id="team" ref={ref}>
      <div className="team__inner">
        <div className="team__header reveal">
          <span className="team__label">Engineering</span>
          <h2 className="team__title">The Precision Team</h2>
          <p className="team__subtitle">
            The minds behind the Tre-Con biomedical system.
          </p>
        </div>

        <div className="team__grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team__card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="team__avatar">
                <div className="team__avatar-ring" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__avatar-img"
                  loading="lazy"
                />
              </div>
              
              <span className="team__role">{member.role}</span>
              <h3 className="team__name">{member.name}</h3>

              <div className="team__socials">
                <a
                  href={member.linkedin}
                  className="team__social-link"
                  aria-label={`${member.name} LinkedIn`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
