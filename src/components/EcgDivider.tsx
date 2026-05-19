import './EcgDivider.scss';

export default function EcgDivider() {
  return (
    <div className="ecg-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <polyline
          points="0,30 180,30 200,30 215,12 230,48 245,5 260,55 275,25 290,30 470,30 490,30 505,12 520,48 535,5 550,55 565,25 580,30 760,30 780,30 795,12 810,48 825,5 840,55 855,25 870,30 1050,30 1070,30 1085,12 1100,48 1115,5 1130,55 1145,25 1160,30 1340,30 1360,30 1375,12 1390,48 1405,5 1420,55 1435,25 1440,30"
        />
      </svg>
    </div>
  );
}
