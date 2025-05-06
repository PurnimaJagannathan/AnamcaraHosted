import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ITInfrastructure from './pages/ITInfrastructure';
import CareerCounselling from './pages/CareerCounselling';
import TeacherTraining from './pages/TeacherTraining';
import CBSECertification from './pages/CBSECertification';
import SupportServices from './pages/SupportServices';
import ATALTinkeringLab from './pages/ATALTinkeringLab';
import IFPDetails from './pages/IFPDetails';
import ComputerLabs from './pages/ComputerLabs';
import AILabs from './pages/AILabs';
import Contact from './pages/Contact';
import PersonalizedApproach from './pages/PersonalizedApproach';
import Curriculum from './pages/Curriculum';
import EndToEndSupport from './pages/EndToEndSupport';
import ExpertGuidance from './pages/ExpertGuidance';
import InnovationFocus from './pages/InnovationFocus';
import FutureOfEdTech from './pages/FutureOfEdTech';
import LatestAITools from './pages/LatestAITools';
import CareerCounselingBlog from './pages/CareerCounselingBlog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
            <Route path="/services/career-counselling" element={<CareerCounselling />} />
            <Route path="/services/teacher-training" element={<TeacherTraining />} />
            <Route path="/services/cbse-support" element={<CBSECertification />} />
            <Route path="/services/support-services" element={<SupportServices />} />
            <Route path="/services/atal-lab" element={<ATALTinkeringLab />} />
            <Route path="/services/ifp" element={<IFPDetails />} />
            <Route path="/services/computer-labs" element={<ComputerLabs />} />
            <Route path="/services/ai-labs" element={<AILabs />} />
            <Route path="/services/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personalized-approach" element={<PersonalizedApproach />} />
            <Route path="/end-to-end-support" element={<EndToEndSupport />} />
            <Route path="/expert-guidance" element={<ExpertGuidance />} />
            <Route path="/innovation-focus" element={<InnovationFocus />} />
            <Route path="/blog/future-of-education-technology" element={<FutureOfEdTech />} />
            <Route path="/blog/latest-ai-tools-for-teachers" element={<LatestAITools />} />
            <Route path="/blog/career-counseling-importance" element={<CareerCounselingBlog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;