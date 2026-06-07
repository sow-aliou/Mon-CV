import {
  FaAddressBook,
  FaCarSide,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaIdCard,
  FaInfoCircle,
  FaLinkedin,
  FaMapMarkerAlt,
  FaLanguage,
} from 'react-icons/fa'

function getSectionIcon(sectionTitle, item) {
  if (sectionTitle === 'CONTACT') {
    if (item.includes('@')) return <FaEnvelope className="item-icon" aria-hidden="true" />
    if (item.includes('github')) return <FaGithub className="item-icon" aria-hidden="true" />
    if (item.includes('linkedin')) return <FaLinkedin className="item-icon" aria-hidden="true" />
    return <FaMapMarkerAlt className="item-icon" aria-hidden="true" />
  }
  return null
}

function getGeneralInfoIcon(item) {
  if (item.includes('Permis')) return <FaIdCard className="item-icon" aria-hidden="true" />
  return <FaCarSide className="item-icon" aria-hidden="true" />
}

function getSectionTitleIcon(sectionTitle) {
  if (sectionTitle === 'CONTACT') return <FaAddressBook className="title-icon" aria-hidden="true" />
  if (sectionTitle === 'LANGUES') return <FaLanguage className="title-icon" aria-hidden="true" />
  if (sectionTitle === 'HARD SKILLS') return <FaCode className="title-icon" aria-hidden="true" />
  return <FaInfoCircle className="title-icon" aria-hidden="true" />
}

function Sidebar({ profile, leftColumnSections, hardSkills, generalInfo }) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <h1 className="name">{profile.name}</h1>
        <p className="title">{profile.title}</p>
      </div>

      {leftColumnSections.map((section) => (
        <section key={section.title} className="left-section">
          <h3 className="section-title">
            {getSectionTitleIcon(section.title)}
            <span>{section.title}</span>
          </h3>
          <ul className="left-list">
            {section.items.map((item) => (
              <li key={item}>
                {getSectionIcon(section.title, item)}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="left-section">
        <h3 className="section-title">
          {getSectionTitleIcon('HARD SKILLS')}
          <span>HARD SKILLS</span>
        </h3>
        {hardSkills.map((skill) => (
          <div key={skill.category} className="skill-category">
            <p className="cat-title">{skill.category}</p>
            <div className="tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="left-section">
        <h3 className="section-title">
          {getSectionTitleIcon('INFOS GÉNÉRALES')}
          <span>INFOS GÉNÉRALES</span>
        </h3>
        <ul className="left-list">
          {generalInfo.map((item) => (
            <li key={item}>
              {getGeneralInfoIcon(item)}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
