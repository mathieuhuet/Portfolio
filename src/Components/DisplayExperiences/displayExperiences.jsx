import './displayExperiences.css';
import './displayExperiencesMobile.css';
import React,{ useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import JavaScript from '../Icons/JavaScript';
import Java from '../Icons/Java';
import PostgreSQL from '../Icons/PostgreSQL';
import MongoDB from '../Icons/MongoDB';
import TypeScript from '../Icons/TypeScript';
import Python from '../Icons/Python';
import PHP from '../Icons/PHP';
import ReactIcon from '../Icons/ReactIcon';
import Angular from '../Icons/Angular';
import Docker from '../Icons/Docker';
import GraphQL from '../Icons/GraphQL';
import Redux from '../Icons/Redux';
import Cplusplus from '../Icons/Cplusplus';
import { SiMysql } from "react-icons/si"

function DisplayExperiences () {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const experiences = useMemo(() => [
    {
      id: 0,
      institution: 'GPMM_Alertes',
      blurb: "Application mobile et web pour monitorer les activitées de maintenance sur le réseau du REM pour les employés de GPMM O&M. L'application permet de faire des rapports des activités et de faire un suivi.",
      languages: ['Node.js', 'TypeScript', 'React', 'React Native', 'JavaScript', 'MongoDB', 'Mongoose', 'Express.js', 'RESTful API', 'Git'],
      date: '2023',
      route: 'gpmm',
    },
    {
      id: 1,
      institution: 'Friendly Bets',
      blurb: "Application mobile pour faire des paris avec vos amis et faire les suivi de vos paris.",
      languages: ['Node.js', 'TypeScript', 'React Native', 'JavaScript', 'MongoDB', 'Mongoose', 'Express.js', 'RESTful API', 'Git'],
      date: '2023',
      route: 'friendly_bets',
    },
    {
      id: 2,
      institution: 'Battery Monitoring',
      blurb: "Application web pour monitorer l'état des équipements d'Innovation Mi8 qui se trouve dans les chantiers de construction.",
      languages: ['Node.js', 'JavaScript', 'React', 'PostgreSQL', 'Sequelize', 'Koa', 'RESTful API', 'SNMP', 'UDP/IP', 'OpenVPN', 'Git', 'IoT'],
      date: '2023',
      route: 'battery_monitoring',
    },
    {
      id: 3,
      institution: 'Codeworks Bootcamp',
      blurb: "Codeworks est un bootcamp intensif 6jours/semaine, 12heures par jour, d'une durée de 3mois.",
      languages: ['Node.js', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Redux', 'Angular', 'jQuery', 'HTML', 'CSS', 'SQL', 'NoSQL', "GraphQL", "PostgreSQL", 'Sequelize ORM', 'MongoDB', 'Mongoose ORM', 'Redis', 'Express', 'Koa', 'Docker', 'Expo', 'Git', 'JSON', 'RESTful API', 'Socket.IO', 'Linux/Unix'],
      date: '2022-2023',
      route: 'codeworks',
    },
    {
      id: 4,
      institution: 'Learn PHP Course',
      blurb: "Compléter < Learn PHP Course > de Codecademy",
      languages: ['HTML', 'CSS', 'PHP', 'JavaScript'],
      date: '2022',
      route: 'codecademy',
    },
    {
      id: 5,
      institution: 'Innovation Mi8',
      blurb: "Écrire des scripts pour l'opération et la maintenance des équipements Innovation Mi8.",
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
      route: 'coursera',
    },
    {
      id: 7,
      institution: 'Université du Québec à Montréal',
      blurb: "Première introduction à la programmation avec le cours de Programmation 1 et 2 (Java), Fichiers et bases de données (MySQL), Oraganisation des ordinateurs et language d'assembleur (Assembly Language) et Construction, maintenance de logiciel (C++). Pour mon projet final j'ai fais une application Android via Android Studio qui permettait d'analyser les signaux Wi-Fi et Bluetooth que le cellulaire reçoit.",
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
    <div className="experiences">
      <div className='experience-search'>
        <div
          style={{fontWeight: 700, marginLeft: 16, marginBottom: 4}}
        >
          Rechercher une compétence :
        </div>
        <input 
          type="text" 
          value={search} 
          onChange={handleChangeSearch} 
          placeholder='Ex : Javascript'
          className='search-bar'
        />
      </div>
      <div className='experience-list'>

        {result.map(exp => 
          <div className='individual-experience' key={exp.id} onClick={() => {
            navigate(`/${exp.route}`);
          }}>
            <div className='ie-top'>
              <div className='ie-institution'>
                {exp.institution}
              </div>
              <div className='ie-date'>
                {exp.date}
              </div>
              {exp.languages.includes('PHP') &&
                <PHP
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('JavaScript') &&
                <JavaScript
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('TypeScript') &&
                <TypeScript
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('Java') &&
                <Java
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('Python') &&
                <Python
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('C++') &&
                <Cplusplus
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('Angular') &&
                <Angular
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {(exp.languages.includes('React') || exp.languages.includes('React Native')) &&
                <ReactIcon
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('PostgreSQL') &&
                <PostgreSQL
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('MongoDB') &&
                <MongoDB
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('GraphQL') &&
                <GraphQL
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('Redux') &&
                <Redux
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('Docker') &&
                <Docker
                  color='#82bf00'
                  size={isMobile ? 20 : 40}
                />
              }
              {exp.languages.includes('MySQL') &&
                <SiMysql 
                  size={isMobile ? 18 : 36}
                  color='#82bf00'
                />
              }
            </div>
            <div className='ie-middle'>
              {exp.blurb}
            </div>
            <div className='ie-bottom'>
              <div className='ie-languages'>
                {exp.languages.map(lang =>
                  <div className="languages" key={lang}>
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

export default DisplayExperiences;

