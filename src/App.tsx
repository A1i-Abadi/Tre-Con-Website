import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Gallery from './components/Gallery';
import Report from './components/Report';
import ReportPreview from './components/ReportPreview';
import Doctors from './components/Doctors';
import Team from './components/Team';
import Footer from './components/Footer';
import EcgDivider from './components/EcgDivider';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcgDivider />
        <Features />
        <EcgDivider />
        <Methodology />
        <EcgDivider />
        <Gallery />
        <EcgDivider />
        <Report />
        <ReportPreview />
        <EcgDivider />
        <Doctors />
        <Team />
      </main>
      <Footer />
    </>
  );
}
