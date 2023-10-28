import "./App.css";
import ResumeData from "./data/resume-data";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Training from "./components/Training";

const App = () => {
  console.log(ResumeData);
  return (
    <div className="app">
      <Header
        phoneNumber={ResumeData.phoneNumber}
        title={ResumeData.title}
        name={ResumeData.name}
        email={ResumeData.email}
        github={ResumeData.github}
        linkedin={ResumeData.linkedin}
        website={ResumeData.website}
      />

      <AboutMe aboutme={ResumeData.aboutme} />
      <Skills skills={ResumeData.skills} />
      {/* <Frameworks frameworks={ResumeData.frameworks} /> */}
      <Experience experience={ResumeData.experience} />
      <Projects projects={ResumeData.projects} />
      {/* <PersonalProjects personalProjects={ResumeData.personalProjects} /> */}
      <Certifications certifications={ResumeData.certifications} />
      <Training trainings={ResumeData.trainings} />
      <Education education={ResumeData.education} />
    </div>
  );
};

export default App;
