import Landing from "./components/landing-section/landing";
import Navbar from "./components/navbar/navbar";
import ProfileSection from "./components/profile-section/profile-section";
import ProjectSection from "./components/project-section/project-section";

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <ProfileSection />
      <ProjectSection />
    </>
  );
}
