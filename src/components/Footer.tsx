import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              Tre<span>-</span>Con
            </div>
            <p className="footer__desc">
              Precision Biomedical System.<br />
              Senior Electrical Engineering Design Project.
            </p>
          </div>

          <div className="footer__info">
            <h4 className="footer__uni">University Name</h4>
            <p className="footer__dept">Department of Electrical Engineering</p>
            <a href="mailto:contact@trecon.edu" className="footer__contact">
              contact@trecon.edu
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Tre-Con Team. All rights reserved.
          </p>
          
          <div className="footer__badges">
            <span className="footer__badge">Biomedical</span>
            <span className="footer__badge">Precision Eng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
