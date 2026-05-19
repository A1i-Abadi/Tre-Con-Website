import { TbFileDownload, TbFileDescription } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Report.scss';

export default function Report() {
  const ref = useReveal();

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

          <a 
            href="/documents/Senior Project Report - TreCon.pdf" 
            className="report__btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <TbFileDownload />
            Download PDF Report
          </a>

          <div className="report__meta">
            PDF • Official Release
          </div>
        </div>
      </div>
    </section>
  );
}
