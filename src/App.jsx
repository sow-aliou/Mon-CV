import './App.css'
import PrintButton from './components/PrintButton'
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaLayerGroup,
  FaUsers,
  FaLanguage,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe
} from './components/Icons'
import {
  education,
  experience,
  hardSkills,
  leftColumnSections,
  majorProjects,
  profile,
  softSkills,
  hobbies,
} from './data/cvData'

function renderContactLabel(item) {
  const label = typeof item === 'string' ? item : item.label
  const href = typeof item === 'string' ? undefined : item.href

  if (!href) return label

  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      className="contact-link"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {label}
    </a>
  )
}

function App() {
  const contactItems = leftColumnSections.find(s => s.title === 'CONTACT')?.items || [];
  const languesItems = leftColumnSections.find(s => s.title === 'LANGUES')?.items || [];
  
  // Icons matching each contact item in order: Phone, Email, Address, GitHub, LinkedIn, Portfolio
  const contactIcons = [FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe];

  // Arrange contacts: Phone, Email, Address on row 1; GitHub, LinkedIn, Portfolio on row 2
  const row1 = contactItems.slice(0, 3);
  const row2 = contactItems.slice(3);
  const row1Icons = contactIcons.slice(0, 3);
  const row2Icons = contactIcons.slice(3);

  return (
    <>
      <div className="cv-container">
        <header className="cv-header">
          <h1>{profile.name.toUpperCase()}</h1>
          <div className="profile-title">{profile.title.toUpperCase()}</div>
          <div className="contact-info">
            <div className="contact-row">
              {row1.map((item, index) => {
                const Icon = row1Icons[index];
                return (
                  <span key={index} className="contact-item">
                    <Icon className="contact-icon" />
                    {renderContactLabel(item)}
                    {index < row1.length - 1 && <span className="contact-dot">•</span>}
                  </span>
                );
              })}
            </div>
            {row2.length > 0 && (
              <div className="contact-row">
                {row2.map((item, index) => {
                  const Icon = row2Icons[index];
                  return (
                    <span key={index} className="contact-item">
                      <Icon className="contact-icon" />
                      {renderContactLabel(item)}
                      {index < row2.length - 1 && <span className="contact-dot">•</span>}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </header>

        <section className="cv-section">
          <h2><FaUser className="section-icon" /> PROFIL</h2>
          <p className="objective">{profile.summary}</p>
        </section>

        <section className="cv-section">
          <h2><FaGraduationCap className="section-icon" /> FORMATION</h2>
          <div className="timeline">
            {education.map((item, index) => {
              const parts = item.school.split(' | ');
              const schoolStr = parts[0];
              const yearStr = parts.length > 1 ? parts[1] : '';
              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header-row">
                      <strong className="timeline-degree">{item.degree}</strong>
                      <span className="timeline-year">{yearStr}</span>
                    </div>
                    <span className="timeline-school">{schoolStr}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="cv-section">
          <h2><FaBriefcase className="section-icon" /> EXPÉRIENCE PROFESSIONNELLE</h2>
          <div className="experience-list">
            {experience.map((item, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <strong className="experience-title">{item.title}</strong>
                  <span className="experience-period">{item.period}</span>
                </div>
                <div className="experience-company">
                  <em>{item.company}</em>
                </div>
                <ul className="experience-description">
                  {item.description.split('\n').map((bullet, i) => (
                    bullet.trim() && <li key={i}>{bullet.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2><FaRocket className="section-icon" /> PROJETS</h2>
          <div className="projects-list">
            {majorProjects.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <strong className="project-name">{item.name}</strong>
                  <div className="project-tags">
                    {item.tech.split(', ').map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <ul className="project-description-list">
                  {item.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2><FaLayerGroup className="section-icon" /> COMPÉTENCES TECHNIQUES</h2>
          <ul className="cv-no-bullet">
            {hardSkills.map((skill, index) => (
              <li key={index}>
                <strong>{skill.category} : </strong>
                {skill.tags.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        <div className="cv-footer-row">
          <section className="cv-section">
            <h2><FaUsers className="section-icon" /> SOFT SKILLS</h2>
            <ul className="cv-circle-bullets">
               {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
               ))}
            </ul>
          </section>

          <section className="cv-section">
            <h2><FaLanguage className="section-icon" /> LANGUES</h2>
            <div className="languages-list">
              {languesItems.map((langue, index) => {
                const [lang, level] = langue.split(' : ');
                return (
                  <div key={index} className="cv-item skill-item language-item">
                    <strong>{lang}</strong>
                    <span className="language-level">{level}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="cv-section">
            <h2><FaHeart className="section-icon" /> CENTRES D'INTÉRÊT</h2>
            <ul className="cv-circle-bullets">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

      </div>
      <PrintButton />
    </>
  )
}

export default App
