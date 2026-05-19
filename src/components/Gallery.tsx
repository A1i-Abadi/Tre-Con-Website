import { useReveal } from '../hooks/useReveal';
import './Gallery.scss';

interface GalleryItem {
  src: string;
  tag: string;
  title: string;
  caption: string;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/trecon-device.jpeg',
    tag: 'Primary Device',
    title: 'TRE-CON DEVICE LAYOUT',
    caption:
      'Shows the central blue control unit, orange retention strap, and the ECG electrode set with color-coded leads for signal acquisition.',
    featured: true,
  },
  {
    src: '/images/trecon-device.jpeg',
    tag: 'Signal Testing',
    title: 'SIGNAL ACQUISITION TEST',
    caption:
      'Live testing phase demonstrating real-time ECG waveform capture through the electrode interface. Signal integrity validated at 500Hz sampling.',
    featured: false,
  },
  {
    src: '/images/trecon-device.jpeg',
    tag: 'Circuit Board',
    title: 'PCB ASSEMBLY',
    caption:
      'Custom-designed PCB housing the instrumentation amplifier, bandpass filter network, and microcontroller unit for signal digitization.',
    featured: false,
  },
  {
    src: '/images/trecon-device.jpeg',
    tag: 'Calibration',
    title: 'SYSTEM CALIBRATION',
    caption:
      'Precision calibration procedure ensuring data fidelity against reference medical-grade equipment. Accuracy validated within ±2% tolerance.',
    featured: false,
  },
];

export default function Gallery() {
  const ref = useReveal();

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery__inner">
        <div className="gallery__header reveal">
          <span className="gallery__label">Documentation</span>
          <h2 className="gallery__title">Media Gallery</h2>
          <p className="gallery__subtitle">
            High-resolution documentation of the Tre-Con hardware and testing environment.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery__item reveal ${
                item.featured ? 'gallery__item--featured' : ''
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__frame" />
              <div className="gallery__overlay">
                <span className="gallery__tag">{item.tag}</span>
                <span className="gallery__caption-title">{item.title}</span>
                <p className="gallery__caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
