import { useState } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './ReportPreview.scss';

const reportPages = [
  {
    id: 1,
    title: 'Executive Summary',
    image: '/images/report-page-1.png',
  },
  {
    id: 2,
    title: 'System Architecture',
    image: '/images/report-page-2.png',
  },
  {
    id: 3,
    title: 'Hardware Schematics',
    image: '/images/report-page-3.png',
  },
  {
    id: 4,
    title: 'PCB Layout Design',
    image: '/images/report-page-4.png',
  },
  {
    id: 5,
    title: 'Firmware Flowchart',
    image: '/images/report-page-5.png',
  },
  {
    id: 6,
    title: 'Signal Analysis Results',
    image: '/images/report-page-6.png',
  },
  {
    id: 7,
    title: 'Conclusion & Future Work',
    image: '/images/report-page-7.png',
  },
];

export default function ReportPreview() {
  const ref = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reportPages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reportPages.length - 1 : prev - 1));
  };

  return (
    <section className="report-preview" id="report-preview" ref={ref}>
      <div className="report-preview__inner">
        <div className="report-preview__header reveal">
          <span className="report-preview__label">Document Preview</span>
          <h2 className="report-preview__title">Key Project Pages</h2>
          <p className="report-preview__subtitle">
            A curated selection of the most critical schematics, designs, and findings from our final engineering report.
          </p>
        </div>

        <div className="report-preview__carousel reveal">
          {/* Main Viewer */}
          <div className="report-preview__viewer">
            {reportPages.map((page, index) => (
              <div
                key={page.id}
                className={`report-preview__slide ${index === activeIndex ? 'active' : ''}`}
              >
                <img src={page.image} alt={page.title} className="report-preview__slide-img" loading="lazy" />
                <div className="report-preview__slide-overlay">
                  <h3 className="report-preview__slide-title">{page.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="report-preview__controls">
            <button className="report-preview__btn" onClick={prevSlide} aria-label="Previous slide">
              <TbChevronLeft />
            </button>
            <div className="report-preview__counter">
              <span>{activeIndex + 1}</span> / {reportPages.length}
            </div>
            <button className="report-preview__btn" onClick={nextSlide} aria-label="Next slide">
              <TbChevronRight />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="report-preview__thumbnails">
            {reportPages.map((page, index) => (
              <button
                key={page.id}
                className={`report-preview__thumb ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${page.title}`}
              >
                <img src={page.image} alt={`Thumbnail ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
