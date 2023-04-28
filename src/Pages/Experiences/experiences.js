import './experiences.css';
import React,{ useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';


function Experiences () {
  let navigate = useNavigate();
  const experiences = useMemo(() => [
    {
      id: 0,
      institution: 'Battery Monitoring',
      languages: ['Node.js', 'Javascript', 'React', 'PostgreSQL', 'Sequelize', 'Koa', 'RESTful API', 'SNMP', 'UDP/IP', 'OpenVPN', 'Git', 'IoT'],
      date: '2023',
      route: 'battery_monitoring',
    },
    {
      id: 1,
      institution: 'Codeworks Bootcamp',
      languages: ['Node.js', 'Javascript', 'TypeScript', 'React', 'React Native', 'Redux', 'Angular', 'jQuery', 'HTML', 'CSS', 'SQL', 'NoSQL', "GraphQL", 'Sequelize ORM', 'MongoDB', 'Mongoose ORM', 'Redis', 'Express', 'Koa', 'Expo', 'Git', 'JSON', 'RESTful API', 'Socket.IO', 'Linux/Unix'],
      date: '2022-2023',
      route: 'codeworks',
    },
    {
      id: 2,
      institution: 'Innovation Mi8',
      languages: ['Python', 'OpenVPN', 'Linux/Unix/Bash', 'TCP/IP', 'UDP/IP', 'IoT'],
      date: '2021-2022',
      route: 'mi8',
    },
    {
      id: 3,
      institution: 'Université du Québec à Montréal',
      languages: ['Java', 'Assembly Language', 'MySQL', 'C++', 'Linux/Unix/Bash', 'Android Studio', 'GUI', 'HTML', 'CSS'],
      date: '2017-2020',
      route: 'uqam',
    }
  ], []);


  const [result, setResult] = useState(experiences);
  const [search, setSearch] = useState('')
  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  useEffect(() => {
    let res = [];
    for (let i = 0; i < experiences.length; i++) {
      if (experiences[i].institution.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        for (let j = 0; j < experiences[i].languages.length; j++) {
          if (experiences[i].languages[j].toLowerCase().indexOf(search.toLowerCase()) === -1) {
            //do nothing, no match
          } else {
            //leave the loop, we found a match.
            j = experiences[i].languages.length
            res.push(experiences[i]);
          }
        }
      }
      else {
        res.push(experiences[i]);
      }
    }
    setResult(res);
  }, [search, experiences])



  return (
    <div className="Experiences">
      <div className='ExperienceSearch'>
        <div>
          <input 
            type="text" 
            value={search} 
            onChange={handleChangeSearch} 
            placeholder='Search...'
            className='SearchBar'
          />
        </div>
      </div>
      <div className='ExperienceList'>
        {result.map(exp => 
          <div className='IndividualExperience' key={exp.id} onClick={() => {
            navigate(`/${exp.route}`);
          }}>
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