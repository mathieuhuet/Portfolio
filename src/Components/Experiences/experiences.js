import './experiences.css';
import React,{ useState } from 'react'

function Experiences () {

  const experiences = [
    {
      id: 0,
      institution: 'Université du Québec à Montréal',
      languages: ['Java', 'Assembly Language', 'MySQL', 'C++', 'Linux', 'Android Studio'],
      date: '2017-2020',
    },
    {
      id: 1,
      institution: 'Innovation Mi8',
      languages: ['Python', 'Bash', 'OpenVPN', 'Linux'],
      date: '2021-2022',
    },
    {
      id: 2,
      institution: 'Codeworks Bootcamp',
      languages: ['Javascript', 'React', 'HTML', 'CSS', 'SQL', 'NoSQL', 'MongoDB', 'Redux', 'TypeScript', "GraphQL", 'Express', 'koa', 'Angular', 'Git', 'JSON', 'API'],
      date: '2022-2023',
    },
    {
      id: 3,
      institution: 'Battery Monitoring',
      languages: ['Javascript', 'React', 'Koa', 'PostgreSQL', 'SNMP', 'UDP/IP', 'OpenVPN', 'API'],
      date: '2023',
    }
  ];


  const [result, setResult] = useState(experiences);
  const [search, setSearch] = useState('')
  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };


  return (
    <div className="Experiences">
      <div className='ExperienceSearch'>
        <input 
          type="text" 
          value={search} 
          onChange={handleChangeSearch} 
          placeholder='Search...'
          className='SearchBar'
        />
      </div>
      <div className='ExperienceList'>
        {result.map(exp => 
          <div className='IndividualExperience' key={exp.id}>
            <div className='IETop'>
              <div className='IEInstitution'>
                {exp.institution}
              </div>
              <div className='IEDate'>
                {exp.date}
              </div>
            </div>
            <div className='IEBottom'>
              <div className='IELanguages'>
                {exp.languages.map(lang =>
                  <div className="Languages" key={lang}>
                    {lang}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experiences;