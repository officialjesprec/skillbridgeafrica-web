import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";

// Page Imports
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";
import { TrainerSignUpPage } from "./pages/TrainerSignUpPage";
import { TrainerSignInPage } from "./pages/TrainerSignInPage";
import { TrainerProfilePage } from "./pages/TrainerProfilePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ContactPage } from "./pages/ContactPage";
import { TrainerDashboard } from "./pages/TrainerDashboard";
import { LearnerDashboard } from "./pages/LearnerDashboard";
import { SkillsPage } from "./pages/SkillsPage";
import { TrainersPage } from "./pages/TrainersPage";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth Pages (No Header/Footer) */}
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/trainer-signup" element={<TrainerSignUpPage />} />
          <Route path="/trainer-signin" element={<TrainerSignInPage />} />
          
          {/* Main Website (With Header/Footer) */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/trainer/:id" element={<TrainerProfilePage />} />
            <Route path="/dashboard/trainer" element={<TrainerDashboard />} />
            <Route path="/dashboard/learner" element={<LearnerDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}