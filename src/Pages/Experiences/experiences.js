import './experiences.css';
import React,{ useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';


function Experiences () {
  let navigate = useNavigate();
  const experiences = useMemo(() => [
    {
      id: 0,
      institution: 'GPMM_Alertes',
      blurb: "",
      languages: ['Node.js', 'Typescript', 'React', 'React Native', 'MongoDB', 'Mongoose', 'Express.js', 'RESTful API', 'Git'],
      date: '2023',
      route: 'gpmm',
    },
    {
      id: 1,
      institution: 'Friendly Bets',
      blurb: "",
      languages: ['Node.js', 'Typescript', 'React Native', 'MongoDB', 'Mongoose', 'Express.js', 'RESTful API', 'Git'],
      date: '2023',
      route: 'friendly_bets',
    },
    {
      id: 2,
      institution: 'Battery Monitoring',
      blurb: "",
      languages: ['Node.js', 'Javascript', 'React', 'PostgreSQL', 'Sequelize', 'Koa', 'RESTful API', 'SNMP', 'UDP/IP', 'OpenVPN', 'Git', 'IoT'],
      date: '2023',
      route: 'battery_monitoring',
    },
    {
      id: 3,
      institution: 'Codeworks Bootcamp',
      blurb: "",
      languages: ['Node.js', 'Javascript', 'TypeScript', 'React', 'React Native', 'Redux', 'Angular', 'jQuery', 'HTML', 'CSS', 'SQL', 'NoSQL', "GraphQL", 'Sequelize ORM', 'MongoDB', 'Mongoose ORM', 'Redis', 'Express', 'Koa', 'Docker', 'Expo', 'Git', 'JSON', 'RESTful API', 'Socket.IO', 'Linux/Unix'],
      date: '2022-2023',
      route: 'codeworks',
    },
    {
      id: 4,
      institution: 'Learn PHP Course',
      blurb: "",
      languages: ['HTML', 'CSS', 'PHP', 'JavaScript'],
      date: '2022',
      route: '',
    },
    {
      id: 5,
      institution: 'Innovation Mi8',
      blurb: "",
      languages: ['Python', 'OpenVPN', 'Linux/Unix/Bash', 'TCP/IP', 'UDP/IP', 'IoT'],
      date: '2021-2022',
      route: 'mi8',
    },
    {
      id: 6,
      institution: 'Crash Course on Python',
      blurb: "Certificat obtenu pour le cours en ligne autorisé par Google et proposé par l'intermédiaire de Coursera.",
      languages: ['Python'],
      date: '2020',
      route: '',
    },
    {
      id: 7,
      institution: 'Université du Québec à Montréal',
      blurb: "",
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
          <>
          {exp.route &&
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
              <div className='IEMiddle'>
                {exp.blurb}
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
          }
          {!exp.route &&
            <div className='IndividualExperienceNoClick' key={exp.id}>
              <div className='IETop'>
                <div className='IEInstitution'>
                  {exp.institution}
                </div>
                <div className='IEDate'>
                  {exp.date}
                </div>
              </div>
              <div className='IEMiddle'>
                {exp.blurb}
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
          }
          </>
        )}
      </div>
    </div>
  );

}

export default Experiences;