import './App.css'
import MainContent from './components/MainContent'
import PrintButton from './components/PrintButton'
import Sidebar from './components/Sidebar'
import {
  education,
  generalInfo,
  hardSkills,
  hobbies,
  leftColumnSections,
  majorProjects,
  profile,
  softSkills,
} from './data/cvData'

function App() {
  return (
    <>
      <div className="cv-container">
        <Sidebar
          profile={profile}
          leftColumnSections={leftColumnSections}
          hardSkills={hardSkills}
          generalInfo={generalInfo}
        />
        <MainContent
          profile={profile}
          majorProjects={majorProjects}
          education={education}
          softSkills={softSkills}
          hobbies={hobbies}
        />
      </div>
      <PrintButton />
    </>
  )
}

export default App
