import './experiences.css';
import React,{ useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgCloseO } from "react-icons/cg";
import { VscFilePdf } from "react-icons/vsc";
import { experienceDetail } from './experienceDetail';
import resumeEnglish from './../../Assets/Mathieu_Huet_Resume_English.pdf';
import resumeFrancais from './../../Assets/Mathieu_Huet_Resume_Francais.pdf';

/*
Component that display my past experiences. Might appear on the main page if screen of the user is wide enough, otherwise will appear at http://www.mathieuhuet.com/resume/
*/

function Experiences () {
  let navigate = useNavigate();
  const experiences = useMemo(() => [
    {
      id: 0,
      institution: 'Battery Monitoring',
      languages: ['Node.js', 'Javascript', 'React', 'PostgreSQL', 'Koa', 'RESTful API', 'SNMP', 'UDP/IP', 'OpenVPN', 'Git'],
      date: '2023',
    },
    {
      id: 1,
      institution: 'Codeworks Bootcamp',
      languages: ['Node.js', 'Javascript', 'TypeScript', 'React', 'React Native', 'Redux', 'Angular', 'HTML', 'CSS', 'SQL', 'NoSQL', "GraphQL", 'MongoDB', 'Redis', 'Express', 'Koa', 'Expo', 'Git', 'JSON', 'RESTful API', 'Socket.IO', 'Linux/Unix'],
      date: '2022-2023',

    },
    {
      id: 2,
      institution: 'Innovation Mi8',
      languages: ['Python', 'Bash', 'OpenVPN', 'Linux/Unix/Bash', 'TCP/IP', 'UDP/IP'],
      date: '2021-2022',

    },
    {
      id: 3,
      institution: 'Université du Québec à Montréal',
      languages: ['Java', 'Assembly Language', 'MySQL', 'C++', 'Linux/Unix/Bash', 'Android Studio', 'GUI', 'HTML', 'CSS'],
      date: '2017-2020',

    }
  ], []);

  //displayexperience is use for whether or not display more details about the experience (-1 for don't display anything, 
  //otherwise set it to the ID of the experience you wanna show more detail)
  const [displayExperience, setDisplayExperience] = useState(-1);

  const [displayExperienceLanguage, setDisplayExperienceLanguage] = useState('FR');
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



  function DisplayExperience () {
    switch(displayExperience) {
      case 0:
        navigate('/battery_monitoring');
        break;
      case 1:
        if (displayExperienceLanguage === 'FR') {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('EN')}>
                  En
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.codeworksFR}
              </div>
            </div>
          )
        } else {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('FR')}>
                  Fr
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.codeworksEN}
              </div>
            </div>
          )
        }
      case 2:
        if (displayExperienceLanguage === 'FR') {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('EN')}>
                  En
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.mi8FR}
              </div>
            </div>
          )
        } else {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('FR')}>
                  Fr
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.mi8EN}
              </div>
            </div>
          )
        }
      case 3:
        if (displayExperienceLanguage === 'FR') {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('EN')}>
                  En
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.uqamFR}
              </div>
            </div>
          )
        } else {
          return (
            <div className='DisplayedExperience'>
              <div className='TopButtonsDisplayExperience'>
                <div className='CloseExperience' onClick={() => {
                  setDisplayExperience(-1);
                  setResult(experiences);
                }}>
                  <CgCloseO />
                </div>
                <div className='ChangeLanguage' onClick={() => setDisplayExperienceLanguage('FR')}>
                  Fr
                </div>
              </div>
              <div className='SingleExperience'>
                {experienceDetail.uqamEN}
              </div>
            </div>
          )
        }
      default:
        return;
    }
  }



  return (
    <div className="Experiences">
      <DisplayExperience />
      {displayExperience === -1 ? 
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
        <div className='DownloadSection'>
          <div className='Download-Link'>Télécharger mon CV &nbsp;
          <a
            className="PDF-Download"
            href={resumeFrancais}
            download='Mathieu_Huet_CV.pdf'
          >
             <VscFilePdf />
          </a>
          </div>
          <div className='Download-Link'>Download my resume &nbsp;
          <a
            className="PDF-Download"
            href={resumeEnglish}
            download='Mathieu_Huet_Resume.pdf'
          >
            <VscFilePdf />
          </a>
          </div>
        </div>
      </div> : 
      undefined}
      <div className='ExperienceList'>
        {result.map(exp => 
          <div className='IndividualExperience' key={exp.id} onClick={() => {
            setDisplayExperience(exp.id);
            setResult([]);
            setSearch('');
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