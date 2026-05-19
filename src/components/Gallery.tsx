import { useReveal } from '../hooks/useReveal';
import './Gallery.scss';

interface GalleryItem {
  src: string;
  type?: 'image' | 'video';
  tag: string;
  title: string;
  caption: string;
  featured?: boolean;
  wide?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/trecon-device.jpeg',
    type: 'image',
    tag: 'Hardware',
    title: 'THE TRE-CON WRISTBAND',
    caption:
      'The fully integrated 3D-printed modular wristband featuring EMG and IMU sensors for real-time tremor detection and analysis.',
    featured: true,
  },
  {
    src: '/images/trecon-device-2.jpeg',
    type: 'image',
    tag: 'Hardware Architecture',
    title: 'EMBEDDED CIRCUIT DESIGN',
    caption:
      'A detailed view of the custom-engineered electronic circuitry and hardware components integrated within the wristband module.',
  },
  {
    src: '/videos/website-1.mp4',
    type: 'video',
    tag: 'Platform Demo',
    title: 'SYSTEM OPERATION',
    caption:
      'Visual demonstration of the Tre-Con web application and real-time data visualization.',
  },
  {
    src: '/images/trecon-device-3.jpeg',
    type: 'image',
    tag: 'Prototyping & Assembly',
    title: 'STRIPBOARD CIRCUIT INTEGRATION',
    caption:
      'Precision stripboard soldering engineered to enhance electrical connections, ensuring maximum reliability and system dependability under active operation.',
  },
  {
    src: '/videos/website-2.mp4',
    type: 'video',
    tag: 'Live Demo',
    title: 'LIVE INTERACTION',
    caption:
      'Showcasing the real-time responsiveness and features of the developed platform in action.',
    wide: true,
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
              } ${item.wide ? 'gallery__item--wide' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="gallery__image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery__image"
                  loading="lazy"
                />
              )}
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
