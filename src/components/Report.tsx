import { TbFileDownload, TbFileDescription } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Report.scss';

export default function Report() {
  const ref = useReveal();

  const handleDownload = () => {
    // In a real scenario, this would link to the actual PDF
    console.log('Downloading project report...');
  };

  return (
    <section className="report" id="report" ref={ref}>
      <div className="report__inner">
        <div className="report__card reveal">
          <span className="report__corner report__corner--tl" />
          <span className="report__corner report__corner--tr" />
          <span className="report__corner report__corner--bl" />
          <span className="report__corner report__corner--br" />

          <TbFileDescription className="report__icon" />
          
          <span className="report__label">Documentation</span>
          <h2 className="report__title">Final Project Report</h2>
          <p className="report__desc">
            Comprehensive documentation detailing the system architecture, component selection, methodology, testing protocols, and final results of the Tre-Con biomedical system.
          </p>

          <button className="report__btn" onClick={handleDownload}>
            <TbFileDownload />
            Download PDF Report
          </button>

          <div className="report__meta">
            PDF • 4.2 MB • v1.0 • May 2025
          </div>
        </div>
      </div>
    </section>
  );
}
