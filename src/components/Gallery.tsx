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
    tag: 'Hardware',
    title: 'THE TRE-CON WRISTBAND',
    caption:
      'The fully integrated 3D-printed modular wristband featuring EMG and IMU sensors for real-time tremor detection and analysis.',
    featured: true,
  },
  {
    src: '/images/trecon-device-2.jpeg',
    tag: 'Software Integration',
    title: 'REAL-TIME MONITORING',
    caption:
      'Seamless data synchronization displaying precise kinematic motion and muscle activity data for clinical review.',
    featured: false,
  },
  {
    src: '/images/trecon-device-3.jpeg',
    tag: 'Active Therapy',
    title: 'FES STIMULATION UNIT',
    caption:
      'The Functional Electrical Stimulation (FES) module, designed to deliver targeted support for active tremor suppression.',
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
