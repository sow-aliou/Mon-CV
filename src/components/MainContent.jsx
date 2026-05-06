import { FaBriefcase, FaCheck, FaCode, FaGraduationCap, FaHeart, FaLeaf, FaPlane, FaRunning, FaUser, FaUsers } from 'react-icons/fa'

function getHobbyIcon(hobby) {
  if (hobby.includes('Agriculture')) return <FaLeaf className="item-icon" aria-hidden="true" />
  if (hobby.includes('Voyage')) return <FaPlane className="item-icon" aria-hidden="true" />
  if (hobby.includes('Programmation')) return <FaCode className="item-icon" aria-hidden="true" />
  return <FaRunning className="item-icon" aria-hidden="true" />
}

function MainContent({ profile, majorProjects, education, softSkills, hobbies }) {
  return (
    <main className="main">
      <section className="main-section">
        <h3 className="main-title">
          <FaUser className="title-icon" aria-hidden="true" />
          <span>PROFIL</span>
        </h3>
        <p className="profile-text">{profile.summary}</p>
      </section>

      <section className="main-section">
        <h3 className="main-title">
          <FaGraduationCap className="title-icon" aria-hidden="true" />
          <span>FORMATION</span>
        </h3>
        {education.map((item) => (
          <article key={item.degree} className="edu-item">
            <h4 className="edu-title">{item.degree}</h4>
            <p className="edu-sub">{item.school}</p>
          </article>
        ))}
      </section>

      <section className="main-section">
        <h3 className="main-title">
          <FaBriefcase className="title-icon" aria-hidden="true" />
          <span>PROJETS MAJEURS</span>
        </h3>
        {majorProjects.map((project) => (
          <article key={project.name} className="project">
            <div className="project-head">
              <h4 className="project-title">{project.name}</h4>
              <span className="tech">{project.tech}</span>
            </div>
            <p className="project-text">{project.description}</p>
          </article>
        ))}
      </section>

      <div className="cols">
        <section className="main-section">
          <h3 className="main-title">
            <FaHeart className="title-icon" aria-hidden="true" />
            <span>HOBBIES</span>
          </h3>
          <ul className="hobbies-list">
            {hobbies.map((hobby) => (
              <li key={hobby}>
                {getHobbyIcon(hobby)}
                <span>{hobby}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="main-section">
          <h3 className="main-title">
            <FaUsers className="title-icon" aria-hidden="true" />
            <span>SOFT SKILLS</span>
          </h3>
          <ul className="soft-list">
            {softSkills.map((skill) => (
              <li key={skill}>
                <FaCheck className="item-icon" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

    </main>
  )
}

export default MainContent
