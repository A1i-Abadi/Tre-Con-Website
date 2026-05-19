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
              Smart wristband for Parkinson's tremor detection and FES treatment support.<br />
              Senior Design Project.
            </p>
          </div>

          <div className="footer__info">
            <h4 className="footer__uni">University of Bahrain (UOB)</h4>
            <p className="footer__dept">Department of Electrical & Electronics Engineering</p>
            {/* <a href="mailto:contact@trecon.edu" className="footer__contact">
              contact@trecon.edu
            </a> */}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Tre-Con Team. All rights reserved.
          </p>
          
          <div className="footer__badges">
            <span className="footer__badge">Tremor Monitoring</span>
            <span className="footer__badge">FES Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
