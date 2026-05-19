import {
  TbArrowRight,
  TbArrowDown,
  TbActivity,
  TbCpu,
  TbWifi,
  TbDeviceDesktopAnalytics,
  TbBolt,
} from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Methodology.scss';

const pipelineSteps = [
  {
    num: '01',
    label: 'Data Acquisition',
    title: 'EMG & IMU Sensors',
    description:
      'Real-time capture of muscle activity and kinematic motion using high-precision, low-cost wearable sensors.',
  },
  {
    num: '02',
    label: 'Hardware Design',
    title: '3D-Printed & Modular',
    description:
      'A rigorously tested, modular 3D-printed wristband designed for everyday comfort, reliability, and durability.',
  },
  {
    num: '03',
    label: 'Monitoring',
    title: 'Web & Mobile Apps',
    description:
      'Seamless data synchronization to a dedicated Neurologist website and a Family monitoring mobile application.',
  },
  {
    num: '04',
    label: 'Therapy',
    title: 'FES-Based Support',
    description:
      'Targeted Functional Electrical Stimulation (FES) deployed automatically to suppress tremors based on real-time analysis.',
  },
];

const diagramBlocks = [
  { icon: <TbActivity />, label: 'EMG & IMU' },
  { icon: <TbCpu />, label: 'Processing' },
  { icon: <TbWifi />, label: 'Wireless Tx' },
  { icon: <TbDeviceDesktopAnalytics />, label: 'Web/App Monitor' },
  { icon: <TbBolt />, label: 'FES Support' },
];

export default function Methodology() {
  const ref = useReveal();

  return (
    <section className="methodology" id="methodology" ref={ref}>
      <div className="methodology__inner">
        <div className="methodology__header reveal">
          <span className="methodology__label">Technical Pipeline</span>
          <h2 className="methodology__title">Methodology & Architecture</h2>
          <p className="methodology__subtitle">
            A modular, low-cost wearable system for Parkinson’s tremor monitoring and FES-based treatment support.
          </p>
        </div>

        {/* Pipeline Timeline */}
        <div className="methodology__pipeline">
          {pipelineSteps.map((step, index) => (
            <div
              key={step.num}
              className="methodology__step reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="methodology__step-node">{step.num}</div>
              <div className="methodology__step-content">
                <span className="methodology__step-label">{step.label}</span>
                <h3 className="methodology__step-title">{step.title}</h3>
                <p className="methodology__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Block Diagram */}
        <div className="methodology__diagram reveal">
          <h3 className="methodology__diagram-title">
            ── System Block Diagram ──
          </h3>
          <div className="methodology__diagram-flow">
            {diagramBlocks.map((block, index) => (
              <div key={block.label} style={{ display: 'contents' }}>
                <div className="methodology__block">
                  <span className="methodology__block-icon">{block.icon}</span>
                  <span className="methodology__block-label">{block.label}</span>
                </div>
                {index < diagramBlocks.length - 1 && (
                  <>
                    <span className="methodology__arrow methodology__arrow--desktop"
                      style={{ display: 'none' }}>
                      <TbArrowRight />
                    </span>
                    <span className="methodology__arrow methodology__arrow--mobile">
                      <TbArrowDown />
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
