import {
  TbArrowRight,
  TbArrowDown,
  TbAntenna,
  TbCpu,
  TbFilter,
  TbChartLine,
  TbDeviceDesktopAnalytics,
} from 'react-icons/tb';
import { useReveal } from '../hooks/useReveal';
import './Methodology.scss';

const pipelineSteps = [
  {
    num: '01',
    label: 'Signal Input',
    title: 'Electrode Placement & Acquisition',
    description:
      'Color-coded ECG electrodes are placed on the subject to capture raw bioelectric signals from the cardiac muscle.',
  },
  {
    num: '02',
    label: 'Preprocessing',
    title: 'Noise Filtering & Amplification',
    description:
      'The raw signal passes through a bandpass filter (0.5–100 Hz) and instrumentation amplifier to remove EMG interference and power-line noise.',
  },
  {
    num: '03',
    label: 'Digitization',
    title: 'ADC Conversion & Sampling',
    description:
      'Analog signals are digitized at 500 Hz sampling rate using a high-resolution ADC for precise waveform reproduction.',
  },
  {
    num: '04',
    label: 'Processing',
    title: 'Feature Extraction & Analysis',
    description:
      'The digital signal is processed through our trained algorithms to extract P-QRS-T wave features and detect anomalies.',
  },
];

const diagramBlocks = [
  { icon: <TbAntenna />, label: 'Sensor Input' },
  { icon: <TbFilter />, label: 'Bandpass Filter' },
  { icon: <TbCpu />, label: 'MCU Processing' },
  { icon: <TbChartLine />, label: 'Feature Extract' },
  { icon: <TbDeviceDesktopAnalytics />, label: 'Display Output' },
];

export default function Methodology() {
  const ref = useReveal();

  return (
    <section className="methodology" id="methodology" ref={ref}>
      <div className="methodology__inner">
        <div className="methodology__header reveal">
          <span className="methodology__label">Technical Pipeline</span>
          <h2 className="methodology__title">Methodology & Electrical Specs</h2>
          <p className="methodology__subtitle">
            Biomedical signal acquisition and processing pipeline — from electrode
            contact to diagnostic output.
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
